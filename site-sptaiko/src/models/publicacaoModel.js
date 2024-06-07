var database = require("../database/config");

function listar() {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `
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

function pesquisarDescricao(texto) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function pesquisarDescricao()");
    var instrucaoSql = `
        SELECT 
            a.id AS idAviso,
            a.titulo,
            a.descricao,
            a.fk_usuario,
            a.dataPublicacao,
            u.id AS idUsuario,
            u.nome,
            u.email,
            u.senha
        FROM aviso a
            INNER JOIN Usuario u
                ON a.fk_usuario = u.id
        WHERE a.descricao LIKE '${texto}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function pesquisarPublicacao(publicacaoPesquisada) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function pesquisarDescricao()");
    var instrucaoSql = `
    SELECT 
        a.idPublicacao AS idAviso,
        a.titulo,
        a.descricao,
        a.fkAutor,
        DATE_FORMAT(a.dataPublicacao, '%d/%m/%Y %H:%i') as dataPublicacao,
        u.idUsuario AS idUsuario,
        u.nome,
        u.email,
        u.senha
    FROM Publicacao a
        INNER JOIN Usuario u
            ON a.fkAutor = u.idUsuario
            WHERE descricao LIKE '%${publicacaoPesquisada}%' OR titulo LIKE '%${publicacaoPesquisada}%'
            ORDER BY DATE_FORMAT(a.dataPublicacao, '%Y/%m/%d %H:%i') DESC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarPorUsuario(idUsuario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarPorUsuario()");
    var instrucaoSql = `
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

function exibirTituloPublicacaoEdicao(idPublicacaoEdicao, fkAutor) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarPorUsuario()");
    var instrucaoSql = `
        SELECT titulo
            FROM Publicacao 
            WHERE idPublicacao = ${idPublicacaoEdicao} AND fkAutor = ${fkAutor};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// EDIÇÃO =========================================================================================================

function exibirInformacoesPublicacao(idPublicacaoEdicao, fkAutor) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function exibirInformacoesPublicacao()");
    var instrucaoSql = `
        SELECT titulo,
                descricao,
                urlImagem
                FROM Publicacao
                WHERE idPublicacao = ${idPublicacaoEdicao} AND fkAutor = ${fkAutor};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function editar(novaDescricao, novoTitulo, idPublicacao, fkAutor) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editar(): ", novaDescricao, idPublicacao, fkAutor, novoTitulo);
    var instrucaoSql = `
        UPDATE Publicacao SET descricao = '${novaDescricao}', titulo = '${novoTitulo}' 
        WHERE idPublicacao = ${idPublicacao} AND fkAutor = ${fkAutor};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// PUBLICAÇÃO =========================================================================================================

function publicar(titulo, descricao, imagem, idUsuario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", titulo, descricao, idUsuario);
    var instrucaoSql = `
        INSERT INTO Publicacao (titulo, descricao, fkAutor, dataPublicacao, urlImagem) VALUES ('${titulo}', '${descricao}', ${idUsuario}, now(), '${imagem}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function publicarComentario( idUsuario, idPublicacao, fkAutor2, mensagem) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", mensagem, idUsuario);
    var instrucaoSql = `
        INSERT INTO Comentario (fkUsuario, fkPublicacao, fkAutor, mensagem, dataComentario) VALUES ('${idUsuario}', '${idPublicacao}', ${fkAutor2}, '${mensagem}',now());
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



function deletarPublicacao(idPublicacao, fkAutor) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():");
    var instrucaoSql = `
        DELETE FROM Publicacao WHERE idPublicacao = ${idPublicacao} AND fkAutor = ${fkAutor};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function deletarCurtida(idPublicacao, fkAutor) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():");
    var instrucaoSql = `
        DELETE FROM Curtida WHERE fkPublicacao = ${idPublicacao} AND fkAutor = ${fkAutor};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function deletarComentario(idPublicacao, fkAutor) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():");
    var instrucaoSql = `
        DELETE FROM Comentario WHERE fkPublicacao = ${idPublicacao} AND fkAutor = ${fkAutor};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    listar,
    listarPorUsuario,
    pesquisarDescricao,
    publicar,
    deletarPublicacao,
    publicarComentario,
    pesquisarPublicacao,
    deletarComentario,
    deletarCurtida,
    exibirTituloPublicacaoEdicao,

    // EDIÇÃO
    exibirInformacoesPublicacao,
    editar
}
