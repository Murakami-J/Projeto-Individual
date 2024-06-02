var interacaoModel = require("../models/interacaoModel");

function cadastrarCurtida(req, res) {
    var idPublicacao = req.params.idPublicacao;
    var fkAutor = req.params.fkAutor;
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
    var idPublicacao = req.params.idPublicacao;
    var fkAutor = req.params.fkAutor;
    var idUsuario = req.params.idUsuario;

    interacaoModel.deletarCurtida(idPublicacao, idUsuario, fkAutor)
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


function listar(req, res) {
    var idPublicacao = req.params.idPublicacao;
    var fkAutor = req.params.fkAutor;
    var idUsuario = req.params.idUsuario;

    console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA " + idPublicacao  + idUsuario)

    interacaoModel.listar(idPublicacao, idUsuario, fkAutor)
        .then(function (resultado) {
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



function listarComentarios(req, res) {
    var idPublicacao = req.params.idPublicacao;

    var idUsuario = req.params.idUsuario;

    interacaoModel.listarComentarios(idPublicacao, idUsuario)
        .then(function (resultado) {
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



function listarCurtidas(req, res) {
    var idPublicacao = req.params.idPublicacao;
    var fkAutor = req.params.fkAutor;
    var idUsuario = req.params.idUsuario;


    interacaoModel.listarCurtidas(idPublicacao, idUsuario, fkAutor)
        .then(function (resultado) {
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

function exibirPublicacao(req, res) {
    var idPublicacao = req.params.idPublicacao;

    interacaoModel.exibirPublicacao(idPublicacao)
        .then(function (resultado) {
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

function listarCurtidasPorUsuario(req, res) {
    var idPublicacao = req.params.idPublicacao;
    var fkAutor = req.params.fkAutor;
    var idUsuario = req.params.idUsuario;


    interacaoModel.listarCurtidasPorUsuario(idPublicacao, idUsuario, fkAutor)
        .then(function (resultado) {
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

module.exports = {
    cadastrarCurtida,
    pegarFkAutor,
    deletarCurtida,
    listar,
    listarCurtidas,
    listarCurtidasPorUsuario,
    listarComentarios,
    exibirPublicacao
}