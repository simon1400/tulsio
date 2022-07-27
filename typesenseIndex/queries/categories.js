const qs = require('qs');

const query = qs.stringify({
  fields: ['title', 'slug'],
  populate: {
    image: {
      fields: ['url', 'alternativeText'],
    }
  },
}, {
  encodeValuesOnly: true,
});

module.exports = query