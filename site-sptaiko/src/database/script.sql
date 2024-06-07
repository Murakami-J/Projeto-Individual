DROP DATABASE IF EXISTS Sptaiko;

CREATE DATABASE Sptaiko;
USE Sptaiko;

CREATE TABLE Usuario(
	idUsuario int primary key auto_increment,
    nome varchar(45) not null,
    email varchar(264) not null,
    senha varchar(45) not null
);

CREATE TABLE Grupo(
	idGrupo int primary key auto_increment,
    nome varchar(45) not null,
    descricao varchar(1000),
    email varchar(264),
    instagram varchar(45),
    facebook varchar(45)
);

CREATE TABLE Endereco(
	idEndereco int primary key auto_increment,
    CEP char(9) not null,
    rua varchar(45) not null,
    numero varchar(45) not null,
	fkGrupo int,
    constraint fkEnderecoGrupo foreign key(fkGrupo) references Grupo(idGrupo)
);

CREATE TABLE Telefone(
	idTelefone int primary key auto_increment,
    ddd char(2) not null,
    prefixo varchar(5) not null,
    sufixo varchar(4) not null,
    fkGrupo int,
    constraint TelefoneGrupo foreign key (fkGrupo) references Grupo(idGrupo)
);

CREATE TABLE Favorito(
	idFavorito int auto_increment,
    fkUsuario int,
    fkGrupo int,
    dataCurtida date not null,
    constraint pkFavoritoUsuarioGrupo primary key(idFavorito, fkUsuario, fkGrupo),
    constraint fkFavoritoUsuario foreign key(fkUsuario) references Usuario(idUsuario),
    constraint fkFavoritoGrupo foreign key(fkGrupo) references Grupo(idGrupo)
);

CREATE TABLE Publicacao(
	idPublicacao int auto_increment,
    fkAutor int,
    constraint pkPublicacaoAutor primary key(idPublicacao, fkAutor),
    titulo varchar(45),
    descricao varchar(1000),
    dataPublicacao datetime,
    urlImagem varchar(2000)
);

CREATE TABLE Curtida(
	fkUsuario int,
    fkPublicacao int,
    fkAutor int,
    dataCurtida datetime,
    constraint pkUsuarioPublicacaoAutor primary key (fkUsuario, fkPublicacao, fkAutor),
    constraint fkCurtidaUsuario foreign key(fkUsuario) references Usuario(idUsuario),
    constraint fkCurtidaAutor foreign key(fkAutor) references Usuario(idUsuario)
);

CREATE TABLE Comentario(
	idComentario int auto_increment,
    fkUsuario int,
    fkPublicacao int,
    fkAutor int,
    mensagem varchar(500),
    dataComentario datetime,
    constraint pkComentarioUsuarioPublicacaoAutor primary key (idComentario, fkUsuario, fkPublicacao, fkAutor),
    constraint fkComentarioUsuario foreign key (fkUsuario) references Usuario(idUsuario), 
    constraint fkComentarioPublicacao foreign key (fkPublicacao) references Publicacao(idPublicacao), 
    constraint fkComentarioAutor foreign key (fkAutor) references Usuario(idUsuario) 
);


