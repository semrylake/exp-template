var pgsql = require('pg'),
     config = require('./db_config'),
     sshClient = require('ssh2');

// const { sshTunnelConfig } = require('./db_config');

createDbConnection = function () {
     var pgsqlConnection = pgsql.creteConnection({
          host: config.pgSqlConfig.host,
          user: config.pgSqlConfig.user,
          password: config.pgSqlConfig.password,
          database: config.pgSqlConfig.database,
          connectimeout: config.pgSqlConfig.timeout
     });
     console.log("Step 3. create db connection")
     return pgsqlConnection;
}
var sqlQuery = "SELECT kode_pt,nama_ruang,namalengkap,namaasal_pt, waktumulai , mulai , sisamenit, (mulai + (sisamenit * interval '1 minute')) waktu_selesai FROM(SELECT *, (sisawaktu/60) sisamenit, cast(waktumulai:: timestamp as time) mulai FROM logsesi LEFT JOIN mstpeserta ON mstpeserta.username = logsesi.username INNER JOIN pesertaujian ON pesertaujian.userid = mstpeserta.userid INNER JOIN mstujian_pt ON mstujian_pt.id_mst_ujian_pt = pesertaujian.id_mst_ujian_pt WHERE  CAST(waktumulai AS DATE) = '2023-03-26' AND sisawaktu != '0' AND userstat != '0' AND waktulogout IS NULL ) logsesi ORDER BY waktu_selesai DESC, waktumulai ASC ";
 
const invokeQuery = (sqlQuery, data)=> {
     console.log("Step 2. create db connection to ssh tunnel");
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

module.exports = invokeQuery;