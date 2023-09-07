function getResponseFromAPI() {
  return new Promise((response, reject) => {
    try {
      response();
    } catch (error) {
      reject(error);
    }
  });
}
console.log(getResponseFromAPI() instanceof Promise);

function getFullResponseFromAPI(data) {
  return new Promise((response, reject) => {
    if (data) {
      response({ status: 200, body: "Success" });
    } else {
      reject("The fake API is not working currently");
    }
  });
}
