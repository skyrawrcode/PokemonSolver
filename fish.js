const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

(async function () {
  var data = fs.promises.readFile("./poke_names.txt", { encoding: "utf8" });
  var pokemon = (await data).split(/\r?\n/);
  

  var askForFish = () => {
  rl.question("What is the fish prompt?", (answer) => {
    const name = RegExp(answer.replace(/_/gi, "\\w").trim());
    
    pokemon.forEach((element) => {
      if (element.match(name)) console.log(`The pokemon may be ${element}`)
    });
    askForFish();  
  });
  }

  askForFish();
})();
