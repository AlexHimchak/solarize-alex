
let leadAPI = function(app) {
  app.get("/api/lead", function(req, res) {
  db.lead.findAll({}).then(function(dblead) {
      res.json(dbUser);
    });
  });

  app.post("/api/lead", function(req, res) {
    console.log(req.body);
    db.lead.create(req.body).then(function(dblead) {
      res.json(dbUser);
    });
  });

  app.delete("/api/lead/:id", function(req, res) {
    db.lead.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dblead) {
      res.json(dbUser)
    });
  });
}
export default leadAPI;