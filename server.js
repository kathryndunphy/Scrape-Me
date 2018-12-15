var express = require("express");
var exhbs = require("express-handlebars");
var mongoose = require("mongoose");


//if we can find a sight, probably a student project site...APP, we would still be able to more effectively utilize this function to grab bits of public information slightly more easily.  but they got smart on us, didn't they?

var cheerio = require("cheerio");
var axios = require("axios");


//require models
var db = require("./models");

// put that on our local browser please- and hope people smarter than us can't access that somehow and RUIN OUR LIVES
var PORT = 3000;

//plug it in with Express

var app = express();


app.use(logger(  ));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//make a static/public folder
app.use(express.statis("public"));

mongoose.connect(MONGODB_URI);

//library used to get the data
axios.get("https://www.architecturaldigest.com/").then(function(response){
// parses HTML and makes it something we can use like jQuery - load HTML content into cheerio
    var $ = cheerio.load(response.data);

    // var results = [];

    $("li.feature-list-wrapper").each(function(i, element){

        var results = {};
       
        var title = $(element).text();
        var link = $(element).parent().attr("href");


        //make this into what we want as an article in index.js model
        db.Article.create(result).then(function(dbArticle){
            //if it works log to console
            console.log(dbArticle);
        })
        //otherwise catch the error
        .catch(function(err) {
            return res.json(err);
                });

        //now take results and push into empty array object like so
        results.push({
            title: title,
            link: link
        });
    });
    //console.log(results;)
});