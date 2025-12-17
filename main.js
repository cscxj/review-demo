const { log } = require("console");

function main() {
  console.log("Hello World");

  console.log("Hello World2");

  console.log(require("os").platform());

  console.log(document.getElementById("app").innerHTML);
}

main();
