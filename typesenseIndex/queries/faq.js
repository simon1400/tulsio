const qs = require('qs');

const query = qs.stringify({
  fields: ["title"],
  populate: {
    faq: {
      fields: ['question', 'answer'],
    },
  },
}, {
  encodeValuesOnly: true,
});

module.exports = query