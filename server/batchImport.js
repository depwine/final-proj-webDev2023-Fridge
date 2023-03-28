const ingredients = require("./data/name-id-ingredient.json")


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

const batchImportIngredients = async () => {

  try {

    // connect to the client
    await client.connect();

    // connect to the database (db name is provided as an argument to the function)
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

  // *-----------------RUN EACH OF THESE FUNCTIONS 1 AT A TIME, COMMENTING THE OTHERS OURS ------------------*/
  // otherwise, mongo batch write error gets triggered //

    batchImportIngredients()

module.exports = {  batchImportIngredients   };
