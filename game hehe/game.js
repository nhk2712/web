var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')

var bg = document.getElementById('bg')
var plane = document.getElementById('plane')
var bullet = document.getElementById('bullet')
var cloud = document.getElementById('cloud')
var castle = document.getElementById('castle')

var move = document.getElementById('move')
var finish = document.getElementById('finish')
var win = document.getElementById('win')

var go = 0;

ctx.fillStyle = "#dddd"
ctx.fillRect(0, 0, 599, 399)

ctx.drawImage(bg, 0, 0)

var plane_x = 100;
var plane_y = 100;
ctx.drawImage(plane, plane_x, plane_y)

//var bullet_y = Math.floor(Math.random() * 26) * 10 + 14
//var bullet_x = 500
//ctx.drawImage(bullet, bullet_x, bullet_y)

var cloud_x = 400;
var cloud_y = 100;
ctx.drawImage(cloud, cloud_x, cloud_y)

document.addEventListener(
    "keydown",
    function (e) {
        if (e.keyCode === 38 && plane_y > 10) {
            ctx.drawImage(bg, 0, 0)
            plane_y -= 10;
            ctx.drawImage(plane, plane_x, plane_y)
            //ctx.drawImage(bullet, bullet_x, bullet_y)
            ctx.drawImage(cloud, cloud_x, cloud_y)
        }
        else if (e.keyCode === 40 && plane_y < 260) {
            ctx.drawImage(bg, 0, 0)
            plane_y += 10;
            ctx.drawImage(plane, plane_x, plane_y)
            ctx.drawImage(cloud, cloud_x, cloud_y)
            //ctx.drawImage(bullet, bullet_x, bullet_y)
        }
        else if (e.keyCode === 37 && plane_x > 60) {
            ctx.drawImage(bg, 0, 0)
            plane_x -= 10;
            ctx.drawImage(plane, plane_x, plane_y)
            ctx.drawImage(cloud, cloud_x, cloud_y)
            //ctx.drawImage(bullet, bullet_x, bullet_y)
        }
        else if (e.keyCode === 39 && plane_x < 140) {
            ctx.drawImage(bg, 0, 0)
            plane_x += 10;
            ctx.drawImage(plane, plane_x, plane_y)
            ctx.drawImage(cloud, cloud_x, cloud_y)
            //ctx.drawImage(bullet, bullet_x, bullet_y)
        }
    }
)

setInterval(function () {
    if (go < 10) {
        cloud_x -= 1;
        ctx.drawImage(bg, 0, 0)
        ctx.drawImage(cloud, cloud_x, cloud_y)
        ctx.drawImage(plane, plane_x, plane_y)
        move.click()
    }

}, 1)

move.onclick = function () {
    if (cloud_x <= plane_x + 82 && cloud_x >= plane_x - 96 && cloud_y > plane_y - 42 && cloud_y < plane_y + 35) {
        location.reload()
        alert("lose")
    }

    if (cloud_x < -96 && go < 10) {
        go++;
        finish.click()
        cloud_x = 500
        cloud_y = plane_y
        ctx.drawImage(cloud, cloud_x, cloud_y)
    }
    else if (cloud_x < -96 && go === 10) {
        finish.click()
        cloud_x = 500
        cloud_y = 50
        ctx.drawImage(cloud, cloud_x, cloud_y)
    }
}

finish.onclick = function () {
    if (go === 10) {
        plane_y = 250
        ctx.drawImage(castle, 437, 85)
        setInterval(function () {
            plane_x++;
            ctx.drawImage(bg, 0, 0)
            ctx.drawImage(castle, 437, 85)
            ctx.drawImage(plane, plane_x, plane_y)
            win.click()
        }, 2)

    }
}

win.onclick = function () {
    if (plane_x === 520) alert("win")
}