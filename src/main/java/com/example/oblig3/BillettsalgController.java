package com.example.oblig3;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class BillettsalgController {
    @Autowired
    private BillettsalgRepository rep;

    @PostMapping("/lagBillett")
    public void lagreBillett(Billettsalg filmRegister) {
        rep.lagreBillett(filmRegister);
    }

    @GetMapping("/hentAlleBillett")
    public List<Billettsalg> hentAlleBillett() {
        return rep.hentAlleBillett();
    }

    @PostMapping("/slettAlle")
    public void slettFilmRegister(){
        rep.slettFilmRegister();
    }

}
