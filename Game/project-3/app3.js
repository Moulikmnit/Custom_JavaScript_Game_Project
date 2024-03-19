/**@type {HTMLCanvasElement} */
const canvas=document.getElementById('canvas1');
const ctx=canvas.getContext('2d');
CANVAS_WIDTH=canvas.width=500;
CANVAS_HEIGHT=canvas.height=1000;
const enemiesArray=[];
const numberOfEnenmies=10;
let gameFrame=0;

class Enemy{
constructor(){
//this.speed=Math.random()*4+2;
this.enemyImage=new Image();
this.enemyImage.src="../images/enemy1.png";
this.spriteWidth=293;
this.spriteHeight=155;
this.width=this.spriteWidth/2.5;
this.height=this.spriteHeight/2.5;
this.x=Math.random()*(canvas.width-this.width);
this.y=Math.random()*(canvas.height-this.height);
this.frame=0;
this.flapSpeed=Math.floor(Math.random()*3+1);
//this.angle=0;
//this.angleSpeed=Math.random()*2;
//this.curve=Math.random()*200;
}

update()
{
//this.x-=this.speed;
this.x+=Math.random()*15-7.5;
this.x+=Math.random()*10-5;
//this.x=this.curve*Math.sin(this.angle*Math.PI/180)+(CANVAS_WIDTH/2-this.width/2);
//this.y=this.curve*Math.cos(this.angle*Math.PI/180)+(CANVAS_HEIGHT/2-this.height/2);
//this.angle+=this.angleSpeed;
/*if(this.x+this.width<0)
{
this.x=canvas.width;
}*/
if(gameFrame%this.flapSpeed===0)
{
    this.frame>4 ? this.frame=0:this.frame++;
}
}
draw()
{
ctx.drawImage(this.enemyImage,this.frame*this.spriteWidth,0,this.spriteWidth,this.spriteHeight,this.x,this.y,this.width,this.height);
}
}

for(let i=0;i<numberOfEnenmies;i++)
{
enemiesArray.push(new Enemy());
}
console.log(enemiesArray);

const enemy1=new Enemy();

function animate()
{
ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
enemiesArray.forEach(moulik=>{
moulik.update();
moulik.draw();
});
gameFrame++;
requestAnimationFrame(animate);
}
animate();