const express = require("express");
const router = express.Router();

const interacaoController = require("../controllers/interacaoController");

// COMENTÁRIOS ================================================================== 
router.get("/listarComentarios/:idUsuario/:idPublicacao", function (req, res) {
    interacaoController.listarComentarios(req, res);
});

router.get("/selecionarPublicacao/:idPublicacao", function (req, res) {
    interacaoController.selecionarPublicacao(req, res);
});

router.get("/exibirQtdComentarios/:idPublicacao", function (req, res) {
    interacaoController.exibirQtdComentarios(req, res);
});

router.post("/publicarComentario/:idUsuario/:idPublicacao/:fkAutor2/:mensagem", function (req, res) {
    interacaoController.publicarComentario(req, res);
});

// CURTIDAS ================================================================== 
router.get("/listar/:idUsuario/:idPublicacao/:fkAutor", function (req, res) {
    interacaoController.listar(req, res);
});

router.post("/cadastrarCurtida/:idUsuario/:idPublicacao/:fkAutor", function (req, res) {
    interacaoController.cadastrarCurtida(req, res);
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

// GRUPO FAVORITO ==================================================================
router.post("/cadastrarGrupoFavorito/:idUsuario/:idGrupo", function (req, res) {
    interacaoController.cadastrarGrupoFavorito(req, res);
});

router.get("/listarGrupoFavorito/:idGrupo/:idUsuario", function (req, res) {
    interacaoController.listarGrupoFavorito(req, res);
});

router.delete("/deletarGrupoFavorito/:idUsuario/:idGrupo", function (req, res) {
    interacaoController.deletarGrupoFavorito(req, res);
});

module.exports = router;