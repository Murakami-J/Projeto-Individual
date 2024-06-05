var publicacaoModel = require("../models/publicacaoModel");

function listar(req, res) {
    publicacaoModel.listar().then(function (resultado) {
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


function listarInformacoesPublicacao(req, res) {
    var idPublicacaoEdicao = req.params.idPublicacaoEdicao;
    var idUsuario = req.params.idUsuario;
    console.log("aaaaaaaaaaaaaa " + idPublicacaoEdicao)

    publicacaoModel.listarInformacoesPublicacao(idPublicacaoEdicao, idUsuario).then(function (resultado) {
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

function exibirTituloPublicacaoEdicao(req, res) {
    var idPublicacaoEdicao = req.params.idPublicacaoEdicao;
    var fkAutor = req.params.fkAutor;

    publicacaoModel.exibirTituloPublicacaoEdicao(idPublicacaoEdicao, fkAutor).then(function (resultado) {
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

function listarPorUsuario(req, res) {
    var idUsuario = req.params.idUsuario;

    publicacaoModel.listarPorUsuario(idUsuario)
        .then(
            function (resultado) {
                if (resultado.length > 0) {
                    res.status(200).json(resultado);
                } else {
                    res.status(204).send("Nenhum resultado encontrado!");
                }
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "Houve um erro ao buscar os avisos: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function pesquisarDescricao(req, res) {
    var descricao = req.params.descricao;

    publicacaoModel.pesquisarDescricao(descricao)
        .then(
            function (resultado) {
                if (resultado.length > 0) {
                    res.status(200).json(resultado);
                } else {
                    res.status(204).send("Nenhum resultado encontrado!");
                }
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function pesquisarPublicacao(req, res) {
    var publicacaoPesquisada = req.params.publicacaoPesquisada;

    publicacaoModel.pesquisarPublicacao(publicacaoPesquisada)
        .then(
            function (resultado) {
                if (resultado.length > 0) {
                    res.status(200).json(resultado);
                } else {
                    res.status(204).send("Nenhum resultado encontrado!");
                }
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function publicar(req, res) {
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    var idUsuario = req.params.idUsuario;

    if (titulo == undefined) {
        res.status(400).send("O título está indefinido!");
    } else if (descricao == undefined) {
        res.status(400).send("A descrição está indefinido!");
    } else if (idUsuario == undefined) {
        res.status(403).send("O id do usuário está indefinido!");
    } else {
        publicacaoModel.publicar(titulo, descricao, idUsuario)
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

function publicarComentario(req, res) {
    var mensagem = req.params.mensagem;
    var idUsuario = req.params.idUsuario;
    var idPublicacao = req.params.idPublicacao;
    var fkAutor2 = req.params.fkAutor2;

    if (idPublicacao == undefined) {
        res.status(400).send("O título está indefinido!");
    } else if (mensagem == undefined) {
        res.status(400).send("A descrição está indefinido!");
    } else if (idUsuario == undefined) {
        res.status(403).send("O id do usuário está indefinido!");
    } else {
        publicacaoModel.publicarComentario(idUsuario, idPublicacao, fkAutor2, mensagem)
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

function editar(req, res) {
    var novaDescricao = req.params.descricaoPublicacao;
    var novoTitulo = req.params.tituloPublicacao;
    var idPublicacao = req.params.idPublicacao;
    var fkAutor = req.params.fkAutor;

    publicacaoModel.editar(novaDescricao, novoTitulo, idPublicacao, fkAutor)
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

async function deletarPublicacao(req, res) {
    try {
        var idPublicacao = req.params.idPublicacao;
        var fkAutor = req.params.fkAutor;

        const [resultado1, resultado2, resultado3] = await Promise.all([
            publicacaoModel.deletarComentario(idPublicacao, fkAutor),
            publicacaoModel.deletarCurtida(idPublicacao, fkAutor),
            publicacaoModel.deletarPublicacao(idPublicacao, fkAutor)
        ]);

        res.json({ resultado1, resultado2, resultado3 });
    } catch (erro) {
        console.error(erro);
        console.error("Houve um erro ao deletar o post: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    }
}

module.exports = {
    listar,
    listarPorUsuario,
    pesquisarDescricao,
    publicar,
    editar,
    deletarPublicacao,
    publicarComentario,
    pesquisarPublicacao,
    listarInformacoesPublicacao,
    exibirTituloPublicacaoEdicao
}