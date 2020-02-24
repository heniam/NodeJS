const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017/';
const dbname = 'conFusion';

MongoClient.connect(url,(err, client) => {

  assert.equal(err, null);

  console.log('Connected correctly to server');

  const db = client.db(dbname);
  const collection = db.collection('dishes');

  collection.insertOne({"name": "Uthappizza", "description":"test"}, (err, result) => {
        assert.equal(err, null);

        console.log("After Insert:\n");
        //result ops -- how many operations have been carried out!
        console.log(result.ops);

        //find({}) searches everything and converts it to array
        collection.find({}).toArray((err, docs) => {
            assert.equal(err, null);

            console.log("Found:\n");
            //docs will return all the documents with the criteria that we wanted
            console.log(docs);

            //dropCollection - will remove the dishes from the db 
            db.dropCollection("dishes", (err, result) => {
                assert.equal(err, null);

                client.close();
            });
        });
    });

});
