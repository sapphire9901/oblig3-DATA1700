$(function (){
    //henter alle billettene
    hentAlleBillett();
})
//registrerer inputene og viser dem
function registrerBillett() {

    const billettKjop = {
        film : $("#film").val(),
        antall : $("#antall").val(),
        fornavn : $("#fornavn").val(),
        etternavn : $("#etternavn").val(),
        telefonnr : $("#telefonnr").val(),
        epost : $("#epost").val()
    };

    //initialiserer variabel med value false
    let hasError = false;

    // Validation for film
    if (billettKjop.film === "") {
        $("#error_film").html("Må velge en film");
        hasError = true;
    } else {
        $("#error_film").html("");
    }


    // Validering for antall billett
    if (billettKjop.antall === "" || isNaN(billettKjop.antall) || parseInt(antall) <= 0) {
        $("#error_antall").html("Må velge antall");
        hasError = true;
    } else {
        $("#error_antall").html("");
    }


    // Validering for fornavn
    if (billettKjop.fornavn === "") {
        $("#error_fornavn").html("Må skrive noe inn i fornavn");
        hasError = true;
    } else {
        $("#error_fornavn").html("");
    }


    // Validering for etternavn
    if (billettKjop.etternavn === "") {
        $("#error_etternavn").html("Må skrive noe inn i etternavn");
        hasError = true;
    } else {
        $("#error_etternavn").html("");
    }


    // Validering for telefonnummer ved å bruke regex
    const telefonRegex = /^\d{8}$/;
    if (billettKjop.telefonnr === "" || !telefonRegex.test(billettKjop.telefonnr)) {
        $("#error_telefonnr").html("Må skrive inn et gyldig telefonnummer (8 siffer)");
        hasError = true;
    } else {
        $("#error_telefonnr").html("");
    }

    // Validering for email ved bruk av regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(billettKjop.epost)) {
        $("#error_epost").html("Må skrive inn en gyldig e-postadresse");
        hasError = true;
    } else {
        $("#error_epost").html("");
    }


    //nullstille skjema
    if( hasError === false){
        $("#film").val("");
        $("#antall").val("");
        $("#fornavn").val("");
        $("#etternavn").val("");
        $("#telefonnr").val("");
        $("#epost").val("");
    }else {
        return;
    }

    // Avbryt eller send inn og hent alle billetter på nytt
    if(Object.values(billettKjop).every(val => val === "")){
    return;
    }else {
        $.post("/lagreBillett", billettKjop, function (){
            hentAlleBillett();
        });
    }
}

//lagrer tabellen
function visFilmRegister(filmRegister){
    // skriv ut
    let ut = "<table><tr>" +
        "<th>Film</th>" +
        "<th>Antall</th>" +
        "<th>Fornavn</th>" +
        "<th>Etternavn</th>" +
        "<th>Telefon</th>" +
        "<th>E-post</th>" +
        "</tr>";
    for (let billettKjop of filmRegister){
        ut += "<tr>"+
            "<td>"+billettKjop.film+"</td>"+
            "<td>"+billettKjop.antall+"</td>"+
            "<td>"+billettKjop.fornavn+"</td>"+
            "<td>"+billettKjop.etternavn+"</td>"+
            "<td>"+billettKjop.telefonnr+"</td>"+
            "<td>"+billettKjop.epost+"</td>"+
            "</tr>";
    }
    ut += "</table>";
    $("#filmRegister").html(ut);
}


//skirver ut alle billettene
function hentAlleBillett(){
    $.get("/hentAlleBiletter", function (data){
        visFilmRegister(data)
    });
}

//Funksjon for å hente billetter på nytt etter sletting
function slettFilmRegister(){
    $.post("/slettAlle", function (){
        hentAlleBillett()
    });
}



