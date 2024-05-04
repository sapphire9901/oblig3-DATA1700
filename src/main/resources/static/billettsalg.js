const filmRegister=[];
// Function to clear the content displayed by visFilmRegister

function visFilmRegister(){
    // skriv ut
    let ut = "<table><tr>" +
        "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefon</th><th>E-post</th>" +
        "</tr>";
    for (let p of filmRegister){
        ut+="<tr>";
        ut+="<td>"+p.film+"</td><td>"+p.antall+"</td><td>"
            +p.navn+"</td><td>"+p.etternavn+"</td><td>"
            +p.telefon+"</td><td>"+p.epostadresse+"</td>";
        ut+="</tr>";
    }
    $("#filmRegister").html(ut);
}
//registrerer inputene og viser dem
function registrer() {
    const film = $("#film").val();
    const antall = $("#antall").val();
    const navn = $("#navn").val();
    const etternavn = $("#etternavn").val();
    const telefon = $("#telefon").val();
    const epostadresse = $("#epostadresse").val();

    //initialiserer variabel med value false
    let hasError = false;

    // Validation for film
    if (film === "") {
        $("#error_film").text("Må velge en film");
        hasError = true;
    } else {
        $("#error_film").text("");
    }


    // Validering for antall billett
    if (antall === "" || isNaN(antall) || parseInt(antall) <= 0) {
        $("#error_antall").text("Må velge antall");
        hasError = true;
    } else {
        $("#error_antall").text("");
    }


    // Validering for fornavn
    if (navn === "") {
        $("#error_fornavn").text("Må skrive noe inn i fornavn");
        hasError = true;
    } else {
        $("#error_fornavn").text("");
    }


    // Validering for etternavn
    if (etternavn === "") {
        $("#error_etternavn").text("Må skrive noe inn i etternavn");
        hasError = true;
    } else {
        $("#error_etternavn").text("");
    }


    // Validering for telefonnummer ved å bruke regex
    const telefonRegex = /^\d{8}$/;
    if (telefon === "" || !telefonRegex.test(telefon)) {
        $("#error_telefon").text("Må skrive inn et gyldig telefonnummer (8 siffer)");
        hasError = true;
    } else {
        $("#error_telefon").text("");
    }

    // Validering for email ved bruk av regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(epostadresse)) {
        $("#error_epost").text("Må skrive inn en gyldig e-postadresse");
        hasError = true;
    } else {
        $("#error_epost").text("");
    }


    // hvis noen av  input er invalid, returner uten registrering
    if (hasError) {
        return;
    }

    // If all validations pass, register the ticket

    //en konstant for billettregistrering
    const billett = {
        film: film,
        antall: antall,
        navn: navn,
        etternavn: etternavn,
        telefon: telefon,
        epostadresse: epostadresse
    };
    filmRegister.push(billett);

    //nullstill inputboksene
   $("#film").val('');
   $("#antall").val('');
   $("#navn").val('');
   $("#etternavn").val('');
   $("#telefon").val('');
   $("#epostadresse").val();
    visFilmRegister();

}

//Funksjon for å slette alt i filmregisteret
function slettRegister(){
    $("#billettTabell tr:first").remove();
}


