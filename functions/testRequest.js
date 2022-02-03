// const { exec } = require("child_process");
// require("dotenv").config();

// const API_KEY = process.env.TYPESENSE_ADMIN_API_KEY;
// const PORT = 8108;

// const command = `docker run -d -p ${PORT}:8108 -v\`pwd\`/typesense-server-data/:/data \
// typesense/typesense:0.22.0.rcu6 --data-dir /data --api-key=${API_KEY} --listen-port ${PORT}  --enable-cors`;

// exec(command, (err, stdout, stderr) => {
//   if (!err && !stderr) console.log("Typesense Server is running...");

//   if (err) {
//     console.log("Error running server: ", err);
//   }

//   if (stderr) {
//     console.log("Error running server: ", stderr);
//   }

//   if (stdout) {
//     console.log("Server output: ", stdout);
//   }
// });

const qs = require('qs');
const axios = require('axios')

const query = qs.stringify({
  fields: ['title', 'perex'],
  populate: {
    image: {
      fields: ['url'],
    },
    chapters: {
      fields: ['title', 'text'],
    },
    categories: {
      fields: ['title']
    },
    labels: {
      fields: ['title']
    }
  },
}, {
  encodeValuesOnly: true,
});

const test = async () => {
  const req = await axios.get(`http://localhost:1335/api/articles?${query}`)
  console.log(data.data.data);
}

test()

