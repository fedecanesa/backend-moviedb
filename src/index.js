/* DEPENDECIES */
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const MOVIE_URI_DATABASE = require("./config"); 

// APP 
const app = express();

// MIDDLEWARES 
app.use(express.json());
app.use(express.urlencoded({ extended: false })); 
app.use(morgan('dev'));
app.use(cors());

// SETTINGS 
app.set("port", process.env.PORT || 4000);

/* ENDPOINTS */
app.use(require('./Routes/movie.routes'));

mongoose.connect( MOVIE_URI_DATABASE , {
    useUnifiedTopology: true,
    useNewUrlParser: true
    }, (error) => {
    if (error) { 
        console.log("Error on try connect database.\n") }
    else {
        console.log("Database conected.\n")

        app.listen(app.get("port"), (error) => {
            if(!error) { console.log(`Server running in port ${app.get("port")}\n`) }
            else { console.log("Error at trying to run Backserver.") }
        })
    }
})