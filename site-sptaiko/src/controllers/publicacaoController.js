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

// PUBLICAÇÃO ===================================================================================================
function publicar(req, res) {
    let titulo = req.body.titulo;
    let descricao = req.body.descricao;
    let imagem = req.body.imagem;
    let idUsuario = req.params.idUsuario;

    if (titulo == undefined) {
        res.status(400).send("O título está indefinido!");
    } else if (descricao == undefined) {
        res.status(400).send("A descrição está indefinido!");
    } else if (idUsuario == undefined) {
        res.status(403).send("O id do usuário está indefinido!");
    } else {
        publicacaoModel.publicar(titulo, descricao, imagem, idUsuario)
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

// EDITAR ==============================================================================
function exibirInformacoesPublicacao(req, res) {
    const idPublicacao = req.params.idPublicacao;
    const fkAutor = req.params.fkAutor;

    publicacaoModel.exibirInformacoesPublicacao(idPublicacao, fkAutor).then(function (resultado) {
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

function editar(req, res) {
    const novaDescricao = req.body.novaDescricao;
    const novoTitulo = req.body.novoTitulo;
    const novaImagem = req.body.novaImagem;
    const idPublicacao = req.params.idPublicacao;
    const fkAutor = req.params.fkAutor;

    publicacaoModel.editar(novaDescricao, novoTitulo, novaImagem, idPublicacao, fkAutor)
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
    listar,
    listarPorUsuario,
    pesquisarDescricao,
    publicar,
    deletarPublicacao,
    publicarComentario,
    pesquisarPublicacao,
    exibirTituloPublicacaoEdicao,
    // EDIÇÃO 
    exibirInformacoesPublicacao,
    editar
}