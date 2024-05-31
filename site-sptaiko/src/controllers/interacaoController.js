var interacaoModel = require("../models/interacaoModel");

function cadastrarCurtida(req, res) {
    var idPublicacao = req.body.idPublicacao;
    var fkAutor = req.body.fk_Autor;
    var idUsuario = req.params.idUsuario;

    interacaoModel.cadastrarCurtida(idPublicacao, idUsuario, fkAutor)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );

}

function pegarFkAutor(req, res) {
    interacaoModel.pegarFkAutor().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function deletarCurtida(req, res) {
    var idPublicacao = req.body.idPublicacao;
    var fkAutor = req.body.fk_Autor;
    var idUsuario = req.params.idUsuario;

    interacaoModel.deletarCurtida(idPublicacao, fkAutor, idUsuario)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao deletar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}


module.exports = {
    cadastrarCurtida,
    pegarFkAutor,
    deletarCurtida
}