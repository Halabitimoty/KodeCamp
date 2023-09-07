const cp = require("child_process");

const progs = {
  list: "ls",
  copy: "cp",
  folder: "mkdir",
};

let child = cp.spawn(progs.list);
child.stdout.on("data", (stream) => {
  console.log(`${stream}`);
});
