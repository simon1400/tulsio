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
  pagination: {
    pageSize: 100,
    page: 1,
  },
}, {
  encodeValuesOnly: true,
});

module.exports = query