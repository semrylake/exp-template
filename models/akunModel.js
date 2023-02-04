// import connection
const db = require("../configs/database.js");
const getAkun = (result) => {
     db.query("SELECT nama_ktp, no_ktp, email FROM req_pemohon LIMIT 6", (err, results) => {
          if (err) {
               console.log(err);
               result(err, null);
          } else {
               result(null, results);
               console.log("get data "+results.length+" akun successfully");
          }
     });
}
module.exports = getAkun;
