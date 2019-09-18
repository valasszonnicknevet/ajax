"use strict";

/*
function loadDoc(){
    document.getElementById("ide").innerHTML = "";
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function()  {
        if(this.readyState == 4  && this.status == 200){
            document.getElementById("ide").innerHTML = this.responseText;
            //myFunction(this);
        }
    };

    xhttp.open("GET", "proba.txt", true);
    xhttp.send();

}

function myFunction(that){
    let szoveg = that.responseText;
    let tomb = szoveg.split('\n');
    let kiir = "";
    for(let i = 0; i < tomb.length; i++){
        kiir += tomb[i] + "<br/>";
    }
    document.getElementById("ide").innerHTML = kiir;
}
*/
function loadDoc() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4  && this.status == 200){
            myFunction(this);
        }
    }
    xhttp.open("GET","nobel.csv", true);
    xhttp.send();
}

function myFunction(that){
    let szoveg = that.responseText;
    let tomb = szoveg.split('\n');
    let txt = "";
    for(let i = 1; i < tomb.length; i++){
        let ideig = tomb[i].split(';');
        txt += "<div>";
        txt += `<p>Év: <b>${ideig[0]}</b></p>`;
        txt += `<p>Miért: <b>${ideig[1]}</b></p>`;
        txt += `<p>Név: <b>${ideig[2]} ${ideig[3]}</b></p>`;
        txt += "</div>";
    }
    document.getElementById("ide").innerHTML = txt;
}