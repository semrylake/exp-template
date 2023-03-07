// const { Client } = require('pg');
require('dotenv').config();

console.log(process.env.PG_HOST);

// (async () => {
//   const client = new Client({
//     host: process.env.PG_HOST,
//     port: process.env.PG_PORT,
//     user: process.env.PG_USER,
//     password: process.env.PG_PASSWORD,
//     database: process.env.PG_DATABASE,
//   });

//   await client.connect();
//   const res = await client.query('SELECT * FROM manifest_nakesp1g123 LIMIT 5', ['Connection to postgres successful!']);
//   console.log(res.rows[0].connected);
//   await client.end();
// })();

// const client = new Client({
//      host: "localhost",
//      port: "5432",
//      user: "postgres",
//      password: "56964",
//      database: "ukom_2023",
//      //     ssl: false,
// });

// client.connect();
// client.query("SELECT * FROM manifest_nakesp1g123 LIMIT 5", (err, res) => {
//      if (!err) {
//           console.log(res.rows);
//      } else {
//           console.log(err.message);
//      }
//      client.end();
// });