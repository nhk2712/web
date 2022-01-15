var block = document.getElementById('block');

mouseDown = false
var cX, cY
var posX=0, posY=0
block.onmousedown = function(e){
    console.log(e)
    mouseDown=true
    console.warn({
        "x":posX,
        "y":posY,
        "posx":block.style.left,
        "posy":block.style.top
    })
    block.style.left = posX.toString()+"px"
    block.style.top = posY.toString()+"px"
    cX = e.clientX
    cY=e.clientY
}

block.onmouseup = function(e){
    mouseDown=false
    block.style.left = posX.toString()+"px"
    block.style.top = posY.toString()+"px"
}

block.onmousemove = function(){
    block.style.left = posX.toString()+"px"
    block.style.top = posY.toString()+"px"
}

document.onmousemove = function(e){
    if (!mouseDown) return
    console.log(e)
    block.style.left = posX.toString()+"px"
    block.style.top = posY.toString()+"px"
    posX = e.clientX - cX
    posY = e.clientY - cY
    console.warn({
        "x":posX,
        "y":posY,
        "posx":block.style.left,
        "posy":block.style.top
    })
    block.style.left = posX.toString()+"px"
    block.style.top = posY.toString()+"px"
}

document.onmouseup = function(){
    mouseDown = false
    block.style.left = posX.toString()+"px"
    block.style.top = posY.toString()+"px"
}