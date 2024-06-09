const database = require("../database/config");

// COMENTÁRIOS ================================================================== 
function listarComentarios(idPublicacao, idUsuario) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    const instrucaoSql = `
        SELECT p.idPublicacao,
            p.fkAutor,
            a.nome as NomeAutor,
            p.titulo,
            p.descricao,
            p.dataPublicacao,
            c.idComentario,
            c.fkUsuario,
            u.nome as  NomeUsuario,
            c.mensagem,
            DATE_FORMAT(c.dataComentario, '%d/%m/%Y %H:%i') as dataComentario
                FROM Publicacao as p 
                JOIN Comentario as c ON idPublicacao = fkPublicacao 
                JOIN Usuario as a ON p.fkAutor = a.idUsuario
                JOIN Usuario as u ON c.fkUsuario = u.idUsuario
                WHERE idPublicacao = ${idPublicacao}
                ORDER BY DATE_FORMAT(c.dataComentario, '%Y/%m/%d %H:%i') DESC;
           
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function selecionarPublicacao(idPublicacao) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    const instrucaoSql = `
        SELECT p.idPublicacao,
            p.fkAutor,
            p.titulo,
            p.descricao,
            DATE_FORMAT(p.dataPublicacao, '%d/%m/%Y %H:%i') as dataPublicacao,
            u.nome
            FROM Publicacao as p
            JOIN Usuario as u ON fkAutor = idUsuario
            WHERE idPublicacao = ${idPublicacao};       
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function exibirQtdComentarios(idPublicacao) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    const instrucaoSql = `
    select fkPublicacao, count(idComentario) as qtdComentario FROM Comentario group by fkPublicacao;
           
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function publicarComentario(idUsuario, idPublicacao, fkAutor2, mensagem) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", mensagem, idUsuario);
    const instrucaoSql = `
        INSERT INTO Comentario (fkUsuario, fkPublicacao, fkAutor, mensagem, dataComentario) VALUES ('${idUsuario}', '${idPublicacao}', ${fkAutor2}, '${mensagem}',now());
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// CURTIDAS ================================================================== 
function cadastrarCurtida(idPublicacao, idUsuario, fkAutor) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", idPublicacao, idUsuario, fkAutor);
    const instrucaoSql = `
        INSERT INTO Curtida (fkAutor, fkPublicacao, fkUsuario, dataCurtida) VALUES ('${fkAutor}', '${idPublicacao}', ${idUsuario}, now());
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarCurtidas(idPublicacao, idUsuario, fkAutor) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()" + "AQUI PARTE 2" + fkAutor + "AQUI PARTE 3: " + idUsuario + "AQUI OH PARTE 4: " + idPublicacao);
    const instrucaoSql = `
        SELECT fkPublicacao, count(fkUsuario) as curtida FROM Curtida WHERE fkPublicacao = ${idPublicacao} AND fkAutor = ${fkAutor}; 
           
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarCurtidasPorUsuario(idPublicacao, idUsuario, fkAutor) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()" + "AQUI PARTE 2" + fkAutor + "AQUI PARTE 3: " + idUsuario + "AQUI OH PARTE 4: " + idPublicacao);
    const instrucaoSql = `
        SELECT fkAutor, fkPublicacao, fkUsuario FROM Curtida WHERE  fkUsuario = ${idUsuario}; 
           
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listar(idPublicacao, idUsuario, fkAutor) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()" + "AQUI PARTE 2" + fkAutor + "AQUI PARTE 3: " + idUsuario + "AQUI OH PARTE 4: " + idPublicacao);
    const instrucaoSql = `
        SELECT * FROM Curtida WHERE fkUsuario = ${idUsuario} AND fkPublicacao = ${idPublicacao} AND fkAutor = ${fkAutor};
           
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function deletarCurtida(idPublicacao, idUsuario, fkAutor) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar(): idUsuario:", idUsuario);
    const instrucaoSql = `
        DELETE FROM Curtida WHERE fkPublicacao = ${idPublicacao} AND fkUsuario = ${idUsuario} AND fkAutor = ${fkAutor};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// GRUPO FAVORITO ================================================================== 
function cadastrarGrupoFavorito(idUsuario, idGrupo) {
    const instrucaoSql = `
       INSERT INTO Favorito (fkUsuario, fkGrupo, dataFavorito) VALUES (${idUsuario}, ${idGrupo}, now());
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarGrupoFavorito(idUsuario, idGrupo) {
    const instrucaoSql = `
        SELECT fkUsuario, fkGrupo FROM Favorito WHERE fkUsuario = ${idUsuario} AND fkGrupo = ${idGrupo};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function deletarGrupoFavorito(idUsuario, idGrupo) {
    const instrucaoSql = `
        DELETE FROM Favorito WHERE fkUsuario = ${idUsuario} AND fkGrupo = ${idGrupo};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    // COMENTÁRIOS
    listarComentarios,
    selecionarPublicacao,
    exibirQtdComentarios,
    publicarComentario,
    // CURTIDAS
    cadastrarCurtida,
    listarCurtidas,
    listarCurtidasPorUsuario,
    listar,
    deletarCurtida,
    // GRUPO FAVORITO
    cadastrarGrupoFavorito,
    listarGrupoFavorito,
    deletarGrupoFavorito
}