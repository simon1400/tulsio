const qs = require('qs');

const query = qs.stringify({
  populate: {
    topNav: {
      populate: ['item']
    }
  },
}, {
  encodeValuesOnly: true,
});

console.log(query);

module.exports = query