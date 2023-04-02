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

const getFavRecipes = async (req,res) => {    

  console.log(req.params)
  const body = req.query

  const query = {
    clientId : body.clientId
  }

    try{

      //con
      client.connect()

      //db
      const db = await client.db("Fridge")
      console.log("connected")
      
      //get recipes
      const result = await db.collection("Fav-Recipes").find(query).toArray();

      if (result){
        res
          .status(200)
          .json({
            status: 200,
            message: `Fav Recipe lookup for user ${body.userName} successful`,
            data: result
          })
      }

    } catch {

      res
        .status(400)
        .json({
          status: 400,
          message: `unable to query favourite recipes for user ${body.userName}`
        })
        
    }

    //disc
    client.close()
    console.log("disconnected")

}

module.exports = { getFavRecipes }  ;