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

// PUBLICAÇÃO ==================================================================
router.post("/publicar/:idUsuario", function (req, res) {
    publicacaoController.publicar(req, res);
});

router.get("/pesquisarPublicacao/:publicacaoPesquisada", function (req, res) {
    publicacaoController.pesquisarPublicacao(req, res);
});


router.post("/publicarComentario/:idUsuario/:idPublicacao/:fkAutor2/:mensagem", function (req, res) {
    publicacaoController.publicarComentario(req, res);
});

router.get("/exibirTituloPublicacaoEdicao/:idPublicacaoEdicao/:fkAutor", function (req, res) {
    publicacaoController.exibirTituloPublicacaoEdicao(req, res);
});

router.delete("/deletarPublicacao/:idPublicacao/:fkAutor", function (req, res) {
    publicacaoController.deletarPublicacao(req, res);
});

// EDIÇÃO ==================================================================
router.get("/exibirInformacoesPublicacao/:idPublicacao/:fkAutor", function (req, res) {
    publicacaoController.exibirInformacoesPublicacao(req, res);
});

router.put("/editar/:idPublicacao/:fkAutor/:tituloPublicacao/:descricaoPublicacao", function (req, res) {
    publicacaoController.editar(req, res);
});

module.exports = router;