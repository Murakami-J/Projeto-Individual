const database = require("../database/config");

// LISTAR / PUBLICAR =========================================================================================================
function listar() {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    const instrucaoSql = `
        SELECT 
            a.idPublicacao AS idAviso,
            a.titulo,
            a.descricao,
            a.urlImagem,
            a.fkAutor,
            DATE_FORMAT(a.dataPublicacao, '%d/%m/%Y %H:%i') as dataPublicacao,
            u.idUsuario AS idUsuario,
            u.nome,
            u.email,
            u.senha
        FROM Publicacao a
            INNER JOIN Usuario u
                ON a.fkAutor = u.idUsuario
                ORDER BY DATE_FORMAT(a.dataPublicacao, '%Y/%m/%d %H:%i') DESC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarPorUsuario(idUsuario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarPorUsuario()");
    const instrucaoSql = `
        SELECT 
            a.id AS idPublicacao,
            a.titulo,
            a.descricao,
            a.fkAutor,
            u.idUsuario AS idUsuario,
            u.nome,
            u.email,
            u.senha
        FROM Publicacao a
            INNER JOIN Usuario u
                ON a.fkAutor = u.idUsuario
        WHERE u.idUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function publicar(titulo, descricao, imagem, idUsuario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", titulo, descricao, idUsuario);
    const instrucaoSql = `
        INSERT INTO Publicacao (titulo, descricao, fkAutor, dataPublicacao, urlImagem) VALUES ('${titulo}', '${descricao}', ${idUsuario}, now(), '${imagem}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// EXCLUSÃO =========================================================================================================
function exibirTituloPublicacaoDeletar(idPublicacaoEdicao, fkAutor) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarPorUsuario()");
    const instrucaoSql = `
        SELECT titulo
            FROM Publicacao 
            WHERE idPublicacao = ${idPublicacaoEdicao} AND fkAutor = ${fkAutor};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function deletarPublicacao(idPublicacao, fkAutor) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():");
    const instrucaoSql = `
        DELETE FROM Publicacao WHERE idPublicacao = ${idPublicacao} AND fkAutor = ${fkAutor};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function deletarCurtida(idPublicacao, fkAutor) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():");
    const instrucaoSql = `
        DELETE FROM Curtida WHERE fkPublicacao = ${idPublicacao} AND fkAutor = ${fkAutor};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function deletarComentario(idPublicacao, fkAutor) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():");
    const instrucaoSql = `
        DELETE FROM Comentario WHERE fkPublicacao = ${idPublicacao} AND fkAutor = ${fkAutor};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// EDIÇÃO =========================================================================================================
function exibirInformacoesPublicacao(idPublicacaoEdicao, fkAutor) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function exibirInformacoesPublicacao()");
    const instrucaoSql = `
        SELECT titulo,
                descricao,
                urlImagem
                FROM Publicacao
                WHERE idPublicacao = ${idPublicacaoEdicao} AND fkAutor = ${fkAutor};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function editar(novaDescricao, novoTitulo, novaImagem, idPublicacao, fkAutor) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editar(): ", novaDescricao, idPublicacao, fkAutor, novoTitulo);
    const instrucaoSql = `
        UPDATE Publicacao SET descricao = '${novaDescricao}', titulo = '${novoTitulo}', urlImagem = '${novaImagem}' 
        WHERE idPublicacao = ${idPublicacao} AND fkAutor = ${fkAutor};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    // LISTAR / PUBLICAR
    listar,
    listarPorUsuario,
    publicar,
    // EXCLUSÃO
    exibirTituloPublicacaoDeletar,
    deletarPublicacao,
    deletarCurtida,
    deletarComentario,
    // EDIÇÃO
    exibirInformacoesPublicacao,
    editar
}
