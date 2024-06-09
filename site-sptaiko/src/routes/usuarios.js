const express = require("express");
const router = express.Router();

const usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.get("/listar/:idUsuario", function (req, res) {
    usuarioController.listar(req, res);
});

router.post("/verificar/:idUsuario", function (req, res) {
    usuarioController.verificar(req, res);
});

router.put("/salvarEdicao/:idUsuario", function (req, res) {
    usuarioController.salvarEdicao(req, res);
});


module.exports = router;