-- CREATE USER 'usuario'@'localhost' IDENTIFIED BY 'usuario'; 
-- GRANT ALL PRIVILEGES ON * . * TO 'usuario'@'localhost'; 
-- FLUSH PRIVILEGES;


 -- INSERT GRUPO ---------------------------------------------------------------------
 INSERT INTO Grupo VALUES
 (DEFAULT, 'Acal Taiko', 'A Associação Cultural e Assistencial da Liberdade – ACAL, com a denominação japonesa de “Bunka Fukushi Kyõkai”, é hoje internacionalmente conhecida e ponto de referência para a comunidade do bairro, para a cidade de São Paulo, Brasil e Japão. Ela tem por finalidade proporcionar a integração dos superiores interesses dos comerciantes e moradores, visando seu aprimoramento cultural, sócio-ambiental e ecológico, a prestação de serviços assistenciais, bem como o melhoramento das condições de vida de sua comunidade e das condições físicas e sócios ambientais do bairro da Liberdade.
', 'acalliberdade@terra.com.br','acalliberdade', 'acaltaiko'),
 (DEFAULT, 'Futurong Taiko', 'A Futurong é uma instituição privada sem fins lucrativos, atendemos crianças, jovens e adultos através de oficinas Culturais, Esportivas e Profissionalizantes. Atendemos as crianças no contra turno escolar, todos podem participar da Futurong, a única obrigatoriedade e estar frequentando o ensino regular e realizar a matricula em nossa secretaria. Nossa equipe é formada por profissionais capacitados, prontos para atender da melhor forma nossos alunos.', 'futurongtaiko@gmail.com' ,'', 'futurong.org'),
 (DEFAULT, 'Himawari Taiko', 'O Grupo Himawari Taiko foi criado no mês de Junho do ano de 2000, iniciando suas atividades através de um grupo de amigos Nikkeys de São Paulo, amantes da cultura e tradições japonesas.
O projeto futuro do grupo é poder crescer ainda mais, mostrando aos povos ocidentais um pouco mais da cultura milenar do Japão, onde as tradições e costumes ainda são muito preservados, porém com uma mistura de evolução e modernidade contemporânea adicionado a um leve toque ocidental.', 'himawaritk@gmail.com','himawaritaiko', 'himawari.taiko'),
 (DEFAULT, 'Ikkon Wadaiko', '', 'ikkon_wadaiko@outlook.com', 'ikkon_wadaiko', 'ikkon.wadaiko'),
 (DEFAULT, 'Mika Taiko', 'O grupo do Mika Taikô participa de diversos festivais e eventos relacionados à cultura japonesa, sendo composta pelos integrantes do Mirim, Junior (ex-alunos do Mika Youtien) e Master (pais e avós dos alunos e ex-alunos), integrando todos para formarem uma grande família musical.', 'mika.youtien@gmail.com', 'mikayoutien', 'mikayoutien'),
 (DEFAULT, 'Mugen Daiko', '', '', '', ''),
 (DEFAULT, 'Sakura Fubuki Taiko', 'O grupo de Taiko Sakura Fubuki teve inicio em 2007 com o objetivo de participar da comemoração dos 100 anos de imigração japonesa no Brasil, realizado em 2008. Passada a festividade, os membros se identificaram com a arte dos tambores japoneses e deram forma ao grupo que, desde então, vem propagando a cultura e a beleza do taiko.', 'sfwadaiko@gmail.com', 'sakura_taiko', 'sakurafubukiwadaiko'),
 (DEFAULT, 'Soragoi Wadaiko', 'Formou-se em novembro de 2011 por um grupo de amigos que veem no taiko uma forma de expressar seus sentimentos através dos movimentos e do som das batidas, com o espírito e a disciplina de um samurai. Assim o Grupo de Taiko Soragoi Wadaiko cresce com seu próprio estilo e difunde a cultura japonesa.', 'soragoiwadaiko@gmail.com', 'soragoi.wadaiko', 'soragoi'),
 (DEFAULT, 'Tenryuu Wadaiko', 'O grupo de Taiko Tenryuu Wadaiko, (Tenryuu é "Dragão Celestial" em japonês) teve início em agosto de 2002, unindo os principais valores da cultura japonesa o grupo foi crescendo com o mesmo objetivo de preservar e propagar a rica cultura japonesa através da arte milenar do Taiko (Tambor Japonês).
Em 2012, o Tenryuu Wadaiko teve a grande honra de representar o Brasil no 15º Nippon Taiko Contest, em Ishikawa no Japão, ao conquistar o título de Campeão Brasileiro de Taiko.', 'tenryuu_wadaiko@outlook.com', 'tenryuuwadaiko', 'tenryuuwadaiko'),
 (DEFAULT, 'Todoroki Daiko', 'Com um significado mitológico de celebração ao som de instrumentos de percussão na cultura japonesa, a arte da música com taikos (que engloba uma variedade de tambores de estilo japonês) está no intenso trabalho em equipe e dedicação. O tradicional grupo Todoroki Daiko da ACENBO difunde essa arte milenar desde 2003, quando foi formado, e é conhecido nacionalmente pela beleza do ritmo trabalhado por sua equipe, que já participou de diversos festivais e concursos no Brasil e no exterior. 
 Todos os anos, as apresentações de taiko são as mais aguardadas do Japan Matsuri e encantam desde crianças até adultos', '', '', '');


 -- INSERT ENDEREÇO ---------------------------------------------------------------------
  INSERT INTO Endereco VALUES
 (DEFAULT, '01503-000', 'Av. da Liberdade', '365', 1),
 (DEFAULT, '04832-090', 'Av. Orfeo Paravente', '327', 2),
 (DEFAULT, '01503-001', 'Av. da Liberdade', '607', 3),
 (DEFAULT, '03550-010', 'R. Trapiche', '182', 4),
 (DEFAULT, '04302-020', 'R. Paracatu', '60',  5),
 (DEFAULT, '', '', '', 6),
 (DEFAULT, '03666-020', 'R. Monte das Gameleiras', '357',  7),
 (DEFAULT, '03446-010', 'R. Nunes Balboa', '299', 8),
 (DEFAULT, '08010-200', 'R. Praça São João de Cortês', '8', 9),
 (DEFAULT, '06030-512', 'R. Acenbo', '100', 10);
 
 
 -- INSERT TELEFONE ---------------------------------------------------------------------
 INSERT INTO Telefone VALUES
 (DEFAULT, '11', '3208', '5090', 1),
 (DEFAULT, '11', '5526', '3355', 2),
 (DEFAULT, '11', '99873', '4531', 3),
 (DEFAULT, '11', '93779', '9916', 4),
 (DEFAULT, '11', '5585', '9258', 5),
 (DEFAULT, '11', '', '', 6),
 (DEFAULT, '11', '94367', '7167', 7),
 (DEFAULT, '11', '98200', '3995', 8),
 (DEFAULT, '11', '99586', '4267', 9),
 (DEFAULT, '11', '3684', '0904', 10);