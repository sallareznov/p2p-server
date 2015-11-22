var data = [];

function getFiles() {
  return data;
}

function addFile(filename) {
  data.push(filename);
}

function removeFile(filename) {
  var filenameIndex = data.indexOf(filename);
  data.splice(filenameIndex, 1);
}

exports.getFiles = getFiles;
exports.addFile = addFile;
exports.removeFile = removeFile;
