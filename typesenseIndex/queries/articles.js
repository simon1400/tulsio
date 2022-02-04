const qs = require('qs');

const query = qs.stringify({
  fields: ['title', 'perex', 'slug'],
  populate: {
    image: {
      fields: ['url'],
    },
    chapters: {
      fields: ['title', 'text'],
    },
    categories: {
      fields: ['title', 'slug']
    },
    labels: {
      fields: ['title', 'slug']
    }
  },
}, {
  encodeValuesOnly: true,
});

module.exports = query