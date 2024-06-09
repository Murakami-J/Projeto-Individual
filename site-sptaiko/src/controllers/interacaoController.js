const interacaoModel = require("../models/interacaoModel");


// COMENTÁRIOS ================================================================== 
function listarComentarios(req, res) {
    const idPublicacao = req.params.idPublicacao;

    const idUsuario = req.params.idUsuario;

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

function selecionarPublicacao(req, res) {
    const idPublicacao = req.params.idPublicacao;

    interacaoModel.selecionarPublicacao(idPublicacao)
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

function exibirQtdComentarios(req, res) {
    const idPublicacao = req.params.idPublicacao;

    interacaoModel.exibirQtdComentarios(idPublicacao)
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

function publicarComentario(req, res) {
    const mensagem = req.params.mensagem;
    const idUsuario = req.params.idUsuario;
    const idPublicacao = req.params.idPublicacao;
    const fkAutor2 = req.params.fkAutor2;

    if (idPublicacao == undefined) {
        res.status(400).send("O título está indefinido!");
    } else if (mensagem == undefined) {
        res.status(400).send("A descrição está indefinido!");
    } else if (idUsuario == undefined) {
        res.status(403).send("O id do usuário está indefinido!");
    } else {
        interacaoModel.publicarComentario(idUsuario, idPublicacao, fkAutor2, mensagem)
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
}

// CURTIDAS ================================================================== 
function cadastrarCurtida(req, res) {
    const idPublicacao = req.params.idPublicacao;
    const fkAutor = req.params.fkAutor;
    const idUsuario = req.params.idUsuario;

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

function listarCurtidas(req, res) {
    const idPublicacao = req.params.idPublicacao;
    const fkAutor = req.params.fkAutor;
    const idUsuario = req.params.idUsuario;


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

function listarCurtidasPorUsuario(req, res) {
    const idPublicacao = req.params.idPublicacao;
    const fkAutor = req.params.fkAutor;
    const idUsuario = req.params.idUsuario;


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

function listar(req, res) {
    const idPublicacao = req.params.idPublicacao;
    const fkAutor = req.params.fkAutor;
    const idUsuario = req.params.idUsuario;

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

function deletarCurtida(req, res) {
    const idPublicacao = req.params.idPublicacao;
    const fkAutor = req.params.fkAutor;
    const idUsuario = req.params.idUsuario;

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

// GRUPO FAVORITO ================================================================== 
function cadastrarGrupoFavorito(req, res) {
    const idUsuario = req.params.idUsuario;
    const idGrupo = req.params.idGrupo;

    interacaoModel.cadastrarGrupoFavorito(idUsuario, idGrupo)
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

module.exports = {
    //COMENTÁRIOS
    exibirQtdComentarios,
    listarComentarios,
    selecionarPublicacao,
    publicarComentario,
    //CURTIDAS
    cadastrarCurtida,
    listarCurtidas,
    listarCurtidasPorUsuario,
    listar,
    deletarCurtida,
    //GRUPO FAVORITO
    cadastrarGrupoFavorito
}