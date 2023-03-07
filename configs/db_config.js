console.log('Step 1. import from db_config.js');
require('dotenv')
module.exports = {
     localhost: '127.0.0.1',
     pgSqlConfig: {
          host:process.env.PG_HOST,
          user: process.env.PG_USER,
          password: process.env.PG_PASSWORD,
          database: process.env.PG_DATABASE,
          port: process.env.PG_PORT,
          timeout: '24000',
     },
     sshTunnelConfig: {
          username: process.env.TUNNEL_SSH_USERNAME,
          password: process.env.TUNNEL_SSH_PASSWORD,
          host: process.env.TUNNEL_SSH_HOST,
          port: process.env.TUNNEL_SSH_PORT,
     }
};