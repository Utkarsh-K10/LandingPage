let mongoose = require("mongoose");
let express = require("express");
let cors = require("cors");
let bodyParser = require("body-parser");
require("dotenv").config();
let {json, urlencoded} = express;
const cookieParser = require("cookie-parser");
const expressValidator = require("express-validator");

// import routes
const testRoutes = require("./routes/test");

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
app.use(json());
app.use(expressValidator());
app.use(urlencoded({extended:true}))
app.use(cookieParser());

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