const fs = require("fs");

function create_folder(path) {
  fs.mkdir(path, (error) => {
    if (error) {
      console.error(`Can't create Folder.\n${error}`);
    } else {
      console.log(`Folder ${path} created successfully.`);
    }
  });
}

function create_file(fileName, fileContent) {
  fs.writeFile(fileName, fileContent, (err) => {
    if (err) {
      console.error("Error creating the file:", err);
    } else {
      console.log(`File '${fileName}' has been created successfully.`);
    }
  });
}

function check() {}

module.exports = {
  create_folder,
  create_file,
  check,
};
