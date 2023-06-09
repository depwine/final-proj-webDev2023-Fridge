"use strict";

// import the needed node_modules.
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");

const { getAllIngredients } = require("./handlers/getAllIngredients")
const { getRecipes } = require ("./handlers/getRecipes")
const { postFavRecipes} = require ("./handlers/postFavRecipes")
const { deleteFavRecipes } = require ("./handlers/deleteFavRecipes")
const { getFavRecipes } = require ("./handlers/getFavRecipes")
const { getOneRecipe } = require ("./handlers/getOneRecipe")
const { getRandomRecipes} = require ("./handlers/getRandomRecipes")

const port = 4000;

express()
    // Below are methods that are included in express(). We chain them for convenience.
    // --------------------------------------------------------------------------------

    // This will give us will log more info to the console. see https://www.npmjs.com/package/morgan
    .use(morgan("tiny"))
    .use(express.json())

    // Any requests for static files will go into the public folder
    .use(express.static("public"))

    .use(cors())

    //below this is for the cyclic hosting

    // .use(express.static(path.join(__dirname, "../client/build")))

    // .get("*", function (_, res) {
    // res.sendFile(
    //     path.join(__dirname, "../client/build/index.html"),
    //     function (err) {
    //     res.status(500).send(err);
    //     }
    // );
    // })

    //above is for cyclic

    // Nothing to modify above or below this line
    // --------------------------------

    
//-----------------------------------------------------GETs---------------------------

    //  GET all ingredients for initial page-load fetch
        //  this will be used to auto-complete the ingredient search

    .get("/test", (req,res) => {
        res
            .status(200)
            .json({
                itWorked: "it worked",
            })
            
    })

    .get("/api/ingredients", getAllIngredients)
    .get("/api/recipes", getRecipes)
    .get("/api/recipe/:recipe", getOneRecipe)
    
    .get("/api/favrecipes", getFavRecipes)
    .get("/api/randomrecipes", getRandomRecipes)
    
    .post("/api/favrecipes", postFavRecipes)
    .delete("/api/favrecipes", deleteFavRecipes)

    // ---------------------------------
    // Nothing to modify above or below this line

    // this is our catch all endpoint.
    .get("*", (req, res) => {
        res.status(404).json({
        status: 404,
        message: "This is obviously not what you are looking for.",
        });
    })

    // Node spins up our server and sets it to listen on port 8888.
    .listen(process.env.PORT || port, () => console.log(`Listening on port ${port}`));
