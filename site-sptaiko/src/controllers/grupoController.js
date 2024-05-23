var grupoModel = require("../models/grupoModel");

function listarGrupo(req, res) {
  grupoModel.listarGrupo().then(function (resultado) {
    if (resultado.length > 0) {
      res.status(200).json(resultado);
    } else {
      res.status(204).send("Nenhum resultado encontrado!")
    }
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}

function teste(req, res) {
  var idGrupo = req.body.idGrupoServer;
  grupoModel.teste(idGrupo)
    .then(
      function (resultado) {
        res.json(resultado);
      }
    ).catch(
      function (erro) {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o idGrupo! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      }
    );
}




module.exports = {
  listarGrupo,
  teste
};
