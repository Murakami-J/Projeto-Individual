var database = require("../database/config");

function listar() {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
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
        FROM publicacao a
            INNER JOIN usuario u
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
            INNER JOIN usuario u
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
    FROM publicacao a
        INNER JOIN usuario u
            ON a.fkAutor = u.idUsuario
            WHERE descricao LIKE '%${publicacaoPesquisada}%'
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
            INNER JOIN usuario u
                ON a.fkAutor = u.idUsuario
        WHERE u.idUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function publicar(titulo, descricao, idUsuario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", titulo, descricao, idUsuario);
    var instrucaoSql = `
        INSERT INTO Publicacao (titulo, descricao, fkAutor, dataPublicacao) VALUES ('${titulo}', '${descricao}', ${idUsuario}, now());
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function publicarComentario(mensagem, idUsuario, idPublicacao, fkAutor1) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", mensagem, idUsuario);
    var instrucaoSql = `
        INSERT INTO Comentario (fkUsuario, fkPublicacao, fkAutor, mensagem, dataComentario) VALUES ('${idUsuario}', '${idPublicacao}', ${fkAutor1}, '${mensagem}',now());
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function editar(novaDescricao, idAviso) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editar(): ", novaDescricao, idAviso);
    var instrucaoSql = `
        UPDATE Publicacao SET descricao = '${novaDescricao}' WHERE idPublicacao = ${idAviso};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function deletar(idAviso) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():", idAviso);
    var instrucaoSql = `
        DELETE FROM Publicacao WHERE idPublicacao = ${idAviso};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    listar,
    listarPorUsuario,
    pesquisarDescricao,
    publicar,
    editar,
    deletar,
    publicarComentario,
    pesquisarPublicacao
}
