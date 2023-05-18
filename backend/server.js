let mongoose = require("mongoose");
let express = require("express");
let cors = require("cors");
let bodyParser = require("body-parser");
let dbConfig = require("./database/db");
require("dotenv").config();

// import routes
const testRoutes = require("./routes/test");

// app
const app = express();

// conect mongoDb database
mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log("Connected successfully")
})
.catch((error) => {
  console.log("error connecting", error)
});

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());
 
// routes
app.use("/", testRoutes);

// port
const port = process.env.PORT || 4000;

// listener
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})
  
// Sucess message
app.use((req, res, next) => {
  res.status(200).send('Server working Fine')
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});