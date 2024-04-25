package com.example.oblig3;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.Collections;
import java.util.Comparator;
import java.util.List;
@Repository
public class BillettsalgRepository {
    @Autowired
    BillettsalgRepository billettsalgRepository;

    @PostMapping("/lagreBilett")
    public void lagreBilett(Billettsalg billett){ billettsalgRepository.lagreBilett(billett);}

    @GetMapping("/hentAlleBiletter")
    public List<Billettsalg> hentAlleBiletter(){
        List<Billettsalg> billett = billettsalgRepository.hentAlleBiletter();
        Collections.sort(billett, new Comparator<Billettsalg>() {
            @Override
            public int compare(Billettsalg o1, Billettsalg o2) {
                return o1.getEtternavn().compareTo(o2.getEtternavn());
            }
        });
        return billett;
    }

    @GetMapping("/slettBilettene")
    public void slettBilettene(){ billettsalgRepository.slettBilettene();}

    @GetMapping("/slettEnBilett")
    public void slettEnBilett(short id){
        billettsalgRepository.slettEnBilett(id);
    }

}
