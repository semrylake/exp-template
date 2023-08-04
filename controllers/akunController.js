// Import function from Product Model
// const getAkun = require("../models/akunModel.js");
// const showAkun = async (req, res) => {
//     try {
//         const excl = require('excel4node');
//         getAkun((err, results) => {
//             if (err) {
//                 res.send(err);
//             } else {
//                 res.json(results);
//             }
//             const data = results;
//             const wb = new excl.Workbook();
//             const ws = wb.addWorksheet('Worksheet Name');
//             const headingColumnNames = [
//                 "nama",
//                 "no_ktp",
//                 "email",
//             ];
//             let headingColumnIndex = 1;
//             headingColumnNames.forEach(heading => { 
//                 ws.cell(1,headingColumnIndex++).string(heading)
//             });
//             let rowIndex = 2;
//             data.forEach(record => { 
//                 let columnIndex = 1;
//                 Object.keys(record).forEach(columnName => { 
//                     ws.cell(rowIndex, columnIndex++).string(record[columnName])
//                 });
//                 rowIndex++;
//             });
//             wb.write('dataAkun.xlsx');
//             console.log(data);
//         });
//     } catch (err) {
//         console.error("error : " + err);
//     }
// }
const returnjson = function(req, res, next) {
    res.json({"msg":'Route for users here now finished add livereload sample'});
  };
module.exports = returnjson;

// cek cek nanti hapus