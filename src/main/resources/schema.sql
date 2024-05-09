CREATE TABLE Billettsalg
(
    id INTEGER AUTO_INCREMENT NOT NULL,
    film VARCHAR(50) NOT NULL,
    antall INTEGER NOT NULL,
    fornavn VARCHAR(30) NOT NULL,
    etternavn VARCHAR(40) NOT NULL,
    telefonnr VARCHAR(8) NOT NULL,
    epost VARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
);