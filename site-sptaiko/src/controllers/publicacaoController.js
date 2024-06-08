const publicacaoModel = require("../models/publicacaoModel");

// EXIBIR / PUBLICAR ======================================================================================
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

function listarPorUsuario(req, res) {
    const idUsuario = req.params.idUsuario;
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

function publicar(req, res) {
    const titulo = req.body.titulo;
    const descricao = req.body.descricao;
    const imagem = req.body.imagem;
    const idUsuario = req.params.idUsuario;

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

// EXCLUSÃO ==============================================================================
async function deletarPublicacao(req, res) {
    try {
        const idPublicacao = req.params.idPublicacao;
        const fkAutor = req.params.fkAutor;
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

function exibirTituloPublicacaoDeletar(req, res) {
    const idPublicacaoEdicao = req.params.idPublicacaoEdicao;
    const fkAutor = req.params.fkAutor;

    publicacaoModel.exibirTituloPublicacaoDeletar(idPublicacaoEdicao, fkAutor).then(function (resultado) {
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

// EDITAR ==============================================================================
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

module.exports = {
    // LISTAR/PUBLICAR
    listar,
    listarPorUsuario,
    publicar,
     // EXCLUSÃO
    deletarPublicacao,
    exibirTituloPublicacaoDeletar,
    // EDIÇÃO 
    editar,
    exibirInformacoesPublicacao
}