const { html, css, js } = require("./content");
const { create_folder, create_file, check } = require("./functionalities");

const folder = "./frontend-scaffold";

create_folder(folder);
create_file(`${folder}/index.html`, html);
create_folder(`${folder}/css`);
create_folder(`${folder}/js`);
create_folder(`${folder}/images`);
create_file(`${folder}/css/style.css`, css);
create_file(`${folder}/js/script.js`, js);

// console.log("Frontend scaffold not created successfully!");
