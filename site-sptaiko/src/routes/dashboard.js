const express = require("express");
const router = express.Router();

const dashboardController = require("../controllers/dashboardController");

// GRÁFICO ================================================================== 
router.get("/obterDados", function (req, res) {
    dashboardController.obterUltimosDados(req, res);
});

router.get("/tempo-real", function (req, res) {
    dashboardController.buscarDadosEmTempoReal(req, res);
});

// RANKING ================================================================== 
router.get("/obterRanking", function (req, res) {
    dashboardController.obterRanking(req, res);
});

// KPI ================================================================== 
router.get("/exibirTotalPublicacoesSemana", function (req, res) {
    dashboardController.exibirTotalPublicacoesSemana(req, res);
});

router.get("/exibirComentariosPostSemana", function (req, res) {
    dashboardController.exibirComentariosPostSemana(req, res);
});

router.get("/exibirGrupoMaisMencionado", function (req, res) {
    dashboardController.exibirGrupoMaisMencionado(req, res);
});

router.get("/exibirUsuarioMaisPublicacao", function (req, res) {
    dashboardController.exibirUsuarioMaisPublicacao(req, res);
});

module.exports = router;