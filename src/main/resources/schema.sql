CREATE TABLE Billettsalg(
                            id SMALLINT NOT NULL AUTO_INCREMENT,
                            velgFilm VARCHAR(30) NOT NULL,
                            antall SMALLINT NOT NULL,
                            fornavn VARCHAR(30) NOT NULL,
                            etternavn VARCHAR(30) NOT NULL,
                            telefonnr VARCHAR(30) NOT NULL,
                            epost VARCHAR(30) NOT NULL,
                            PRIMARY KEY (id)
);