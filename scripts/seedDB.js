const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/ingredientsdb"
);

const foodSeed = [
    {
        ingredients: "bacon"
    },

    {
        ingredients: "onion"
    },

    {
        ingredients: "chicken breast"
    },
]

db.Food
    .remove({})
    .then(() => db.Food.collection.insertMany(foodSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });