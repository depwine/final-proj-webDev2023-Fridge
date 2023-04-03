"use strict";
require("dotenv").config();
const { MongoClient } = require("mongodb");
const { MONGO_URI } = process.env;

const dbName = "Fridge"

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const client = new MongoClient(MONGO_URI, options)

const getRandomRecipes = async (req,res) => {

    try {

    //
    await client.connect()

    //
    const db = client.db("Fridge")
    console.log("connected")

    //
    const results = await db.collection("random-recipes").find().toArray();

    if (results) {
        res
            .status(400)
            .json({
                status: 400,
                message: "random recipe lookup successful",
                data: results
            })
    }

    } catch (err) {
        console.log(err)

        res 
            .status(400)
            .json({
                status: 400,
                message: "random recipe lookup generic fail."
            })
    }

    //
    client.close()
    console.log("disconnect")

}

module.exports = { getRandomRecipes }