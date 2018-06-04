function clickableLogo() {
    location.href = "index.html";
}



function runSlider(tijd) {

    var foto1 = document.getElementsByClassName('mainSlider1');
    var foto2 = document.getElementsByClassName('mainSlider2');
    var foto3 = document.getElementsByClassName('mainSlider3');
    var timeOutTijd = tijd;

    setTimeout(function () {
        foto3[0, 1].style.opacity = '0';
    }, timeOutTijd)
    setTimeout(function () {
        foto2[0, 1].style.opacity = '0';
    }, timeOutTijd * 2)
    setTimeout(function () {
        foto1[0, 1].style.opacity = '0';
    }, timeOutTijd * 3)

    setTimeout(resetSlider, timeOutTijd * 3);

    function resetSlider() {
        foto1[0, 1].style.opacity = '1';
        foto2[0, 1].style.opacity = '1';
        foto3[0, 1].style.opacity = '1';
        sliderLoop();
    }

}

function sliderLoop() {
    runSlider(3000)

}

function zucht() {
    location.href = "./biest.html";
}

function zouthuis() {
    location.href = "./biest.html";
}

function vrede() {
    location.href = "./biest.html";
}


//sloppy code, maar de for-loop / switch lukte even niet

function active() {
    var pagina = location.pathname;
    var over = pagina.includes("over");
    var agenda = pagina.includes("agenda");
    var fotoboek = pagina.includes("fotoboek");
    var contact = pagina.includes("contact");
    var lidworden = pagina.includes("lidworden");
    var meespelen = pagina.includes("meespelen");
    var wanneer = pagina.includes("wanneer");
    var inschrijven = pagina.includes("inschrijven");
    var biest = pagina.includes("biest");
    var huren = pagina.includes("huren");
    var technisch = pagina.includes("technisch");


    var actief = [agenda, fotoboek, over, contact, lidworden, meespelen, wanneer, inschrijven, biest, huren, technisch];

    if (actief[0] == true) {
        document.getElementById('nav1').style.color = "#cd1946";
        document.getElementById('nav1').style.fontWeight = 800;
    } else if (actief[1] == true) {
        document.getElementById('nav3').style.color = "#cd1946";
        document.getElementById('nav3').style.fontWeight = 800;
    } else if (actief[2] == true) {
        document.getElementById('nav4').style.color = "#cd1946";
        document.getElementById('nav4').style.fontWeight = 800;
    } else if (actief[3] == true) {
        document.getElementById('nav5').style.color = "#cd1946";
        document.getElementById('nav5').style.fontWeight = 800;
    } else if (actief[4] == true) {
        document.getElementById('nav4').style.color = "#cd1946";
        document.getElementById('nav4').style.fontWeight = 800;
    } else if (actief[5] == true) {
        document.getElementById('nav4').style.color = "#cd1946";
        document.getElementById('nav4').style.fontWeight = 800;
    } else if (actief[6] == true) {
        document.getElementById('nav4').style.color = "#cd1946";
        document.getElementById('nav4').style.fontWeight = 800;
    } else if (actief[7] == true) {
        document.getElementById('nav4').style.color = "#cd1946";
        document.getElementById('nav4').style.fontWeight = 800;
    } else if (actief[8] == true) {
        document.getElementById('nav1').style.color = "#cd1946";
        document.getElementById('nav1').style.fontWeight = 800;
    } else if (actief[9] == true) {
        document.getElementById('nav5').style.color = "#cd1946";
        document.getElementById('nav5').style.fontWeight = 800;
    } else if (actief[10] == true) {
        document.getElementById('nav5').style.color = "#cd1946";
        document.getElementById('nav5').style.fontWeight = 800;
    }
}


function kalender() {
    var x = document.getElementById("selector").selectedIndex;
    var y = document.getElementById("selector").options;

    if (x == 0) {} else {
        document.getElementById('kalenderMaand').innerHTML = y[x].text;
    }

}