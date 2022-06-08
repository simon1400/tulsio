const client = require('./config')
const axios = require('axios')
const nameCollection = 'faq'
const APP_API = process.env.APP_API

const schema = require(`./schemas/${nameCollection}`)
const query = require(`./queries/${nameCollection}`)

module.exports = (async () => {
  const res = await axios.get(`${APP_API}/api/${nameCollection}?${query}`)
  const data = res.data.data

  try {
    await client.collections(nameCollection).delete();
  } catch (err) {
    console.error("Collection has same data: ", err);
  }

  console.log("Creating schema...");

  await client.collections().create(schema);

  console.log("Populating collection...");  

  const transformData = []

  data.attributes.faq.forEach((item, index) => {
    transformData[index] = {
      question: item.question,
      answer: item.answer
    };
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