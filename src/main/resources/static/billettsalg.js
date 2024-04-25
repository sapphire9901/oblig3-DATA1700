// Function to register a film
function registrer() {
    // Retrieve input values
    const film = $("#film").val();
    const antall = $("#antall").val();
    const navn = $("#navn").val();
    const etternavn = $("#etternavn").val();
    const telefon = $("#telefon").val();
    const epostadresse = $("#epostadresse").val();

    // Reset error messages
    $(".error").text("");

    // Initialize error flag
    let hasError = false;

    // Validation for film
    if (film === "") {
        $("#error_film").text("Må velge en film");
        hasError = true;
    }

    // Validation for antall billett
    if (antall === "" || isNaN(antall) || parseInt(antall) <= 0) {
        $("#error_antall").text("Må velge antall");
        hasError = true;
    }

    // Validation for fornavn
    if (navn === "") {
        $("#error_navn").text("Må skrive noe inn i fornavn");
        hasError = true;
    }

    // Validation for etternavn
    if (etternavn === "") {
        $("#error_etternavn").text("Må skrive noe inn i etternavn");
        hasError = true;
    }

    // Validation for telefonnummer using regex
    const telefonRegex = /^\d{8}$/;
    if (telefon === "" || !telefonRegex.test(telefon)) {
        $("#error_telefon").text("Må skrive inn et gyldig telefonnummer (8 siffer)");
        hasError = true;
    }

    // Validation for email using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(epostadresse)) {
        $("#error_epost").text("Må skrive inn en gyldig e-postadresse");
        hasError = true;
    }

    // If any validation fails, return without registering the ticket
    if (hasError) {
        return;
    }

    // If all validations pass, register the ticket
    const kunde = {
        film: film,
        antall: antall,
        navn: navn,
        etternavn: etternavn,
        telefon: telefon,
        epostadresse: epostadresse
    };

    // Perform AJAX POST request to save data
    $.post("/lagre", kunde, function(){
        // After successfully registering the ticket, fetch all films and update UI
        hentAlle();
    });

    // Reset input fields
    $("#film, #antall, #navn, #etternavn, #telefon, #epostadresse").val("");
}

// Function to display films in the UI
function visFilmRegister(filmRegister) {
    let ut = "<table><tr>" +
        "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefon</th><th>E-post</th>" +
        "</tr>";
    for (let p of filmRegister) {
        ut += "<tr>";
        ut += "<td>" + p.film + "</td><td>" + p.antall + "</td><td>"
            + p.navn + "</td><td>" + p.etternavn + "</td><td>"
            + p.telefon + "</td><td>" + p.epostadresse + "</td>";
        ut += "</tr>";
    }
    $("#filmRegister").html(ut);
}

// Function to delete the last row from the table
function slettRegister() {
    $("#filmRegister tr:last").remove();
}
