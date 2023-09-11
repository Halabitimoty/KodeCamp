const fs = require("fs").promises;
const { html, css, js } = require("./content");
const { create_folder, create_file, check } = require("./functionalities");

const folder = "./frontend-scaffold";

/**
 * -----Create Main Folder----
 */
create_folder(folder)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error(err);
  });

/**
 * ----Create Sub Folders-----
 */
create_folder(`${folder}/css`)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error(err);
  });
create_folder(`${folder}/js`)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error(err);
  });

create_folder(`${folder}/images`)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error(err);
  });

/**
 * ----Create Files-----
 */

create_file(`${folder}/index.html`, html)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error(err);
  });

create_file(`${folder}/css/style.css`, css)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error(err);
  });

create_file(`${folder}/js/script.js`, js)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error(err);
  });

process.on("exit", () => {
  console.log("Frontend scaffold created successfully!");
});
