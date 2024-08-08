const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;
require('dotenv').config();
console.log(process.env.DB_USER);
console.log(process.env.DB_PASSWORD);

// middleware
app.use(express.json());
app.use(cors());

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@job-portal-demo.vpurx8c.mongodb.net/?retryWrites=true&w=majority&appName=job-portal-demo`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    const db = client.db("mernJobPortal");
    const jobsCollections = db.collection("demoJobs");

    // Post a job
    app.post("/post-job", async (req, res) => {
      const body = req.body;
      body.createAt = new Date();
      const result = await jobsCollections.insertOne(body);
      if (result.insertedId) {
        return res.status(200).send(result);
      } else {
        return res.status(404).send({
          message: "Cannot insert! Try again later",
          status: false
        });
      }
    });

    // Get all the jobs
    app.get("/all-jobs", async (req, res) => {
      const jobs = await jobsCollections.find({}).toArray();
      res.send(jobs);
    });

    // Get single job using ID
    app.get("/all-jobs/:id", async (req, res) => {
      const id = req.params.id;
      const job = await jobsCollections.findOne({
        _id: new ObjectId(id)
      });
      res.send(job);
    });

    // Get jobs by email
    app.get("/myJobs/:email", async (req, res) => {
      const jobs = await jobsCollections.find({ postedBy: req.params.email }).toArray();
      res.send(jobs);
    });

    // Delete a job
    app.delete("/job/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await jobsCollections.deleteOne(filter);
      res.send(result);
    });

    //UPDATE A JOB
    app.patch("/update-job/:id", async(req, res) =>{
      const id = req.params.id;
      const jobData = req.body;
      const filter = {_id: new ObjectId()}
      const options = {upsert: true};
      const updateDoc = {
        $set: {
          ...jobData
        },
      };
      const result = await jobsCollections.updateOne(filter,updateDoc,options)
      res.send(result)
    })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('Hello Developer!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
