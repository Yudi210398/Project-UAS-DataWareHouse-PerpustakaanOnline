const fs = require("fs");
function savenotess(note) {
  const noteSSs = JSON.stringify(note);
  return fs.writeFileSync("notes.json", noteSSs);
}

function loadNotes() {
  try {
    let dataBufer = fs.readFileSync(`notes.json`);
    let data = dataBufer.toString();
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
}

module.exports = {
  loadNotes,
  savenotess,
};
