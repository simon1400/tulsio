const qs = require('qs');

const query = qs.stringify({
  fields: ['title', 'perex', 'slug'],
  populate: {
    image: {
      fields: ['url', 'alternativeText'],
    },
    chapters: {
      fields: ['title', 'text'],
    },
    categories: {
      fields: ['title', 'slug']
    },
    labels: {
      fields: ['title', 'slug', 'color']
    }
  },
  pagination: {
    pageSize: 100,
    page: 1,
  },
}, {
  encodeValuesOnly: true,
});

module.exports = query