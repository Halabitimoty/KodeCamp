const readline = require("readline");
const cmd = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

cmd.question("what is your age > ");
