const loadNsaveData = require("./loadNsaveData.js");
const alerrt = require("alert");
const alerrts = require("alert");
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const tanggalpinjam = () => {
  let now = new Date();
  let days = now.getDate();
  let month = now.getMonth();
  let year = now.getFullYear();
  return `${days} ${months[month]} ${year}`;
};

const tanggalbalikin = () => {
  let someDate = new Date();
  someDate.setTime(someDate.getTime() + 7 * 24 * 60 * 60 * 1000);
  let days = someDate.getDate();
  let month = someDate.getMonth();
  let year = someDate.getFullYear();
  return `${days} ${months[month]} ${year}`;
};

const tambahNotes = function (nama, eMail, buku, noHp) {
  let notess = loadNsaveData.loadNotes();
  const dataFilter = notess.filter(
    (data) => data.eMail === eMail || data.noHp === noHp
  );
  if (dataFilter.length === 0) {
    alerrt(`Sukses Tambah data`);
    notess.push({
      no: notess.length + 1,
      nama,
      eMail,
      buku,
      noHp,
      tanngalPinjam: tanggalpinjam(),
      tanngalbalikin: tanggalbalikin(),
    });
    loadNsaveData.savenotess(notess);
  } else alerrt("Tidakk Bisa Meminjam karena data sudah ada");
};

module.exports = tambahNotes;
