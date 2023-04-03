"use strict";
require("dotenv").config();
const { MongoClient } = require("mongodb");
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const client = new MongoClient(MONGO_URI, options)

const getFavRecipes = async (req,res) => {    

  const body = req.query

  const query = {
    userId : body.userId
    }

    try{

      //con
      await client.connect()

      //db
      const db = client.db("Fridge")
      console.log("connected")

      // //get recipes
      const result = await db.collection("Fav-Recipes").find(query).toArray();


      if (result){

        res
          .status(200)
          .json({
            status: 200,
            message: `Fav Recipe lookup for user ${body.userName} successful`,
            data: result
          })

      } else {
        res
        .status(404)
        .json({
          status: 404,
          message: `unable to query favourite recipes for user ${body.userName}`
        })
      }

    } catch (err) {

      res
        .status(400)
        .json({
          status: 400,
          message: `weird generic failure every 2nd time`
        })
        
    }

    //disc
    client.close()
    console.log("disconnected")

}

module.exports = { getFavRecipes }  ;