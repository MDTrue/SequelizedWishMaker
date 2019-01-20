var express = require("express");

var router = express.Router();

var db = require("../models/");

//get post put

router.get("/",function(req, res) {
    db.Wish.findAll({raw:true}).then(function(dbWishes){
      
      var hbsArr = []
      for(var j = 0;j <dbWishes.length;j++){
        hbsArr.push(dbWishes[j])
        console.log("each db wish",dbWishes[j])
      };
      console.log("the whole array",hbsArr)
      var hbsObject = { 
        wishes: hbsArr
    }
        console.log(hbsObject);
        res.render("index",hbsObject);
    });
});
router.post("/api/wishes", function(req, res) {
  db.Wish.create({
    wish_name: req.body.wish_name,
    made: req.body.made
  }).then(function(dbWishes) {
    res.json(dbWishes);
  });
});
  
  router.put("/api/wishes/:id", function(req, res) {
    db.Wish.update({
      made: req.body.made
    }, {
      where: {
        id: req.params.id
      }
    }).then(function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
});

  
  router.delete("/api/wishes/:id", function(req, res) {
    db.Wish.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(result) {
      if (result.affectedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
  


module.exports = router