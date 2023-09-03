const readline = require("node:readline");
const { add, remove, show_items, length } = require("./functionalities");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt:
    "\n\nInput 'add' to add a value \nInput 'remove' to remove a value\nInput 'show-items' show the items in the cart \nInput 'length' show the length of the cart \nInput 'exit' show the exit the program.\n\nCommand: ",
});

const cart = {
  cartArray: [1, 4, 6, 7, 4],
  addToCart(param) {
    return this.cartArray.push(param);
  },
  removeFromCart(param) {
    let data = cart.cartArray.filter((arr) => arr === param);
    return data;
  },
  stanby() {
    return new Promise((resolve, reject) => {
      rl.prompt("value : ", (answer) => {
        resolve(answer);
        rl.prompt();
      });

      main();
    });
  },
};

/**
 * ---------Main-----------
 */

rl.prompt();

function main() {
  rl.on("line", (line) => {
    let input = line.trim();

    switch (input) {
      case "add":
        add(cart);
        break;
      case "remove":
        remove(cart, rl);
        break;
      case "show-items":
        show_items(cart, rl);
        break;
      case "length":
        length(cart, rl);
        break;
      case "exit":
        rl.close();
        break;
      default:
        console.log(`Invalid Process : ${input}`);
        break;
    }
  });
}
rl.on("close", () => {
  console.log("Bye!");
  process.exit(0);
});

main();
