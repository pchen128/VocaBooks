// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://ann:n7352XgDFMfE7zVr@cluster0-r8cnz.mongodb.net/user-registration-db?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//     if (err) {
//         console.log('Error occurred while connecting to MongoDB Atlas...\n', err);
//     }
//     console.log('Connected...');
//     const collection = client.db("CEFR").collection("A");
//     // perform actions on the collection object
//     client.close();
// });
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
})