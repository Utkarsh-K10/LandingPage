let mongoose = require("mongoose");
let express = require("express");
let cors = require("cors");
let bodyParser = require("body-parser");
require("dotenv").config();
const cookieParser = require("cookie-parser");

// app
const app = express();

// conect mongoDb database
mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log("DB CONNECTED")
})
.catch((error) => {
  console.log("ERROR CONNECTING", error)
});

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors({origin:true, credentials:true}));
app.use(cookieParser())


// routes
const register = require("./routes/user");
app.use("/", register);

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