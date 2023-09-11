const fs = require("fs");

/**
 *
 * @function create_folder
 * @param {string} path
 * @returns Promise on Succesful Creation
 */

function create_folder(path) {
  return new Promise((resolve, reject) => {
    fs.access(path, (err) => {
      if (err) {
        console.error(`Folder ${path} Does Not Exist.\n`);
        fs.mkdir(path, (error) => {
          if (error) {
            reject(`Can't create Folder.\n`);
          } else {
            resolve(`Folder ${path} created successfully.\n`);
          }
        });
      } else {
        console.error(`Folder ${path} Exists!!!\nNot Created\n`);
      }
    });
  });
}

/**
 *
 * @function create_file
 * @param {string} fileName
 * @param {string} fileContent
 * @returns Promise on Succesful Creation
 */

function create_file(fileName, fileContent) {
  return new Promise((resolve, reject) => {
    fs.access(fileName, (err) => {
      if (err) {
        console.error(`File ${fileName}Does Not Exist.\n`);
        fs.writeFile(fileName, fileContent, (err) => {
          if (err) {
            reject(`Can't create File.\n`);
          } else {
            resolve(`File ${fileName} created successfully.\n`);
          }
        });
      } else {
        console.error(`File ${fileName} Exists!!!\nNot Created\n`);
      }
    });
  });
}

function check() {
  console.log("Checking...");
}

module.exports = {
  create_folder,
  create_file,
  check,
};
