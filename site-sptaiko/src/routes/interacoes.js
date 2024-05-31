var express = require("express");
var router = express.Router();

var interacaoController = require("../controllers/interacaoController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrarCurtida/:idUsuario", function (req, res) {
    interacaoController.cadastrarCurtida(req, res);
})


router.get("/pegarFkAutor", function (req, res) {
    interacaoController.pegarFkAutor(req, res);
});

router.delete("/deletarCurtida/:idPublicacao", function (req, res) {
    interacaoController.deletarCurtida(req, res);
});

module.exports = router;