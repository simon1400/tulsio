const qs = require('qs');

const query = qs.stringify({
  fields: ["title"],
  populate: {
    faq: {
      fields: ['question', 'answer'],
      pagination: {
        pageSize: 100,
        page: 1,
      },
    },
  },
}, {
  encodeValuesOnly: true,
});

module.exports = query