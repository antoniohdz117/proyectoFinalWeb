CREATE DATABASE computadoras;
\c computadoras

CREATE TABLE rol (
                     idRol SERIAL PRIMARY KEY,
                     tipoRol CHAR(1) NOT NULL
);

CREATE TABLE usuario (
                         idUsuario SERIAL PRIMARY KEY,
                         nombreUsuario VARCHAR(255) NOT NULL ,
                         nombre VARCHAR(255) NOT NULL,
                         apellidoPaterno VARCHAR(255) NOT NULL,
                         apellidoMaterno VARCHAR(255) NOT NULL,
                         email VARCHAR(255) NOT NULL,
                         contrasenia VARCHAR(255) NOT NULL,
                         idRol INTEGER NOT NULL,
                         CONSTRAINT fkRol FOREIGN KEY (idRol)
                             REFERENCES rol(idRol)
                             ON DELETE CASCADE
                             ON UPDATE CASCADE
);

CREATE TABLE categoria (
                           idCategoria SERIAL PRIMARY KEY,
                           categoria VARCHAR(255) NOT NULL
);

CREATE TABLE componente (
                            idComponente SERIAL PRIMARY KEY,
                            nombre VARCHAR(255) NOT NULL,
                            precio NUMERIC(10,0) NOT NULL,
                            descripcion VARCHAR(255) NOT NULL,
                            marca VARCHAR(255) NOT NULL,
                            stock INTEGER NOT NULL,
                            idCategoria INTEGER NOT NULL,
                            CONSTRAINT fkCategoria FOREIGN KEY (idCategoria)
                                REFERENCES categoria(idCategoria)
                                ON DELETE RESTRICT
                                ON UPDATE CASCADE
);

CREATE TABLE formaPago (
                           idFormaPago SERIAL PRIMARY KEY,
                           nombreTitular VARCHAR(255) NOT NULL,
                           numero NUMERIC(20,0) NOT NULL,
                           expiracion TIMESTAMP NOT NULL,
                           cvv INTEGER NOT NULL,
                           tipoPago VARCHAR(100) NOT NULL
);

CREATE TABLE codigo (
                        idCodigo SERIAL PRIMARY KEY,
                        codigo VARCHAR(255) NOT NULL,
                        colonia VARCHAR(255) NOT NULL
);

CREATE TABLE computadora (
                             idComputadora SERIAL PRIMARY KEY,
                             calle VARCHAR(255) NOT NULL,
                             numeroExterior INTEGER NOT NULL,
                             numeroInterior INTEGER NOT NULL,
                             delegacion VARCHAR(255) NOT NULL,
                             idCodigo INTEGER NOT NULL,
                             fechaPedido TIMESTAMP NOT NULL,
                             fechaEntrega TIMESTAMP NOT NULL,
                             idFormaPago INTEGER NOT NULL,
                             CONSTRAINT fkComputadoraCodigo FOREIGN KEY (idCodigo)
                                 REFERENCES codigo(idCodigo)
                                 ON DELETE RESTRICT
                                 ON UPDATE CASCADE,
                             CONSTRAINT fkComputadoraFormaPago FOREIGN KEY (idFormaPago)
                                 REFERENCES formaPago(idFormaPago)
                                 ON DELETE RESTRICT
                                 ON UPDATE CASCADE
);

CREATE TABLE computadoraxcomponente (
                                        idComputadora INTEGER NOT NULL,
                                        idComponente INTEGER NOT NULL,
                                        CONSTRAINT pkComputadoraXComponente PRIMARY KEY (idComputadora, idComponente),
                                        CONSTRAINT fkComputadora FOREIGN KEY (idComputadora)
                                            REFERENCES computadora(idComputadora),
                                        CONSTRAINT fkComponente FOREIGN KEY (idComponente)
                                            REFERENCES componente(idComponente)
);

-- Roles
INSERT INTO rol (tipoRol) VALUES
                              ('A'),
                              ('C'),
                              ('T');


-- Categorías
INSERT INTO categoria (categoria) VALUES
                                      ('Procesadores'),
                                      ('Tarjetas Madre'),
                                      ('Tarjetas Gráficas');

-- Componentes
INSERT INTO componente (nombre, precio, descripcion, marca, stock, idCategoria) VALUES
                                                                                    ('AMD Ryzen 5 5600X', 180, '6 núcleos, 12 hilos, excelente rendimiento para gaming', 'AMD', 15, 1),
                                                                                    ('ASUS Prime B550M', 120, 'Compatibilidad con Ryzen, diseño compacto', 'ASUS', 10, 2),
                                                                                    ('NVIDIA RTX 3060', 350, '8GB GDDR6, ideal para jugar en 1080p y 1440p', 'NVIDIA', 8, 3);

-- Formas de Pago
INSERT INTO formaPago (nombreTitular, numero, expiracion, cvv, tipoPago) VALUES
                                                                             ('Carlos Gómez', 1234567890123456, '2026-12-01 00:00:00', 123, 'Crédito'),
                                                                             ('Ana Martínez', 9876543210987654, '2025-08-01 00:00:00', 456, 'Débito'),
                                                                             ('Luis Fernández', 5678901234567890, '2027-04-01 00:00:00', 789, 'Paypal');

-- Códigos Postales
INSERT INTO codigo (codigo, colonia) VALUES
                                         ('01000', 'Centro'),
                                         ('02000', 'Roma Norte'),
                                         ('03000', 'Del Valle');

-- Computadoras
INSERT INTO computadora (calle, numeroExterior, numeroInterior, delegacion, idCodigo, fechaPedido, fechaEntrega, idFormaPago) VALUES
                                                                                                                                  ('Av. Reforma', 100, 2, 'Cuauhtémoc', 1, '2025-06-01 10:00:00', '2025-06-05 10:00:00', 1),
                                                                                                                                  ('Insurgentes Sur', 200, 1, 'Benito Juárez', 2, '2025-06-02 11:00:00', '2025-06-06 11:00:00', 2),
                                                                                                                                  ('Miguel Ángel de Quevedo', 300, 3, 'Coyoacán', 3, '2025-06-03 12:00:00', '2025-06-07 12:00:00', 3);

-- Computadora x Componente
INSERT INTO computadoraxcomponente (idComputadora, idComponente) VALUES
                                                                     (1, 1),
                                                                     (2, 2),
                                                                     (3, 3);

-- Usuarios
INSERT INTO usuario (nombre, apellidoPaterno, apellidoMaterno, email, contrasenia, idRol) VALUES
                                                                                              ('Carlos', 'Gómez', 'López', 'carlos@example.com', 'pass123', 2),
                                                                                              ('Ana', 'Martínez', 'Ruiz', 'ana@example.com', 'pass456', 2),
                                                                                              ('Luis', 'Fernández', 'Díaz', 'luis@example.com', 'admin789', 1);



SELECT * FROM computadoraxcomponente
