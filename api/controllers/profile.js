const router = require('express').Router();
const { Model } = require('sequelize');
const { User } = require('../models');
const { Profile } = require('../models');
const passport = require('../middlewares/authentication');

//router.get("/", passport.isAuthenticated(), (req, res) => { }

router.get("/", (req, res) => { 
    // db.User.findAll().then(User => res.send(Users));
    Profile.findAll().then(Profiles => res.send(Profiles));
    //Model.sync().then(function(err) {
        // insert new user
        // Profile.create({
        //     school: "cuny",
        //     graduatingYear: 2019,
        //     classes: "super1, super2",
        //     major: "art"
            
        // }).then(function(user) {
        //     // you can now access the newly created user via the variable user
        //     console.log(user);
        // }, function(err){
        //  console.log(err);
    
        // });
    //});
    console.log("Testing");
});





module.exports = router;