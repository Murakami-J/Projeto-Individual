var express = require("express");
var router = express.Router();

var grupoController = require("../controllers/grupoController");

router.get("/listarGrupo/:idGrupo", function(req, res){
    grupoController.listarGrupo(req, res);
});

router.post("/teste", function (req, res) {
    grupoController.teste(req, res);
});

module.exports = router;