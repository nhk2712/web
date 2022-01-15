var hr = document.getElementById('hr');
var min = document.getElementById('min');
var sec = document.getElementById('sec');

hr.innerText = "00";
min.innerText = "00";
sec.innerText = "10";

var h = 0;
var m = 0;
var s = 10;

var timeout = null;
countdown();

function countdown() {
    if (s === -1) {
        s = 59;
        m--;
    }

    if (m === -1) {
        m = 59;
        h--;
    }

    if (h === -1) {
        clearTimeout(timeout);
        alert("Hết giờ!");
    }

    var sh, sm, ss;

    if (s >= 0 && s <= 9) {
        ss = "0" + String(s);
    }
    else {
        ss = String(s);
    }

    if (m >= 0 && m <= 9) {
        sm = "0" + String(m);
    }
    else {
        sm = String(m);
    }

    sh = String(h);

    sec.innerText = ss;
    min.innerText = sm;
    hr.innerText = sh;

    if (h >= 0 && m >= 0 && s >= 0) {
        timeout = setTimeout(function () {
            s--;
            countdown();
        }, 1000);
    }
    else {
        sec.innerText = "00";
        min.innerText = "00";
        hr.innerText = "0";
    }


}

document.getElementById('stop').onclick = function () {
    clearTimeout(timeout);
}