const fs = require("fs").promises;
const { html, css, js } = require("./content");
const { create_folder, create_file, check } = require("./functionalities");

const folder = "./frontend-scaffold";

const main_folder = fs
  .access(folder)
  .then(() => {
    console.log("Folder exists.");
  })
  .catch((err) => {
    console.error("Folder does not exist:");
    create_folder(folder);
  });

main_folder
  .then(() => {
    create_file(`${folder}/index.html`, html);
    create_folder(`${folder}/css`);
    create_folder(`${folder}/js`);
    create_folder(`${folder}/images`);
    create_file(`${folder}/css/style.css`, css);
    create_file(`${folder}/js/script.js`, js);
  })
  .catch(() => {
    console.log("Not Successful");
  });

console.log("Frontend scaffold not created successfully!");
