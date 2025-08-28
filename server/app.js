const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth");
require("dotenv").config();

const { MongoClient, ServerApiVersion } = require("mongodb");
const app = express();
app.use(cors()); // Enable CORS for all routes
app.use(express.json());
const PORT = process.env.PORT || 3000;

const uri =
  "mongodb+srv://arnav-new:5MsKzOuRB9V9AmJx@jam-session.g8mjofx.mongodb.net/jam-session?retryWrites=true&w=majority&appName=jam-session";
// const uri =
//   "mongodb+srv://arnavchevula:TNsJNPPAEwXRYrdF@jam-session.g8mjofx.mongodb.net/?retryWrites=true&w=majority&appName=jam-session";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
});

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(async () => {
    console.log("Connected to MongoDB");
  })
  .catch(err => {
    console.error("Error connecting to MongoDB", err);
  });
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    console.log("close");
    await client.close();
  }
}
run().catch(console.dir);

app.listen(PORT, () => {
  console.log("Server Listening on PORT:", PORT);
});

app.use("/api/auth", authRoutes); // All the routes defined in auth.js will be prefixed with /api/auth

app.get("/status", async (request, response) => {
  console.log("status");
  const status = {
    Status: "Running"
  };

  response.send(status);
});

app.get("/musicians", async (request, response) => {
  await client.connect();

  const myDB = client.db("jam-session");
  const myColl = myDB.collection("musicians");
  const findResult = myColl.find();
  const output = [];
  for await (const doc of findResult) {
    output.push(doc);
  }

  response.send(output);
});

app.post("/add-musician", async (request, response) => {
  const status = {
    Status: "add musician"
  };
  await client.connect();

  const myDB = client.db("jam-session");
  const myColl = myDB.collection("musicians");
  const doc = {
    name: request.body.name,
    email: request.body.email,
    instagram: request.body.instagram,
    phoneNum: request.body.phoneNum,
    instrument: request.body.instrument
  };
  const result = await myColl.insertOne(doc);
  response.send(status);
});
