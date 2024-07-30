CREATE DATABASE guia_turistico;

USE guia_turistico;

CREATE TABLE destinations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    image VARCHAR(255)
);

CREATE TABLE attractions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    destination_id INT,
    name VARCHAR(255) NOT NULL,
    type VARCHAR(255),
    description TEXT,
    FOREIGN KEY (destination_id) REFERENCES destinations(id)
);

CREATE TABLE imagens (
    id INT AUTO_INCREMENT PRIMARY KEY,
    destino_id INT,
    url VARCHAR(255),
    FOREIGN KEY (destino_id) REFERENCES destinos(id)
);

INSERT INTO destinos (nome, descricao, latitude, longitude) VALUES
('São Luís', 'Capital do Maranhão', -2.5307, -44.3068),
('Lençóis Maranhenses', 'Parque Nacional', -2.6894, -43.4412),
('Alcântara', 'Cidade Histórica', -2.4098, -44.4151),
('Chapada das Mesas', 'Parque Nacional', -7.0369, -46.7007),
('Raposa', 'Município litorâneo', -2.4254, -44.0974),
('Barreirinhas', 'Portal dos Lençóis Maranhenses', -2.7469, -42.8242),
('Carolina', 'Cidade histórica e turística', -7.335, -47.4697);

INSERT INTO atrativos (destino_id, nome, tipo, descricao, dicas) VALUES
(1, 'Centro Histórico', 'Monumento', 'Patrimônio da Humanidade.', 'Visite durante o dia.'),
(1, 'Praia do Calhau', 'Praia', 'Praia urbana com boa infraestrutura.', 'Ideal para relaxar e caminhar.'),
(2, 'Lagoa Azul', 'Praia', 'Lagoas de águas cristalinas.', 'Melhor época: Junho a Agosto.'),
(2, 'Lagoa Bonita', 'Praia', 'Outra lagoa famosa e bela.', 'Acesso com guia local.'),
(3, 'Ruínas da Igreja', 'Monumento', 'Ruínas de uma antiga igreja.', 'Visite durante o dia.'),
(3, 'Museu Histórico', 'Museu', 'Museu com artefatos e história local.', 'Verificar horários de funcionamento.'),
(4, 'Cachoeira da Pedra Caída', 'Cachoeira', 'Cachoeira impressionante e popular.', 'Leve roupa de banho.'),
(4, 'Encanto Azul', 'Lagoa', 'Lagoa com águas cristalinas.', 'Visite de manhã para melhor visualização.'),
(5, 'Ilha de Curupu', 'Ilha', 'Ilha paradisíaca.', 'Acesso somente por barco.'),
(5, 'Praia de Carimã', 'Praia', 'Praia tranquila e bonita.', 'Ideal para famílias.'),
(6, 'Rio Preguiças', 'Rio', 'Rio com passeios de barco.', 'Reserve um passeio de barco.'),
(6, 'Vassouras', 'Dunas', 'Dunas e pequenas lagoas.', 'Ótimo para fotos.'),
(7, 'Cachoeira do Itapecuru', 'Cachoeira', 'Cachoeira com área para banho.', 'Leve roupa de banho.'),
(7, 'Morro do Chapéu', 'Montanha', 'Montanha com vista panorâmica.', 'Ideal para trilhas.');

INSERT INTO imagens (destino_id, url) VALUES