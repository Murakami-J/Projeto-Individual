var database = require("../database/config");


function cadastrarCurtida(idPublicacao, idUsuario, fkAutor) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", idPublicacao, idUsuario, fkAutor);
    var instrucaoSql = `
        INSERT INTO Curtida (fkAutor, fkPublicacao, fkUsuario, dataCurtida) VALUES ('${fkAutor}', '${idPublicacao}', ${idUsuario}, now());
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function pegarFkAutor(idPublicacao){
    var sql = `SELECT fkAutor FROM Publicacao WHERE idPublicacao = ${idPublicacao};`;

    return database.executar(sql);
}

function deletarCurtida(idPublicacao, idUsuario, fkAutor) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar(): idUsuario:",  idUsuario);
    var instrucaoSql = `
        DELETE FROM Curtida WHERE fkPublicacao = ${idPublicacao} AND fkUsuario = ${idUsuario} AND fkAutor = ${fkAutor};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listar(idPublicacao, idUsuario, fkAutor) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()" + "AQUI PARTE 2"+ fkAutor + "AQUI PARTE 3: " + idUsuario + "AQUI OH PARTE 4: " + idPublicacao) ;
    var instrucaoSql = `
        SELECT * FROM Curtida WHERE fkUsuario = ${idUsuario} AND fkPublicacao = ${idPublicacao} AND fkAutor = ${fkAutor};
           
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function listarCurtidas(idPublicacao, idUsuario, fkAutor) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()" + "AQUI PARTE 2"+ fkAutor + "AQUI PARTE 3: " + idUsuario + "AQUI OH PARTE 4: " + idPublicacao) ;
    var instrucaoSql = `
        SELECT fkPublicacao, count(fkUsuario) as curtida FROM Curtida WHERE fkPublicacao = ${idPublicacao} AND fkAutor = ${fkAutor}; 
           
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarCurtidasPorUsuario(idPublicacao, idUsuario, fkAutor) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()" + "AQUI PARTE 2"+ fkAutor + "AQUI PARTE 3: " + idUsuario + "AQUI OH PARTE 4: " + idPublicacao) ;
    var instrucaoSql = `
        SELECT fkAutor, fkPublicacao, fkUsuario FROM Curtida WHERE  fkUsuario = ${idUsuario}; 
           
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    cadastrarCurtida,
    pegarFkAutor,
    deletarCurtida,
    listar,
    listarCurtidas,
    listarCurtidasPorUsuario
}