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
	id int primary key auto_increment,
	texto VARCHAR(255),
	dtPost DATETIME DEFAULT current_timestamp,
	qtd_likes int,
	fk_usuario int,
	CONSTRAINT fk_usuario FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);


INSERT INTO usuario (nome, imagem ) values 
	("Davi", "https://avatars.githubusercontent.com/u/142421704?v=4"),
	("Kaori", "https://avatars.githubusercontent.com/u/125297000?v=4");

INSERT INTO post (texto, qtd_likes, fk_usuario) VALUES 
("Olá Mundo", 1, 1);	
