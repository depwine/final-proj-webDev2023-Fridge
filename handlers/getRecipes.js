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

const getRecipes = async (req, res) => {

    try {

        //conn
        await client.connect()

        //db
        const db = client.db("Fridge")
        console.log("connected to Fridge collection")

        //get
        const result = await db.collection("recipes").find().toArray()

        //check
        if (result) {
            res 
                .status(200)
                .json({
                    status: 200,
                    message: "successfully fetched recipes",
                    data: result
                })
        }

    } catch {

        res
            .status(400)
            .json({
                status: 400,
                message: "failed to fetch recipes from DB"
            })
    }

    //disc
    client.close()
    console.log("disconnected from Fridge")

}

module.exports = { getRecipes }  ;