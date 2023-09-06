const readline = require("node:readline");
const { add, remove, show_items, length } = require("./functionalities");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt:
    "\n\nInput 'add' to add a value \nInput 'remove' to remove a value\nInput 'show-items' show the items in the cart \nInput 'length' show the length of the cart \nInput 'exit' show the exit the program.\n\nCommand: ",
});

const cart = {
  cartArray: [],
  addToCart(param) {
    return this.cartArray.push(param);
  },
  removeFromCart(param) {
    let elem_to_remove = cart.cartArray.find((elem) => elem === param);
    let index_of_elem = cart.cartArray.indexOf(elem_to_remove);
    if (index_of_elem !== -1) {
      cart.cartArray.splice(index_of_elem, 1);
    }
  },
  stanby() {
    rl.on("line", (line) => {
      let input = line.trim();

      switch (input) {
        case "add":
          add(cart, rl);
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
          console.log(`Invalid Command : ${input}`);
          rl.prompt();
          break;
      }
    });
  },
};

/**
 * ---------Main-----------
 */

rl.prompt();
rl.on("close", () => {
  console.log("Bye!");
  process.exit(0);
});

cart.stanby();
