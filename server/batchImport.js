const ingredients = require("./data/name-id-ingredient.json")
const recipes = require ("./data/mockRecipeResponse.json")


const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// console.log(MONGO_URI)

// creates a new client
const client = new MongoClient(MONGO_URI, options);

const batchImportIngredients = async (req, res) => {

  try {

    // connect to the client
    await client.connect();

    // connect to the database 
    const db = client.db("Fridge");
    console.log("connected!");

    // and creating a new collection 'companies'
    await db.collection("ingredients").insertMany(ingredients);

    // On success/no error, send
    console.log("Success, ingredients added to mongoDB");

  } catch (err) {

    // on failure/error, send
    console.log("Failure", err);
  }

  // close the connection to the database server
  client.close();
  console.log("disconnected!");
};

const batchMockRecipes = async (req, res) => {

  try{

    //client
    await client.connect()

    // connect to the database
    const db = client.db("Fridge");
    console.log("connected!");
    
    //write
    const results = await db.collection("recipes").insertMany(recipes)

    //check 
    if (results) {

        console.log("successfully batch inserted recipe to DB")

    }


  } catch {
    //err
      console.log("failure to write batch to server")
  }

  //disc
  client.close()
  console.log("disconnected!")

}

  // *-----------------RUN EACH OF THESE FUNCTIONS 1 AT A TIME, COMMENTING THE OTHERS OURS ------------------*/
  // otherwise, mongo batch write error gets triggered //

    // batchImportIngredients()

    batchMockRecipes()


