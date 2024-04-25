package com.example.oblig3;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

@RestController
public class BillettsalgController {
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
