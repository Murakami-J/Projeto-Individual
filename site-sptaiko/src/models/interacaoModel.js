var database = require("../database/config");


function cadastrarCurtida(idPublicacao, idUsuario, fkAutor) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", idPublicacao, idUsuario, fkAutor);
    var instrucaoSql = `
        INSERT INTO Curtida (fkAutor, fkPublicacao, fkUsuario) VALUES ('${fkAutor}', '${idPublicacao}', ${idUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function pegarFkAutor(idPublicacao){
    var sql = `SELECT fkAutor FROM Publicacao WHERE idPublicacao = ${idPublicacao};`;

    return database.executar(sql);
}

function deletarCurtida(idPublicacao, fkAutor, idUsuario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():", idAviso);
    var instrucaoSql = `
        DELETE FROM Curtida WHERE fkPublicacao = ${idPublicacao} AND fkUsuario = ${idUsuario} AND fkAutor = ${fkAutor};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrarCurtida,
    pegarFkAutor,
    deletarCurtida
   
}