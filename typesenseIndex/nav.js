require("dotenv").config();
const client = require('./config')
const axios = require('axios')
const nameCollection = 'navigation'
const APP_API = process.env.APP_API

const schema = require(`./schemas/${nameCollection}`)
const query = require(`./queries/${nameCollection}`)

module.exports = (async () => {

  const res = await axios.get(`${APP_API}/api/${nameCollection}?${query}`)
  const data = res.data.data.attributes.topNav.item

  try {
    await client.collections(nameCollection).delete();
  } catch (err) {
    console.error(err);
  }

  console.log("Creating schema...");

  await client.collections().create(schema);

  console.log("Populating collection...");

  const transformData = []

  data.forEach(async (item, index) => {
    transformData[index] = {
      title: item.name,
      link: item.link
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