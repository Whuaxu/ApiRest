CREATE TABLE IF NOT EXISTS clients (
    id BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL,
    cif VARCHAR(100) UNIQUE NOT NULL,
    address VARCHAR(150) NOT NULL,
    poblation VARCHAR(100) NOT NULL,
    logo VARCHAR(255) NOT NULL
);


CREATE TABLE IF NOT EXISTS projects (
  id BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL UNIQUE,
  fec_ini DATE NOT NULL,
  fec_fin DATE NOT NULL,
  numhours INT NOT NULL,
  tags VARCHAR(255) NOT NULL
);


INSERT INTO clients (name, cif, address, poblation, logo) VALUES
('Client A', 'CIF123456A', '123 Main St', 'Cityville', 'logo1.png'),
('Client B', 'CIF654321B', '456 Elm St', 'Townsburg', 'logo2.png');

INSERT INTO projects (name, fec_ini, fec_fin, numhours, tags) VALUES
('Project Alpha', '2023-01-01', '2023-06-30', 500, 'tag1,tag2'),
('Project Beta', '2023-02-15', '2023-08-15', 300, 'tag3,tag4');

