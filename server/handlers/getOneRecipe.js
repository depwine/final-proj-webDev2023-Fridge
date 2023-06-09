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

const getOneRecipe = async (req, res) => {

    const body = req.params.recipe

    const queryParams = {
        id: Number(body)
    }

    try {

        //
        await client.connect()

        // 
        const db = client.db("Fridge")
        console.log("connected")

        const results = await db.collection("recipes").findOne(queryParams)

        console.log(results)

        if (results) {
            res
                .status(200)
                .json({
                    status: 200,
                    message: `successfully retrieved recipe info for ${req.params.recipe}`,
                    data: results
                })
        } 
    } catch {
        res
            .status(400)
            .json({
                status: 400,
                message: "failes to retrieve recipe info."
            })
    }


}

module.exports = { getOneRecipe };