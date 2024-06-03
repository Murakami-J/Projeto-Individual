var database = require("../database/config");

function obterUltimosDados() {

    var instrucaoSql = `
        SELECT nomeGrupo, COUNT(*) AS qtdTotalMencao
        FROM (
            SELECT descricao, 'Acal Taiko' AS nomeGrupo FROM Publicacao WHERE descricao LIKE '%Acal Taiko%'
            UNION ALL
            SELECT descricao, 'Futurong Taiko' AS nomeGrupo FROM Publicacao WHERE descricao LIKE '%Futurong Taiko%'
            UNION ALL
            SELECT descricao, 'Himawari Taiko' AS nomeGrupo FROM Publicacao WHERE descricao LIKE '%Himawari Taiko%'
            UNION ALL
            SELECT descricao, 'Ikkon Wadaiko' AS nomeGrupo FROM Publicacao WHERE descricao LIKE '%Ikkon Wadaiko%'
            UNION ALL
            SELECT descricao, 'Mika Taiko' AS nomeGrupo FROM Publicacao WHERE descricao LIKE '%Mika Taiko%'
            UNION ALL
            SELECT descricao, 'Mugen Daiko' AS nomeGrupo FROM Publicacao WHERE descricao LIKE '%Mugen Daiko%'
            UNION ALL
            SELECT descricao, 'Sakura Fubuki Taiko' AS nomeGrupo FROM Publicacao WHERE descricao LIKE '%Sakura Fubuki Taiko%'
            UNION ALL
            SELECT descricao, 'Soragoi Wadaiko' AS nomeGrupo FROM Publicacao WHERE descricao LIKE '%Soragoi Wadaiko%'
            UNION ALL
            SELECT descricao, 'Tenryuu Wadaiko' AS nomeGrupo FROM Publicacao WHERE descricao LIKE '%Tenryuu Wadaiko%'
            UNION ALL
            SELECT descricao, 'Todoroki Daiko' AS nomeGrupo FROM Publicacao WHERE descricao LIKE '%Todoroki Daiko%'
            -- Adicione mais UNION ALL para cada grupo que você quer contar
        ) AS grupos_mencionados
        GROUP BY nomeGrupo
        ORDER BY qtdTotalMencao DESC;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarDadosEmTempoReal(idAquario) {

    var instrucaoSql = `SELECT nomeGrupo, COUNT(*) AS qtdTotalMencao
    FROM (
        SELECT descricao, 'Acal Taiko' AS nomeGrupo FROM Publicacao WHERE descricao LIKE '%Acal Taiko%'
        UNION ALL
        SELECT descricao, 'Futurong Taiko' AS nomeGrupo FROM Publicacao WHERE descricao LIKE '%Futurong Taiko%'
        UNION ALL
        SELECT descricao, 'Himawari Taiko' AS nomeGrupo FROM Publicacao WHERE descricao LIKE '%Himawari Taiko%'
        UNION ALL
        SELECT descricao, 'Ikkon Wadaiko' AS nomeGrupo FROM Publicacao WHERE descricao LIKE '%Ikkon Wadaiko%'
        UNION ALL
        SELECT descricao, 'Mika Taiko' AS nomeGrupo FROM Publicacao WHERE descricao LIKE '%Mika Taiko%'
        UNION ALL
        SELECT descricao, 'Mugen Daiko' AS nomeGrupo FROM Publicacao WHERE descricao LIKE '%Mugen Daiko%'
        UNION ALL
        SELECT descricao, 'Sakura Fubuki Taiko' AS nomeGrupo FROM Publicacao WHERE descricao LIKE '%Sakura Fubuki Taiko%'
        UNION ALL
        SELECT descricao, 'Soragoi Wadaiko' AS nomeGrupo FROM Publicacao WHERE descricao LIKE '%Soragoi Wadaiko%'
        UNION ALL
        SELECT descricao, 'Tenryuu Wadaiko' AS nomeGrupo FROM Publicacao WHERE descricao LIKE '%Tenryuu Wadaiko%'
        UNION ALL
        SELECT descricao, 'Todoroki Daiko' AS nomeGrupo FROM Publicacao WHERE descricao LIKE '%Todoroki Daiko%'
        -- Adicione mais UNION ALL para cada grupo que você quer contar
    ) AS grupos_mencionados
    GROUP BY nomeGrupo
    ORDER BY qtdTotalMencao DESC`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    obterUltimosDados,
    buscarDadosEmTempoReal
}
