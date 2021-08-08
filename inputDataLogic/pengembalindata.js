const loadNsaveData = require("./loadNsaveData.js");
const alerrt = require("alert");

const hapusNotes = function (eMail, noHp) {
  let notess = loadNsaveData.loadNotes();
  const dataFilter = notess.filter((data) => {
    if (data.eMail !== eMail || data.noHp !== noHp) return data;
  });
  if (notess.length === dataFilter.length) alerrt(`data tersebut tidak ada`);
  else {
    alerrt("Buku sudah dikembalikan");
    loadNsaveData.savenotess(dataFilter);
  }
};

module.exports = hapusNotes;
