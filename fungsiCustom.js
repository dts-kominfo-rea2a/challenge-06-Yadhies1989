// TODO: import module bila dibutuhkan di sini
const fs = require("fs");
// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData = (fnCallBack) => {
  // const kata = [];
  // file pertama
  fs.readFile(file1, "utf-8", (err, data) => {
    if (err) {
      fnCallBack(err, null);
    } else {
      const hasilBacaData = JSON.parse(data);
      const datasatu = [];
      datasatu.push(hasilBacaData.message.split(" ")[1]);

      // file kedua

      fs.readFile(file2, "utf-8", (err, data) => {
        if (err) {
          fnCallBack(err, null);
        } else {
          const hasilBacaData = JSON.parse(data);

          hasilBacaData.forEach((element) => {
            datadua = [];
            datadua.push(element.message.split(" ")[1]);
          });

          // file ketiga

          fs.readFile(file3, "utf8", (err, data) => {
            if (err) {
              fnCallBack(err, null);
            } else {
              const hasilBacaData = JSON.parse(data);

              hasilBacaData.forEach((element) => {
                datatiga = [];
                datatiga.push(element.data.message.split(" ")[1]);
              });

              fnCallBack(null, [datasatu, datadua, datatiga]);
            }
          });
        }
      });
    }
  });
};

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
