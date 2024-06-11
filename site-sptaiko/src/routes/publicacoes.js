const express = require("express");
const router = express.Router();
const publicacaoController = require("../controllers/publicacaoController");

// LISTAR / PUBLICAR ================================================================== 
router.get("/listar", function (req, res) {
    publicacaoController.listar(req, res);
});

router.get("/listar/:idUsuario", function (req, res) {
    publicacaoController.listarPorUsuario(req, res);
});

router.post("/publicar/:idUsuario", function (req, res) {
    publicacaoController.publicar(req, res);
});


// EXCLUSÃO ================================================================== 
router.get("/exibirTituloPublicacaoDeletar/:idPublicacaoEdicao/:fkAutor", function (req, res) {
    publicacaoController.exibirTituloPublicacaoDeletar(req, res);
});

router.delete("/deletarPublicacao/:idPublicacao/:fkAutor", function (req, res) {
    publicacaoController.deletarPublicacao(req, res);
});

// EDIÇÃO ==================================================================
router.get("/exibirInformacoesPublicacao/:idPublicacao/:fkAutor", function (req, res) {
    publicacaoController.exibirInformacoesPublicacao(req, res);
});

router.put("/editar/:idPublicacao/:fkAutor", function (req, res) {
    publicacaoController.editar(req, res);
});

module.exports = router;