function onloadFunction() {
    stoelFunction();
    betalen();
}

//komende 3 functies zijn voor het valideren van de inputvelden

function validateName() {
    //als de gebruiker in het invoerveld meer dan 0 tekens heeft
    if (document.getElementById('naam').value > '') {
        // verwijder melding wanneer aanwezig
        document.getElementById('naamSpan').innerHTML = '';
        //verander border in groene border
        document.getElementById('naam').style.border = '2px solid lightgreen';
        //verander shadow in groene shadow
        document.getElementById('naam').style.boxShadow = '0 3px 10px rgba(120, 100, 100, 0.15)';
    } else {
        //verander tekst in meldingbox naar 'Vult u alstublieft uw naam in'
        document.getElementById('naamSpan').innerHTML = 'Vult u alstublieft uw naam in.';
        //verander border in rode border
        document.getElementById('naam').style.border = '2px solid red';
        //verander shadow in rode shadow
        document.getElementById('naam').style.boxShadow = '0 3px 10px rgba(255, 0, 0, 0.15)';
    }
}

function validateMail() {
    //als het tekstveld een combinatie van lowercase of uppercase letters bevat, mogelijk een getal, een @, en een punt
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById('mail').value)) {
        //verwijder melding wanneer aanwezig
        document.getElementById('mailSpan').innerHTML = '';
        //verander border in groene border
        document.getElementById('mail').style.border = '2px solid lightgreen';
        //verander shadow in groene shadow
        document.getElementById('mail').style.boxShadow = '0 3px 10px rgba(120, 100, 100, 0.15)';
    } else {
        //verander tekst in meldingbox naar 'Vult u alstublieft een geldig emailadres in'
        document.getElementById('mailSpan').innerHTML = 'Vult u alstublieft een geldig email-adres in.';
        //verander border in rode border
        document.getElementById('mail').style.border = '2px solid red';
        //verander shadow in rode shadow
        document.getElementById('mail').style.boxShadow = '0 3px 10px rgba(255, 0, 0, 0.15)';
    }
}

function validateNumber() {
    if (document.getElementById('tel').value > '') {
        document.getElementById('telSpan').innerHTML = '';
        document.getElementById('tel').style.border = '2px solid lightgreen';
        document.getElementById('tel').style.boxShadow = '0 3px 10px rgba(120, 100, 100, 0.15)';
    } else {
        document.getElementById('telSpan').innerHTML = 'Vult u alstublieft uw telefoonnummer in.';
        document.getElementById('tel').style.border = '2px solid red';
        document.getElementById('tel').style.boxShadow = '0 3px 10px rgba(255, 0, 0, 0.15)';
    }
}

//----------------------------------------------------
//functie voor het selecteren van stoelen
function stoelFunction() {
    //array aanmaken van alle bestaande stoelen
    var stoelen = document.getElementsByClassName('stoel');
    //het selecteren van een stoel waar op geklikt wordt d.m.v. een forloop
    for (var i = 0; i < stoelen.length; i++) {
        //het aanroepen van een functie als op 'i' stoel geklikt wordt
        stoelen[i].onclick = function () {
            //als er nog niet op de stoel geklikt wordt, krijgt deze de stoelSelected class
            if (this.className == 'stoel') {
                this.className += 'Selected';
                //als er wel op de stoel geklikt wordt, krijgt deze de stoel class.
            } else if (this.className == 'stoelSelected') {
                this.className = 'stoel';
            }
        }

    }


    //het aanmaken van een array van 6 willekeurig gekozen bestaande stoelen
    var rand = [stoelen[Math.floor(Math.random() * stoelen.length)], stoelen[Math.floor(Math.random() * stoelen.length)], stoelen[Math.floor(Math.random() * stoelen.length)], stoelen[Math.floor(Math.random() * stoelen.length)], stoelen[Math.floor(Math.random() * stoelen.length)], stoelen[Math.floor(Math.random() * stoelen.length)]];


    //deze 6 stoelen een class stoelRed toekennen
    rand[0].className = 'stoelRed';
    rand[1].className = 'stoelRed';
    rand[2].className = 'stoelRed';
    rand[3].className = 'stoelRed';
    rand[4].className = 'stoelRed';
    rand[5].className = 'stoelRed';
    document.getElementById('bestellingSpan').innerHTML = Math.floor((Math.random() * 10000) + 1);
}

//functie voor het invullen van de bevestiging
window.onscroll = function () {
    document.getElementById('naamBevestiging').innerHTML = naam.value;
    document.getElementById('mailBevestiging').innerHTML = mail.value;
    document.getElementById('telBevestiging').innerHTML = tel.value;
    document.getElementById('aantalTickets').innerHTML = document.getElementsByClassName('stoelSelected').length;

}

var betaalMiddel = 0;


//functie voor het laten zien dat de gebruiker een betaalmiddel goed gekozen heeft.
function betalen() {
    var betaalmiddelen = document.getElementsByClassName('betaalmiddel');
    var ideal = document.getElementById('ideal');
    var paypal = document.getElementById('paypal');
    var bitcoin = document.getElementById('bitcoin');
    var later = document.getElementById('later');
    for (var i = 0; i < betaalmiddelen.length; i++) {
        betaalmiddelen[i].onclick = function () {
            ideal.style.border = '';
            paypal.style.border = '';
            bitcoin.style.border = '';
            later.style.border = '';
            if (this.value == 'ideal') {
                ideal.style.border = "10px solid #cd1946";
            };
            if (this.value == 'paypal') {
                paypal.style.border = "10px solid #cd1946";
            };
            if (this.value == 'bitcoin') {
                bitcoin.style.border = "10px solid #cd1946";
            };
            if (this.value == 'later') {
                later.style.border = "10px solid #cd1946";
            };

            betaalMiddel = this;
            document.getElementById('betaalSpan').innerHTML = '';
        }
    }
}

//functie die checkt of er een betaling gekozen is en anders een melding geeft.
function checkBetaling() {
    if (betaalMiddel == 0) {
        document.getElementById('betaalSpan').innerHTML = 'Kiest u alstublieft uit een van de gegeven betaalmethoden.';
    } else {
        console.log('halfwaythere');
        if (document.getElementById('mailSpan').innerHTML == "" &&
            document.getElementById('naamSpan').innerHTML == "" &&
            document.getElementById('telSpan').innerHTML == "") {
            document.getElementById('betaalSpan').innerHTML += 'Controleert u alstublieft uw gegeven naam, email, of telefoonnummer.';

        } else {
            window.location.replace("reserveren2.html");
        }

    }

}