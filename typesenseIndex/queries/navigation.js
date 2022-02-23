const qs = require('qs');

const query = qs.stringify({
  populate: {
    topNav: {
      // populate: ['item']
      populate: "*"
    }
  },
}, {
  encodeValuesOnly: true,
});

module.exports = query