var canvas=new fabric.Canvas("myCanvas");
playerX=10;
playerY=10;
blockimgwidth=30;
blockimgheight=30;
var playerObject="";
var blockimgObject="";
function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
        playerObject=Img;
        playerObject.scaleToWidth(150);
        playerObject.scaleToHeight(140);
        playerObject.set({
            top:playerY,
            left:playerX
        });
        canvas.add(playerObject);
    })
}
function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        blockimgObject=Img;
        blockimgObject.scaleToWidth(blockimgwidth);
        blockimgObject.scaleToHeight(blockimgheight);
        blockimgObject.set({
            top:playerY,
            left:playerX
        });
        canvas.add(blockimgObject);
    })
}
window.addEventListener("keydown", mykeydown);
function mykeydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if(e.shiftKey==true&&keypressed=="66"){
        console.log("B and Shift Pressed Together");
        blockimgwidth=blockimgwidth+10;
        blockimgheight=blockimgheight+10;
        document.getElementById("CurrentWidth").innerHTML=blockimgwidth;
        document.getElementById("CurrentHeight").innerHTML=blockimgheight;
    }

    if(e.shiftKey==true&&keypressed=="83"){
        console.log("S and Shift Pressed Together");
        blockimgwidth=blockimgwidth-10;
        blockimgheight=blockimgheight-10;
        document.getElementById("CurrentWidth").innerHTML=blockimgwidth;
        document.getElementById("CurrentHeight").innerHTML=blockimgheight;
    }
    if(keypressed=="38"){
      up();
      console.log("Up");
    }
    if(keypressed=="39"){
        right();
        console.log("Right");
      }
      if(keypressed=="37"){
        left();
        console.log("Left");
      }
      if(keypressed=="40"){
        down();
        console.log("Down");
      }
      if(keypressed=="87"){
        new_image("wall.jpg");
        console.log("w");
      }
      if(keypressed=="71"){
        new_image("ground.png");
        console.log("g");
      }
      if(keypressed=="76"){
        new_image("light_green.png");
        console.log("l");
      }
      if(keypressed=="84"){
        new_image("trunk.jpg");
        console.log("t");
      }
      if(keypressed=="82"){
        new_image("roof.jpg");
        console.log("r");
      }
      if(keypressed=="89"){
        new_image("yellow_wall.png");
        console.log("y");
      }
      if(keypressed=="68"){
        new_image("dark_green.png");
        console.log("d");
      }
      if(keypressed=="85"){
        new_image("unique.png");
        console.log("u");
      }
      if(keypressed=="67"){
        new_image("cloud.jpg");
        console.log("c");
      }
}

function up(){
  if(playerY>=0){
    playerY=playerY-blockimgheight;
    console.log("Block Image Height ="+blockimgheight);
    console.log("When Up Arrow Is Pressed, X="+playerX+"Y="+playerY);
    canvas.remove(playerObject);
    player_update();
  }
}
function down(){
  if(playerY<=325){
    playerY=playerY+blockimgheight;
    console.log("Block Image Height ="+blockimgheight);
    console.log("When Down Arrow Is Pressed, X="+playerX+"Y="+playerY);
    canvas.remove(playerObject);
    player_update();
  }
}
function left(){
  if(playerX>=-25){
    playerX=playerX-blockimgwidth;
    console.log("Block Image Width ="+blockimgwidth);
    console.log("When Left Arrow Is Pressed, X="+playerX+"Y="+playerY);
    canvas.remove(playerObject);
    player_update();
  }
}
function right(){
  if(playerX<=925){
    playerX=playerX+blockimgwidth;
    console.log("Block Image Width ="+blockimgwidth);
    console.log("When Right Arrow Is Pressed, X="+playerX+"Y="+playerY);
    canvas.remove(playerObject);
    player_update();
  }
}
