var database = require("../database/config");

function listarGrupo() {

    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `
        SELECT g.nome,
            g.descricao,
            g.email,
            g.instagram,
            g.facebook,
            concat(t.ddd, ' ', t.prefixo, '-', t.sufixo) as telefone,
            concat(e.rua, ', ',
            e.numero) as endereco,
            e.CEP
            FROM Grupo as g
            JOIN Endereco as e ON e.fkGrupo = idGrupo
            JOIN Telefone as t ON t.fkGrupo = idGrupo;
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