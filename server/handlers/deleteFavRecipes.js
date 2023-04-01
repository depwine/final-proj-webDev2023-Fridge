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

    try{

    } catch {
        
    }

}

module.exports = { deleteFavRecipes }  ;