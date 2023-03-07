// const { Client } = require('pg');
require('dotenv').config();

// require('ssh2');
const { Client } = require('pg');
// const sshClient = new Client();
const sshClient = new Client();

// define connection config for the database
// const dbServer = {
//      host: process.env.PG_HOST,
//      port: process.env.PG_PORT,
//      user: process.env.PG_USER,
//      password: process.env.PG_PASSWORD,
//      database: process.env.PG_DATABASE
// }
// define connection config for the ssh tunnel
// const tunnelConfig = {
//      host: process.env.TUNNEL_SSH_HOST,
//      port: process.env.TUNNEL_SSH_PORT,
//      username: process.env.TUNNEL_SSH_USER,
//      password: process.env.TUNNEL_SSH_PASSWORD
// }

// const forwardConfig = {
//      srcHost: 'localhost', // any valid address
//      srcPort: 5432, // any valid port
//      dstHost: dbServer.host, // destination database
//      dstPort: dbServer.port // destination port
// };

// const SSHConnection = new Promise((resolve, reject) => {
//      sshClient.on('ready', () => {
//           sshClient.forwardOut(
//                forwardConfig.srcHost,
//                forwardConfig.srcPort,
//                forwardConfig.dstHost,
//                forwardConfig.dstPort,
//                (err, stream) => {
//                     if (err) reject(err);

//                     // create a new DB server object including stream
//                     const updatedDbServer = {
//                          host: process.env.PG_HOST,
//                          port: process.env.PG_PORT,
//                          username: process.env.PG_USER,
//                          password: process.env.PG_PASSWORD,
//                          database: process.env.PG_DATABASE,
//                     };
//                     // connect to mysql
//                     const client = new Client({
//                          host: process.env.PG_HOST,
//                          port: process.env.PG_PORT,
//                          user: process.env.PG_USER,
//                          password: process.env.PG_PASSWORD,
//                          database: process.env.PG_DATABASE,
//                          //     ssl: false,
//                     });
//                     // check for successful connection
//                     //  resolve or reject the Promise accordingly          
//                     client.connect();
//                });
//      }).connect(tunnelConfig);
// });




// Lama
const client = new Client({
     host: process.env.PG_HOST,
     port: process.env.PG_PORT,
     user: process.env.PG_USER,
     password: process.env.PG_PASSWORD,
     database: process.env.PG_DATABASE,
     //     ssl: false,
});
client.connect();
client.query("SELECT * FROM manifest_nakesp1g123 LIMIT 1", (err, res) => {
     if (!err) {
          console.log(res.rows);
     } else {
          console.log(err.message);
     }
     client.end();
});