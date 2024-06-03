var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/obterDados", function (req, res) {
    dashboardController.obterUltimosDados(req, res);
});

router.get("/tempo-real", function (req, res) {
    dashboardController.buscarDadosEmTempoReal(req, res);
})

module.exports = router;