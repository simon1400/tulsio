const qs = require('qs');

const query = qs.stringify({
  fields: ["title", "content"],
  populate: {
    post: {
      fields: ['slug'],
    },
    image: {
      fields: ['url'],
    },
    button: {
      fields: ['text', "link"],
    },
  },
}, {
  encodeValuesOnly: true,
});

module.exports = query