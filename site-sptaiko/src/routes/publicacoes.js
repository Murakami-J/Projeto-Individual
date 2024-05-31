var express = require("express");
var router = express.Router();

var publicacaoController = require("../controllers/publicacaoController");

router.get("/listar", function (req, res) {
    publicacaoController.listar(req, res);
});

router.get("/listar/:idUsuario", function (req, res) {
    publicacaoController.listarPorUsuario(req, res);
});

router.get("/pesquisar/:descricao", function (req, res) {
    publicacaoController.pesquisarDescricao(req, res);
});

router.post("/publicar/:idUsuario", function (req, res) {
    publicacaoController.publicar(req, res);
});

router.put("/editar/:idAviso", function (req, res) {
    publicacaoController.editar(req, res);
});

router.delete("/deletar/:idAviso", function (req, res) {
    publicacaoController.deletar(req, res);
});

module.exports = router;