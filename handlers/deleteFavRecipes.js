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

const deleteFavRecipes = async (req,res) => {

    const body = req.body;

        // if recipe ID is null, fail
      if (body.recipeId === null) {
          console.log("recipe id field empty, failed.")

          return res
                    .status(400)
                    .json({
                        status: 400,
                        message: "recipe id field empty, failed."
                    })
      }
  

    const queryParams = {"recipeId": body.recipeId}


    try{

      // 
      await client.connect()

      //
      const db =  client.db("Fridge")
      console.log("connected")

      // test 
      // const result = await db.collection("Fav-Recipes").findOne(queryParams)
      const result = await db.collection("Fav-Recipes").deleteOne(queryParams)

      console.log(result)   
      
      if (result.deletedCount === 1) {
        console.log(`${body.recipeName} successfully deleted from database`)
        res
          .status(200)
          .json({
            status: 200,
            message: `${body.recipeName} successfully deleted from database`
          })
      }

    } catch {

      res
        .status(400)
        .json({
          status: 400,
          message: "Failure deleting item from favourite recipes"
        })
        
    }

    //
    client.close()
    console.log("disconnected")

}

module.exports = { deleteFavRecipes }  ;