var express = require("express");
var router = express.Router();

var grupoController = require("../controllers/grupoController");

router.get("/listarGrupo", function(req, res){
    grupoController.listarGrupo(req, res);
});

module.exports = router;