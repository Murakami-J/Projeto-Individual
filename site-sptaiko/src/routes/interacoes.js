var express = require("express");
var router = express.Router();

var interacaoController = require("../controllers/interacaoController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrarCurtida/:idUsuario/:idPublicacao/:fkAutor", function (req, res) {
    interacaoController.cadastrarCurtida(req, res);
})



router.get("/listar/:idUsuario/:idPublicacao/:fkAutor", function (req, res) {
    interacaoController.listar(req, res);
});

router.get("/listarComentarios/:idUsuario/:idPublicacao", function (req, res) {
    interacaoController.listarComentarios(req, res);
});

router.get("/selecionarPublicacao/:idPublicacao", function (req, res) {
    interacaoController.selecionarPublicacao(req, res);
});


router.get("/listarCurtidas/:idUsuario/:idPublicacao/:fkAutor", function (req, res) {
    interacaoController.listarCurtidas(req, res);
});

router.get("/listarCurtidasPorUsuario/:idUsuario/:idPublicacao/:fkAutor", function (req, res) {
    interacaoController.listarCurtidasPorUsuario(req, res);
});

router.delete("/deletarCurtida/:idUsuario/:idPublicacao/:fkAutor", function (req, res) {
    interacaoController.deletarCurtida(req, res);
});

router.get("/exibirQtdComentarios/:idPublicacao", function (req, res) {
    interacaoController.exibirQtdComentarios(req, res);
});

module.exports = router;