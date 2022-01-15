var btn = document.getElementsByClassName('button');
var front = document.getElementsByClassName("front");
var back = document.getElementsByClassName('back');
var left = document.getElementsByClassName('left');
var right = document.getElementsByClassName('right');
var top = document.getElementsByClassName('top');
var bottom = document.getElementsByClassName('bottom');

var temp1;
var temp2;
var temp3;

var i;
front[0].style.backgroundColor = "white";
top[0].style.backgroundColor = "orange";
right[0].style.backgroundColor = "blue";
bottom[0].style.backgroundColor = "red";
left[0].style.backgroundColor = "green";
back[0].style.backgroundColor = "yellow";

front[1].style.backgroundColor = "white";
top[1].style.backgroundColor = "orange";
right[1].style.backgroundColor = "blue";
bottom[1].style.backgroundColor = "red";
left[1].style.backgroundColor = "green";
back[1].style.backgroundColor = "yellow";

front[2].style.backgroundColor = "white";
top[2].style.backgroundColor = "orange";
right[2].style.backgroundColor = "blue";
bottom[2].style.backgroundColor = "red";
left[2].style.backgroundColor = "green";
back[2].style.backgroundColor = "yellow";

front[3].style.backgroundColor = "white";
top[3].style.backgroundColor = "orange";
right[3].style.backgroundColor = "blue";
bottom[3].style.backgroundColor = "red";
left[3].style.backgroundColor = "green";
back[3].style.backgroundColor = "yellow";

front[4].style.backgroundColor = "white";
top[4].style.backgroundColor = "orange";
right[4].style.backgroundColor = "blue";
bottom[4].style.backgroundColor = "red";
left[4].style.backgroundColor = "green";
back[4].style.backgroundColor = "yellow";

front[5].style.backgroundColor = "white";
top[5].style.backgroundColor = "orange";
right[5].style.backgroundColor = "blue";
bottom[5].style.backgroundColor = "red";
left[5].style.backgroundColor = "green";
back[5].style.backgroundColor = "yellow";

front[6].style.backgroundColor = "white";
top[6].style.backgroundColor = "orange";
right[6].style.backgroundColor = "blue";
bottom[6].style.backgroundColor = "red";
left[6].style.backgroundColor = "green";
back[6].style.backgroundColor = "yellow";

front[7].style.backgroundColor = "white";
top[7].style.backgroundColor = "orange";
right[7].style.backgroundColor = "blue";
bottom[7].style.backgroundColor = "red";
left[7].style.backgroundColor = "green";
back[7].style.backgroundColor = "yellow";

front[8].style.backgroundColor = "white";
top[8].style.backgroundColor = "orange";
right[8].style.backgroundColor = "blue";
bottom[8].style.backgroundColor = "red";
left[8].style.backgroundColor = "green";
back[8].style.backgroundColor = "yellow";

btn[0].onclick = function () {
    temp1 = front[0].style.backgroundColor;
    temp2 = front[3].style.backgroundColor;
    temp3 = front[6].style.backgroundColor;

    for (i = 0; i < 7; i += 3) {
        front[i].style.backgroundColor = bottom[i].style.backgroundColor;
        bottom[i].style.backgroundColor = back[i].style.backgroundColor;
        back[i].style.backgroundColor = top[i].style.backgroundColor;
    }

    top[0].style.backgroundColor = temp1;
    top[3].style.backgroundColor = temp2;
    top[6].style.backgroundColor = temp3;
}
