const express = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const cors = require("cors");
const app = express();
require("dotenv").config();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//  MONGODB DATABASE USER PASSWORD
const uri = "mongodb://127.0.0.1:27017";
// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ydmxw3q.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    const carDatabase = client.db("carDatabaseDB").collection("Cars");
    const itemCartDatabase = client
      .db("itemOnCartDatabaseDB")
      .collection("itemOnCart");

    app.post("/cars", async (req, res) => {
      const carFromUI = req.body;
      const result = await carDatabase.insertOne(carFromUI);
      res.send(result);
    });
    app.get("/cars", async (req, res) => {
      const cursor = carDatabase.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    app.get("/cars/:id", async (req, res) => {
      const id = req.params.id;

      const quary = { _id: new ObjectId(id) };

      const result = await carDatabase.findOne(quary);

      res.send(result);
    });
    app.get("/brandName", async (req, res) => {
      const cursor = carDatabase.find();
      const result = await cursor.toArray();
      res.send(result);
    });
    app.get("/brandName/:brands", async (req, res) => {
      const brandName = req.params.brands;

      const query = { brand: brandName };
      const result = await carDatabase.find(query).toArray();

      res.send(result);
    });
    app.put("/cars/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const upDateCar = req.body;

      const car = {
        $set: {
          name: upDateCar.name,
          image: upDateCar.image,
          brand: upDateCar.brand,
          type: upDateCar.type,
          price: upDateCar.price,
          shortDescription: upDateCar.shortDescription,
          ratingvalue: upDateCar.ratingvalue,
        },
        // $set :updatDatas
      };
      const result = await carDatabase.updateOne(filter, car, options);
      res.send(result);
    });
    // cart item
    app.post("/itemOnCartUser", async (req, res) => {
      const itemCartFromUI = req.body;
      const result = await itemCartDatabase.insertOne(itemCartFromUI);
      res.send(result);
    });
    app.get("/itemOnCartUser", async (req, res) => {
      const cursor = itemCartDatabase.find();
      const result = await cursor.toArray();
      res.send(result);
    });
    app.get("/itemOnCartUser/:user", async (req, res) => {
      const userId = req.params.user;
      const filter = { userUID: userId };
      const result = await itemCartDatabase.find(filter).toArray();
      res.send(result);
    });
    app.delete("/itemOnCart/:user", async (req, res) => {
      const userId = req.params.user;
      const filter = { _id: new ObjectId(userId) };
      const result = await itemCartDatabase.deleteOne(filter);
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client  will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Crud is running...");
});

app.listen(port, () => {
  console.log(`Simple Crud is Running on port ${port}`);
});
