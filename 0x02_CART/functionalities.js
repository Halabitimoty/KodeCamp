/**
 * ----Functionalities-----
 */

function add(param) {
  param.stanby().then((value) => {
    param.addToCart(value);
  });
}
function remove(param, input) {
  param.stanby().then((value) => {
    param.removeFromCart(value);
  });
  input.prompt();
}
function show_items(param, input) {
  for (const items of param.cartArray) {
    console.log(items);
  }
  input.prompt();
}

function length(param, input) {
  console.log(`The length of item is : ${param.cartArray.length}`);
  input.prompt();
}

module.exports = {
  add,
  remove,
  show_items,
  length,
};
