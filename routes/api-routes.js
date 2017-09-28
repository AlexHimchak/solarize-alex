var db = require("../models/index.js");
var path = require('path');

module.exports = function(app) {
  app.get("/api/user", function(req, res) {
  db.User.findAll({}).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  app.post("/api/user", function(req, res) {
    console.log(req.body);
    db.User.create(req.body).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  app.delete("/api/user/:id", function(req, res) {
    db.User.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbUser) {
      res.json(dbUser)
    });
  });

  app.get("/api/lead", function(req, res) {
  db.Leads.findAll({}).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  app.post("/api/lead", function(req, res) {
    console.log(req.body);
    db.Leads.create(req.body).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  app.delete("/api/lead/:id", function(req, res) {
    db.Leads.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbUser) {
      res.json(dbUser)
    });
  });
}