/*jshint esversion: 6 */ 
const express = require("express");
const router = express.Router();


//Routes
router.get("/", (req,res) =>{
    res.render("index.html");
    
});

router.get("/contact", (req,res) =>{
    res.render("contact.html");
    
});

router.get("/about", (req,res) =>{
    res.render("about.html");
    
});

module.exports = router;