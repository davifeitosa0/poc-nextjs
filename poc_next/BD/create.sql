CREATE DATABASE poc_next;

USE poc_next;

CREATE TABLE usuario (
	id int primary key auto_increment,
	nome VARCHAR(50),
	email VARCHAR(150),
	senha VARCHAR(50),
	imagem VARCHAR(150)
);

CREATE TABLE post (
	texto VARCHAR(255),
	imagem VARCHAR(150),
	dtPost DATETIME DEFAULT current_timestamp,
	fkUsuario int,
	CONSTRAINT fk_usuario FOREIGN KEY (fkUsuario) REFERENCES usuario(id)
);


INSERT INTO usuario (nome, imagem ) values 
	("Davi", "https://avatars.githubusercontent.com/u/142421704?v=4"),
	("Kaori", "https://avatars.githubusercontent.com/u/125297000?v=4");
	
SELECT * FROM usuario;
