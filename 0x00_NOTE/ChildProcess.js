const cp = require("child_process");
const { on } = require("events");
const { exit } = require("process");

const progs = {
  list: "ls",
  copy: "cp",
  folder: "mkdir",
  file: "touch",
};

let child = cp.spawn(progs.list);
let copy = cp.spawn(progs.copy, ["spawn.txt", "spawn.txt"]);
let file = cp.spawn(progs.file, ["spawn.txt"]);

/**
 * ----Process----
 */

child.stdout.on("data", (stream) => {
  console.log(`${stream}`);
});

child.stderr.on("data", (err) => {
  console.error(err);
});

//Create File
file.stdout.on("close", () => {
  console.log("File Created Successfully");
});

file.stderr.on("close", (err) => {
  console.log("Unable to Create file.");
});

//Copy File
copy.stderr.on("data", (err) => {
  console.log("There was an error Copying File.");
});
copy.stdout.on("exit", () => {
  console.log("copy process finished");
});
