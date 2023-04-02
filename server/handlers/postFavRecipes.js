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

const { uuid } = require('uuidv4');

        // send new favourite recipe to mongo - under the specific user ID made through login
const postFavRecipes = async (req,res) => {

    const body  = req.body;
    const collection = "Fav-Recipes"
    let _id = uuid()

        // validate all fields
    if (Object.values(body).includes(null)){
    
        console.log("One or more fields invalid, nothing added to DB")

       return res
            .status(400)
            .json({
                status: 400,
                message: "One or more fields invalid, nothing added to DB"
            })
    }

    const queryBody = {
        "_id" : _id,
        "userId" : body.userId,
        "recipeId" : body.recipeId,
        "recipeName" : body.recipeName,
        "recipeImage" : body.recipeImage
    };

    try{
        //conn 
        client.connect();

        //db
        const db = await client.db("Fridge")
        console.log("connected")

        // ----------------------- validate that item isnt already in favourites ------------------------------
                //fetch all existing recipes
        const recipeResults = await db.collection(collection).find().toArray();

        console.log(recipeResults)

        const findExisting = recipeResults.find((recipe) => {
            return (recipe.recipeId === body.recipeId)
        })

        if (findExisting) {

            console.log("already in your favourites, nothing new added")

            return res
                .status(401)
                .json({
                    status: 401,
                    message: `${body.recipeId} ${body.recipeName} is already in ${body.userName}'s favourites. Nothing new added`
                })

        }



    

        // do the thing
        const results = await db.collection(collection).insertOne(queryBody)
        console.log(results)

        if (results.acknowledged) {
            res
                .status(200)
                .json({
                    status: 200,
                    message: `successfully added ${body.recipeName} to ${collection}`
                })
        }

    } catch {
        //
        res
            .status(400)
            .json({
                status: 400,
                message: `unable to post ${body} to ${collection}`
            })
    }

        //disc
        client.close()
        console.log("disconnected")
}

module.exports = { postFavRecipes }  ;