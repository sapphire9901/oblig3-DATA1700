package com.example.oblig3;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class BillettsalgRepository {
    @Autowired
    public JdbcTemplate db;

    public void lagreBillett(Billettsalg filmRegister) {
        String sql = "INSERT INTO Billettsalg (film, antall, fornavn, etternavn, telefonnr, epost)" +
                "VALUES (?,?,?,?,?,?)";
        db.update(sql, filmRegister.getFilm(), filmRegister.getAntall(), filmRegister.getFornavn(),
                filmRegister.getEtternavn(), filmRegister.getTelefonnr(), filmRegister.getEpost());
    }

    public List<Billettsalg> hentAlleBillett() {
        String sql = "SELECT * FROM Billettsalg ORDER BY etternavn";
        return db.query(sql, new BeanPropertyRowMapper(Billettsalg.class));
    }

    public void slettFilmRegister() {
        String sql = "DELETE FROM Billettsalg";
        db.update(sql);
    }





}
