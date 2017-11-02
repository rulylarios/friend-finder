//adding in our friends array
var friends = require("../data/friends.js");

//exporting our api route
module.exports = function(app) {
    app.get("/api/friends", function(req, res){
        var friendsAPI = req.friends;
        res.json(friends);
    });

    app.post("/api/friends", function(req, res){
        var newFriend = req.body;

        console.log(newFriend);

        friends.push(newFriend);

        res.json(newFriend);
    });
};