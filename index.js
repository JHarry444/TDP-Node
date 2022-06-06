console.log("Hello, World!");

const me = {
    name: "JH",
    age: 28,
    job: "Trainer"
}

console.log("Me: ", me);

const axios = require("axios"); // imports the axios library

axios.get("https://pokeapi.co/api/v2/pokemon/sneasel")
    .then(res => {
        console.log("My favourite pokemon is", res.data.name);
    }).catch(err => console.error(err));

const maths = require("./maths");

console.log(maths.add(1, 1));