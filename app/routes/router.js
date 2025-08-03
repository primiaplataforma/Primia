var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
  res.render("pages/telainicial");
});

router.get("/materia1", function (req, res) {
  res.render("pages/materia1");
});

router.get("/paginaMaterias", function (req, res) {
  res.render("pages/paginaMaterias");
});

router.get("/login", function (req, res) {
  res.render("pages/login");
});

router.get("/professor", function (req, res) {
  res.render("pages/professor");
});

router.get("/telainicial", function (req, res) {
  res.render("pages/telainicial");
});

router.get("/sobre", function (req, res) {
  res.render("pages/sobre");
});

module.exports = router;


