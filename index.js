const http = require("http");
const { MongoClient } = require("mongodb");
const client = new MongoClient(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

client.connect((err) => {
  client.close();
});

//create a server object:
http
  .createServer(function (req, res) {
    res.write("cu bosta mijo!"); //write a response to the client
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080
