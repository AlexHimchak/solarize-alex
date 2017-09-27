var db = require("../models");
var path = require('path');

module.exports = function(app) {
  app.get("/api/leads", function(req, res) {
  db.Lead.findAll({}).then(function(dbUser) {

      res.json(dbUser);
    });
  });

  app.post("/api/leads", function(req, res) {
    console.log(req.body);
    db.Lead.create(req.body).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  app.delete("/api/leads/:id", function(req, res) {
    db.Lead.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbUser) {
      res.json(dbUser)
 });
});
}