const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");


const homeStartingContent = "According to [the] anarchist vision, any structure of hierarchy and authority carries a heavy burden of justification, whether it involves personal relations or a larger social order. If it cannot bear that burden - sometimes it can - then it is illegitimate and should be dismantled. When honestly posed and squarely faced, that challenge can rarely be sustained"

const aboutContent = "First off welcome we are glad you choose the Proletarian Times for news related to Current Affairs, GeoPolitical Economy, Domestic Politics, Elections, and Much more stay tuned as we are currently updating stories and should have something worth the while soon. :) -Admin TheLastWord"


const contactContent = "If you are looking to contact us our current point of Contact is"

const app = express();


app.set( 'view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/", function(req, res){
    res.render("home" , {startingContent: homeStartingContent});
});

app.get("/about", function(req, res){
    res.render("about" , {aboutContent: aboutContent});
});

app.get("/contact", function(req, res){
    res.render("contact" , {contactContent: contactContent});
});


app.listen(3000, function(){
    console.log("Server started on port 3000")
})