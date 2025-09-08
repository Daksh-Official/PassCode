import express from "express";
import { MongoClient } from "mongodb";
import cors from "cors";
import bodyParser from "body-parser";
import 'dotenv/config'

const app = express()
const port = 3000
const client = new MongoClient(process.env.MONGO_CLIENT);


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded())

await client.connect();
console.log('Connected successfully to server');
const db = client.db(process.env.DB_NAME);
const collection = db.collection('passwords');

    app.get('/', async (req, res) => {
      const findResult = await collection.find({}).toArray();
      res.send(findResult);
    })

    app.post('/',async (req,res)=>{
        console.log("recieved",req.body);
        await collection.insertOne(req.body);
        const result = await collection.find({}).toArray();
         res.send(result);
    })

    app.delete('/',async (req,res)=>{
        console.log(req.body)
        await collection.deleteOne({id:req.body.id});
        const result = await collection.find({}).toArray();
        res.send(result);
    })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


