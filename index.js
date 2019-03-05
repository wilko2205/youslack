//Modules
const _ = require("lodash");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

//Set up express
const app = express();
app.use(bodyParser.json());

//Set up mongoose
const { mongoURI } = require("./config/keys");
mongoose.connect(
	mongoURI,
	{
		useNewUrlParser: true,
		useCreateIndex: true
	}
);

//Add Routes
require("./auth")(app);
require("./messages")(app);

//Prevent annoying GET error
app.get("/", (req, res) => {
	res.send("Hello, world");
});

//Start App
const PORT = process.env.PORT || 3000;
app.listen(PORT);
