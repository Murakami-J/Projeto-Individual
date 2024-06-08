const database = require("../database/config");

// GRÁFICO ================================================================== 
function obterUltimosDados() {
    const instrucaoSql = `
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

function buscarDadosEmTempoReal() {
    const instrucaoSql = `SELECT nomeGrupo, COUNT(*) AS qtdTotalMencao
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

// RANKING ================================================================== 
function obterRanking() {
    const instrucaoSql = `
    SELECT u.nome,
	p.titulo, 
	count(fkUsuario) as qtdCurtida
	FROM Curtida as c
		JOIN Publicacao as p ON c.fkPublicacao = p.idPublicacao
		JOIN Usuario as u ON c.fkAutor = u.idUsuario
        WHERE YEAR(p.dataPublicacao) = YEAR(CURRENT_DATE()) AND WEEK(p.dataPublicacao) = WEEK(CURRENT_DATE())
        GROUP BY c.fkPublicacao, c.fkAutor, p.titulo 
        ORDER BY qtdCurtida DESC LIMIT 5;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// KPI ================================================================== 
function exibirTotalPublicacoesSemana() {
    const instrucaoSql = `
    SELECT count(idPublicacao) as totalPubSem
        FROM Publicacao 
        WHERE YEAR(dataPublicacao) = YEAR(CURRENT_DATE()) AND WEEK(dataPublicacao) = WEEK(CURRENT_DATE());
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function exibirComentariosPostSemana() {
    const instrucaoSql = `
    SELECT MAX(qtdComentario) AS maiorNumComentario 
    FROM (
        SELECT COUNT(idComentario) AS qtdComentario 
        FROM Comentario 
        JOIN Publicacao ON fkPublicacao = idPublicacao
        WHERE YEAR(dataPublicacao) = YEAR(CURRENT_DATE()) AND WEEK(dataPublicacao) = WEEK(CURRENT_DATE()) 
        GROUP BY fkPublicacao
    ) AS SubqueryComentario;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function exibirGrupoMaisMencionado() {
    const instrucaoSql = `
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
    ORDER BY qtdTotalMencao DESC LIMIT 1;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function exibirUsuarioMaisPublicacao() {
    const instrucaoSql = `
    SELECT nome,
		count(fkAutor) as qtdPublicacao
        FROM Usuario
            JOIN Publicacao ON fkAutor = idUsuario
            WHERE YEAR(dataPublicacao) = YEAR(CURRENT_DATE()) AND WEEK(dataPublicacao) = WEEK(CURRENT_DATE())
            GROUP BY nome
            ORDER BY qtdPublicacao DESC LIMIT 1;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    // GRÁFICO
    obterUltimosDados,
    buscarDadosEmTempoReal,
    //RANKING
    obterRanking,
    //KPI
    exibirTotalPublicacoesSemana,
    exibirComentariosPostSemana,
    exibirGrupoMaisMencionado,
    exibirUsuarioMaisPublicacao
}
