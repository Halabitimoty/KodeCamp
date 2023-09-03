const readline = require("node:readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "Guess a Number between 1 and 10 : ",
});

/**
 * @function randomNumber
 * @param {Number} max
 * @param {Number} min
 * @returns Number | Integer
 *
 */

function randomNumber(max, min) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
/**
 * @function Result Displays Result
 * @param {Number} user
 * @param {Number} bot
 */
function Result(user, bot) {
  if (user === bot) {
    console.log("You Won");
  } else {
    console.log(`You Lost! The correct answer is ${bot}`);
  }
}
rl.prompt();

rl.on("line", (line) => {
  if (!isNaN(line)) {
    let userNumber = parseInt(line);
    let botNumber = randomNumber(10, 1);
    Result(userNumber, botNumber);
  } else {
    console.log("Invalid Data");
  }

  rl.prompt();
}).on("close", () => {
  console.log("Bye!");
  process.exit(0);
});
