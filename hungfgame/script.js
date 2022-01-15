var pic = document.getElementById('pic')
var num = document.getElementById('num')
var spd = document.getElementById('spd')

pic.onmousedown = function () {
    this.src = "pic2.JPG"
}

pic.onmouseup = function () {
    this.src = "pic1.JPG"
}

pic.onabort = function () {
    this.src = "pic1.JPG"
}

var sec = 1;
var click = 0;

var ins = 0;
var insBefore = 0

pic.onclick = function () {
    click++
    ins++
}

setInterval(() => {
    var res = click / sec
    res *= 10

    res *= 1
    res = Math.round(res)
    res /= 1

    num.innerText = res
    sec++;
}, 100)

setInterval(() => {
    ins -= insBefore
    spd.innerText = ins
    insBefore = ins
}, 1000)