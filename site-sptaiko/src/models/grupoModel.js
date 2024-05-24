var database = require("../database/config");

function listarGrupo() {

    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `
        SELECT 
            g.nome,
            g.descricao,
            g.qtdCurtida,
            g.qtdComentario,
            g.fkEndereco,
            e.rua,
            e.CEP,
            e.numero,
            e.complemento
        FROM Grupo as g JOIN Endereco as e ON fkEndereco = idEndereco;
    `;

    // WHERE g.idGrupo = 1
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function teste(idGrupo){
    var instrucaoSQL = `SELECT * FROM Grupo WHERE idGrupo = ${idGrupo};`

    console.log("Executando a instrução SQL: \n" + instrucaoSQL);
    return database.executar(instrucaoSQL);
}


module.exports = {
    listarGrupo,
    teste
}