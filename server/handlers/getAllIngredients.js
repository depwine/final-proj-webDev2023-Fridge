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

const getAllIngredients = async (req, res) => {

    try{

        // client
        await client.connect();

        //db
        const db = client.db(dbName)
        console.log(`connected to ${dbName} collection`)
    
        //get
        const results = await db.collection("ingredients").find().toArray();

        if (results){
            res
                .status(200)
                .json({
                    status: 200,
                    message: "Ingredient lookup successful",
                    data: results
                })
        }

    } catch (err) {        
            console.log("DB Lookup failed")
        res
            .status(400)
            .json({
                status: 400,
                message: `DB Lookup failed, ${err}`
            })
    }


    //disc
    client.close()
    console.log(`disconnected from the ${dbName} collection`)


}

module.exports = { getAllIngredients }  ;