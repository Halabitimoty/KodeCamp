/**
 *
 * @function add
 * @param {Object} param
 * @param {stdin} input
 */
function add(param, input) {
  input.question(
    "Type the Product you will like to add\nProduct : ",
    (line) => {
      param.addToCart(line);
      console.log("\nProduct added Succesfully.");
      input.prompt();
      return;
    }
  );
}

/**
 *
 * @function remove
 * @param {Object} param
 * @param {stdin} input
 */
function remove(param, input) {
  input.question(
    "Type the Product you will like to remove\nProduct : ",
    (line) => {
      param.removeFromCart(line);
      console.log("\nProduct removed Succesfully.");
      input.prompt();
      return;
    }
  );
}

/**
 *
 * @function show_items
 * @param {Object} param
 * @param {stdin} input
 */
function show_items(param, input) {
  let output = "";
  for (const items of param.cartArray) {
    output += `${items} , `;
  }
  console.log(output);
  input.prompt();
}

/**
 *
 * @function length
 * @param {Object} param
 * @param {stdin} input
 */
function length(param, input) {
  console.log(`The length of item is : ${param.cartArray.length}`);
  input.prompt();
}

/**Export all functionalies */
module.exports = {
  add,
  remove,
  show_items,
  length,
};
