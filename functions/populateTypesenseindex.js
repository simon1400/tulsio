require("dotenv").config();
const qs = require('qs');
const axios = require('axios')
const Typesense = require("typesense");
const BASE_URL = "http://localhost:1335";

module.exports = (async () => {
  const TYPESENSE_CONFIG = {
    nodes: [
      {
        host: process.env.TYPESENSE_HOST,
        port: process.env.TYPESENSE_PORT,
        protocol: process.env.TYPESENSE_PROTOCOL,
      },
    ],
    apiKey: process.env.TYPESENSE_ADMIN_API_KEY,
  };

  console.log("Config: ", TYPESENSE_CONFIG);

  const typesense = new Typesense.Client(TYPESENSE_CONFIG);

  const schema = {
    name: "articles",
    num_documents: 0,
    fields: [
      {
        name: "title",
        type: "string",
        facet: false,
      },
      {
        name: "perex",
        type: "string",
        facet: false,
      },
      {
        name: "image",
        type: "string",
        facet: false,
      },
      {
        name: "category.lvl0",
        type: "string[]",
        facet: true,
        optional: true,
      },
      {
        name: "category.lvl1",
        type: "string[]",
        facet: true,
        optional: true,
      },
      {
        name: "category.lvl2",
        type: "string[]",
        facet: true,
        optional: true,
      },
      {
        name: "label.lvl0",
        type: "string[]",
        facet: true,
        optional: true,
      },
      {
        name: "label.lvl1",
        type: "string[]",
        facet: true,
        optional: true,
      },
      {
        name: "label.lvl2",
        type: "string[]",
        facet: true,
        optional: true,
      },
      {
        name: "chapters",
        type: "string[]",
        facet: false,
      },
    ]
  };

  const query = qs.stringify({
    fields: ['title', 'perex'],
    populate: {
      image: {
        fields: ['url'],
      },
      chapters: {
        fields: ['title', 'text'],
      },
      categories: {
        fields: ['title']
      },
      labels: {
        fields: ['title']
      }
    },
  }, {
    encodeValuesOnly: true,
  });

  const reqData = await axios.get(`${BASE_URL}/api/articles?${query}`)
  const articles = reqData.data.data

  try {
    
    const collection = await typesense.collections("articles").retrieve();
    console.log("Found existing collection of movies");
    console.log(JSON.stringify(collection, null, 2));

    if (collection.num_documents !== articles.length) {
      console.log("Collection has different number of documents than data");
      console.log("Deleting collection");
      await typesense.collections("articles").delete();
    }
  } catch (err) {
    console.error(err);
  }

  console.log("Creating schema...");
  console.log(JSON.stringify(schema, null, 2));

  await typesense.collections().create(schema);

  console.log("Populating collection...");

  const transformData = []

  articles.forEach(async (article, index) => {
    article = article.attributes
    transformData[index] = {
      title: article.title,
      perex: article.perex,
      image: BASE_URL + article.image?.data?.attributes?.url,
      chapters: []
    };

    article.categories.data.forEach((category, idx) => {
      let categoriesArr = article.categories.data.slice(0, idx + 1)
      categoriesArr = categoriesArr.map(item => item?.attributes?.title)
      transformData[index][`category.lvl${idx}`] = [categoriesArr.join(">")];
    });
    article.labels.data.forEach((label, idx) => {
      let labelsArr = article.labels.data.slice(0, idx + 1)
      labelsArr = labelsArr.map(item => item?.attributes?.title)
      transformData[index][`label.lvl${idx}`] = [labelsArr.join(">")];
    });
    article.chapters.forEach((chapter) => {
      transformData[index].chapters.push(chapter.title)
      transformData[index].chapters.push(chapter.text)
    });

    //[Science Fiction], [Science Fiction > Action], [Science Fiction > Action > Adventure], [Science Fiction > Action > Adventure > Western]
  });

  try {
    const returnData = await typesense
      .collections("articles")
      .documents()
      .import(transformData);

    console.log("Return data: ", returnData);
  } catch (err) {
    console.error(err);
  }
})();