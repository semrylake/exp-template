var pgsql = require('pg'),
     config = require('./db_config'),
     sshClient = require('ssh2');
const { sshTunnelConfig } = require('./db_config');

var connection = module.exports = function () { };
createDbConnection = function () {
     var pgsqlConnection = pgsql.creteConnection({
          host: pgsql.pgSqlConfig.host,
          user: pgsql.pgSqlConfig.user,
          password: pgsql.pgSqlConfig.password,
          database: pgsql.pgSqlConfig.database,
          connectimeout: pgsql.pgSqlConfig.timeout
     });
     console.log("Step 2. create db connection")
     return pgsqlConnection;
}

connection.invokeQuery = function (sqlQuery, data) {
     console.log("Step 3. create db connection to ssh tunnel");
     var ssh = new sshClient();
     ssh.connect(config, sshTunnelConfig);
     ssh.on('ready', function () {
          ssh.forwardOut(
               config.localhost,
               config.pgSqlConfig.timeout,
               config.localhost,
               config.pgSqlConfig.port,
               function (err, stream) {
                    if (err) handleSSHError(err);
                    config.pgSqlConfig.stream = stream;
                    var db = pgsql.creteConnection(config.pgSqlConfig);
                    db.query(sqlQuery, function (err, rows) {
                         if (rows) {
                              console.log(rows);
                              data(rows);
                         }
                         if (err) { handlePgSQLError(err) }
                    });
               }
          );
      });
}