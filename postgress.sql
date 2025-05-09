CREATE DATABASE computadoras;

CREATE TABLE rol (
	idRol NUMERIC(2,0) NOT NULL,
	tipoRol CHAR(1) NOT NULL,
	CONSTRAINT pkRol PRIMARY KEY (idRol)
);

CREATE TABLE usuario (
	idUsuario NUMERIC(5,0) NOT NULL,
	nombre VARCHAR(255) NOT NULL,
	apellidoPaterno VARCHAR(255) NOT NULL,
	apellidoMaterno VARCHAR(255) NOT NULL,
	contrasenia VARCHAR(255) NOT NULL,
	idRol NUMERIC(2,0) NOT NULL,
	CONSTRAINT pkUsuario PRIMARY KEY (idUsuario),
	CONSTRAINT fkRol FOREIGN KEY (idRol)
		REFERENCES rol(idRol)
		ON DELETE CASCADE
		ON UPDATE CASCADE
);

CREATE TABLE categoria (
	idCategoria NUMERIC(5,0) NOT NULL,
	categoria VARCHAR(255) NOT NULL,
	CONSTRAINT pkCategoria PRIMARY KEY (idCategoria)
);

CREATE TABLE componente (
	idComponente NUMERIC(5,0) NOT NULL,
	nombre VARCHAR(255) NOT NULL,
	precio NUMERIC(10,0) NOT NULL,
	descripcion VARCHAR(255) NOT NULL,
	marca VARCHAR(255) NOT NULL,
	stock NUMERIC(3,0) NOT NULL,
	idCategoria NUMERIC(5,0) NOT NULL,
	CONSTRAINT pkComponente PRIMARY KEY (idComponente),
	CONSTRAINT fkCategoria FOREIGN KEY (idCategoria)
		REFERENCES categoria(idCategoria)
);

CREATE TABLE formaPago (
	idFormaPago NUMERIC(5,0) NOT NULL,
	tipoPago VARCHAR(100) NOT NULL,
	CONSTRAINT pkFormaPago PRIMARY KEY (idFormaPago)
);

CREATE TABLE computadora (
	idComputadora NUMERIC(5,0) NOT NULL,
	direccion VARCHAR(255) NOT NULL,
	fechaPedido TIMESTAMP NOT NULL,
	fechaEntrega TIMESTAMP NOT NULL,
	idFormaPago NUMERIC(5,0) NOT NULL,
	CONSTRAINT pkComputadora PRIMARY KEY (idComputadora),
	CONSTRAINT fkComputadoraFormaPago FOREIGN KEY (idFormaPago)
		REFERENCES formaPago(idFormaPago)
		ON DELETE RESTRICT
		ON UPDATE CASCADE
);

CREATE TABLE computadoraxcomponente (
	idComputadora NUMERIC(5,0) NOT NULL,
	idComponente NUMERIC(5,0) NOT NULL,
	cantidad NUMERIC(10,0) NOT NULL,
	CONSTRAINT pkComputadoraXComponente PRIMARY KEY (idComputadora, idComponente),
	CONSTRAINT fkComputadora FOREIGN KEY (idComputadora)
		REFERENCES computadora(idComputadora),
	CONSTRAINT fkComponente FOREIGN KEY (idComponente)
		REFERENCES componente(idComponente)
);
