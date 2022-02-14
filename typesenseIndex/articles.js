const client = require('./config')
const axios = require('axios')
const nameCollection = 'articles'
const APP_API = process.env.APP_API

const schema = require(`./schemas/${nameCollection}`)
const query = require(`./queries/${nameCollection}`)

module.exports = (async () => {

  console.log(APP_API)

  const res = await axios.get(`${APP_API}/api/${nameCollection}?${query}`)
  const data = res.data.data 

  try {
    
    const collection = await client.collections(nameCollection).retrieve();
    console.log("Found existing collection of "+nameCollection);
    console.log(JSON.stringify(collection, null, 2));

    // if (collection.num_documents !== data.length) {
    //   console.log("Collection has different number of documents than data");
    //   console.log(`Deleting collection ${nameCollection}...`);
    //   await client.collections(nameCollection).delete();
    // }
    await client.collections(nameCollection).delete();
  } catch (err) {
    console.error("Collection has same data: ", err);
  }

  console.log("Creating schema...");
  console.log(JSON.stringify(schema, null, 2));

  await client.collections().create(schema);

  console.log("Populating collection...");  

  const transformData = []

  data.forEach(async (item, index) => {
    item = item.attributes
    transformData[index] = {
      title: item.title,
      slug: item.slug,
      perex: item.perex,
      image: undefined,
      chapters: [],
      titleLabels: [],
      slugLabels: [],
      colorLabels: [],
      category: []
    };

    if(item.image?.data?.attributes?.url) {
      transformData[index].image = APP_API + item.image?.data?.attributes?.url
    }

    item.categories.data.forEach((category, idx) => {
      transformData[index].category[idx] = category.attributes.title;
    });
    item.labels.data.forEach((label, idx) => {
      transformData[index].titleLabels[idx] = label.attributes.title;
      transformData[index].slugLabels[idx] = label.attributes.slug;
      transformData[index].colorLabels[idx] = label.attributes.color;
    });
    item.chapters.forEach((chapter) => {
      transformData[index].chapters.push(chapter.title)
      transformData[index].chapters.push(chapter.text)
    });
  });

  try {
    const returnData = await client
      .collections(nameCollection)
      .documents()
      .import(transformData);

    console.log(`Return data ${nameCollection}: `, returnData);
  } catch (err) {
    console.error(err);
  }
})();