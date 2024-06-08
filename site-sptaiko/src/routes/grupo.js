const express = require("express");
const router = express.Router();

const grupoController = require("../controllers/grupoController");

router.get("/listarGrupo/:idGrupo", function(req, res){
    grupoController.listarGrupo(req, res);
});

module.exports = router;