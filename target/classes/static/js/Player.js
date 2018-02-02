var ctx;
var parent;
var canvas;
var player;
var image;
function Player(id){
    this.id = id;
    this.x = 512;
    this.y = 512;
    this.delta = .8;

}

Player.prototype.setX = function(x){
    this.x = x;
}

Player.prototype.setY = function(y){
    this.y = y;
}

Player.prototype.getId = function(){
    return this.id;
}

Player.prototype.rotatef = function(){
    ctx.clearRect(0,0,canvas.height,canvas.width);
    ctx.save();
    ctx.translate(this.x,this.y); // move to center of canvas
    ctx.rotate((Math.PI/2) *this.delta); // rotate
    //ctx.translate(this.x,this.y);
    ctx.drawImage(image,-((image.width/2 *.25)),-(image.height/2 *.25),image.width*.25,image.height*.25); // translate back to origin
    ctx.restore();

}

Player.prototype.shift = function(){
    ctx.clearRect(0,0,canvas.height,canvas.width);
    ctx.drawImage(image,this.x,this.y,image.width*.25,image.height*.25); // translate back to origin
}

Player.prototype.clear = function(){
    ctx.clearRect(0,0,canvas.height,canvas.width);
}
Player.prototype.fill = function(){
    ctx.fillStyle="red";
    ctx.fillRect(0,0,canvas.height,canvas.width);
}
$(function () {
    parent = document.getElementById("main");
    canvas = document.createElement("canvas");
    ctx = canvas.getContext("2d");
    canvas.width = 1024;
    canvas.height = 1024;
    parent.appendChild(canvas);
    image = new Image();
    image.src = "/images/bender.jpg";

    player = new Player('grant');
    //player.draw();
    /*setTimeout(player.rotate(), 1000);
    ctx.clearRect(0,0,canvas.height,canvas.width);
    setTimeout(player.rotate(), 1000);
    ctx.clearRect(0,0,canvas.height,canvas.width);
    setTimeout(player.rotate(), 1000);
    ctx.clearRect(0,0,canvas.height,canvas.width);
    setTimeout(player.rotate(), 1000);
    ctx.clearRect(0,0,canvas.height,canvas.width);
    setTimeout(player.rotate(), 1000);*/
    //bender = new Image();
    //bender.src = "/images/bender.jpg";
});