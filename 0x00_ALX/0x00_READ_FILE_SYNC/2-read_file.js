const fs = require("fs");

function filter_data(data) {
  const output = data.map((data) => {
    const str = data;
    const charToRemove = "\r";
    const charArray = str.split("");
    const updatedStr = charArray
      .filter((char) => char !== charToRemove)
      .join("");
    return updatedStr;
  });

  return output;
}

function countStudents(path) {
  let content = [];
  let NUMBER_OF_STUDENTS = 0;
  let set;
  let field = {};
  let names = {};

  try {
    const data = fs.readFileSync(path, "utf-8");
    const input = filter_data(data.toString().split("\n"));

    content = input.map((data) => data.split(","));
    set = new Set(content.map((data) => data[3]));
    NUMBER_OF_STUDENTS = content.length - 1;

    for (const value of set) {
      field[value] = 0;
      names[value] = [];
    }
    content.map((data) => {
      for (const value in field) {
        if (data[3] === value) {
          field[value]++;
          names[value].push(data[0]);
        }
      }
    });

    console.log(`Number of students: ${NUMBER_OF_STUDENTS}`);
    for (const value in field) {
      if (value !== "field") {
        console.log(
          `Number of students in ${value}: ${field[value]}. List: ${names[
            value
          ].join(", ")}`
        );
      }
    }
  } catch (error) {
    console.error("Cannot load the database");
  }
}

countStudents("./database.csv");
