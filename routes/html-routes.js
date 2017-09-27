var path = require("path");

module.exports = function(app) {

  app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, "../landing.html"));
  });
    app.get("/admin", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/DashboardViews/pages/AdminView.html"));
  });
  app.get("/dashboard", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/dashboard.html"));
  });

}

