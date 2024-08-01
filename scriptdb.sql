-- Criação do banco de dados
CREATE DATABASE db_filmes;

-- Seleção do banco de dados
USE db_filmes;

-- Criação da tabela filmes
CREATE TABLE filmes (
    id INT AUTO_INCREMENT PRIMARY KEY,  -- ID local único
    tmdb_id INT UNIQUE NOT NULL        -- ID do filme na TMDB
);

-- Criação da tabela usuarios
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,  -- ID único do usuário
    username VARCHAR(255) UNIQUE NOT NULL, -- Nome de usuário único
    email VARCHAR(255) UNIQUE NOT NULL,    -- Email único
    senha TEXT NOT NULL                   -- Senha (armazenada como hash)
);

-- Criação da tabela avaliacoes
CREATE TABLE avaliacoes (
    id INT AUTO_INCREMENT PRIMARY KEY,   -- ID único da avaliação
    filme_id INT NOT NULL,               -- ID do filme
    usuario_id INT NOT NULL,             -- ID do usuário
    nota INT CHECK (nota >= 1 AND nota <= 5), -- Nota dada pelo usuário (1 a 5)
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Data e hora da criação
    FOREIGN KEY (filme_id) REFERENCES filmes(id) ON DELETE CASCADE, -- Chave estrangeira referenciando filmes
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE -- Chave estrangeira referenciando usuários
);

-- Criação da tabela comentarios
CREATE TABLE comentarios (
    id INT AUTO_INCREMENT PRIMARY KEY,   -- ID único do comentário
    filme_id INT NOT NULL,               -- ID do filme
    usuario_id INT NOT NULL,             -- ID do usuário
    comentario TEXT NOT NULL,           -- Texto do comentário
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Data e hora da criação
    FOREIGN KEY (filme_id) REFERENCES filmes(id) ON DELETE CASCADE, -- Chave estrangeira referenciando filmes
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE -- Chave estrangeira referenciando usuários
);


INSERT INTO filmes (tmdb_id) VALUES (1001);
INSERT INTO filmes (tmdb_id) VALUES (1002);
INSERT INTO filmes (tmdb_id) VALUES (1003);
INSERT INTO filmes (tmdb_id) VALUES (1004);
INSERT INTO filmes (tmdb_id) VALUES (1005);


INSERT INTO usuarios (username, email, senha) VALUES ('user1', 'user1@example.com', 'hash_senha_1');
INSERT INTO usuarios (username, email, senha) VALUES ('user2', 'user2@example.com', 'hash_senha_2');
INSERT INTO usuarios (username, email, senha) VALUES ('user3', 'user3@example.com', 'hash_senha_3');
INSERT INTO usuarios (username, email, senha) VALUES ('user4', 'user4@example.com', 'hash_senha_4');
INSERT INTO usuarios (username, email, senha) VALUES ('user5', 'user5@example.com', 'hash_senha_5');

INSERT INTO avaliacoes (filme_id, usuario_id, nota) VALUES (1, 1, 4);
INSERT INTO avaliacoes (filme_id, usuario_id, nota) VALUES (3, 4, 2);
INSERT INTO avaliacoes (filme_id, usuario_id, nota) VALUES (4, 5, 1);



INSERT INTO comentarios (filme_id, usuario_id, comentario) VALUES (1, 1, 'Ótimo filme! Muito emocionante.');
INSERT INTO comentarios (filme_id, usuario_id, comentario) VALUES (3, 4, 'Não gostei da trama.');
INSERT INTO comentarios (filme_id, usuario_id, comentario) VALUES (4, 5, 'Muito abaixo das minhas expectativas.');

