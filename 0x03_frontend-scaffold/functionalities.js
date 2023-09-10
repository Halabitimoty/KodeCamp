const fs = require("fs");

function create_folder(path) {
  fs.access(path, (err) => {
    if (err) {
      console.error("Folder does not exist:");
      fs.mkdir(path, (error) => {
        if (error) {
          console.error(`Can't create Folder.\n${error}`);
        } else {
          console.log(`Folder ${path} created successfully.`);
        }
      });
    } else {
      console.log("Folder exists.");
    }
  });
}

function create_file(fileName, fileContent) {
  fs.writeFile(fileName, fileContent, (err) => {
    if (err) {
      console.error("Error creating the file:");
    } else {
      console.log(`File '${fileName}' has been created successfully.`);
    }
  });
}

module.exports = {
  create_folder,
  create_file,
};
