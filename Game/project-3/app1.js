/**@type {HTMLCanvasElement} */
const canvas=document.getElementById('canvas1');
const ctx=canvas.getContext('2d');
CANVAS_WIDTH=canvas.width=500;
CANVAS_HEIGHT=canvas.height=1000;
const enemiesArray=[];
const numberOfEnenmies=15;
let gameFrame=0;

class Enemy{
constructor(){
this.speed=Math.random()*4+2;
this.enemyImage=new Image();
this.enemyImage.src="../images/enemy4.png";
this.spriteWidth=213;
this.spriteHeight=213;
this.width=this.spriteWidth/2;
this.height=this.spriteHeight/2;
this.x=Math.random()*(canvas.width-this.width);
this.y=Math.random()*(canvas.height-this.height);
this.newX=Math.random()*(canvas.width-this.width);
this.newY=Math.random()*(canvas.height-this.height);
this.frame=0;
this.flapSpeed=Math.floor(Math.random()*5+1);
this.interval=Math.floor(Math.random()*200+50);
//this.angle=0;
//this.angleSpeed=Math.random()*2;
//this.curve=Math.random()*200;
}

update()
{
//this.x-=this.speed;
//this.x+=Math.random()*5-2.5;
//this.x=0;
//this.y=0;
if(gameFrame%this.interval==0)
{
this.newX=Math.random()*(canvas.width-this.width);
this.newY=Math.random()*(canvas.height-this.height);
}
let dx=this.x-this.newX;
let dy=this.y-this.newY;

this.x-=dx/20;
this.y-=dy/20;

this.angle+=this.angleSpeed;
if(this.x+this.width<0)
{
this.x=canvas.width;
}
if(gameFrame%this.flapSpeed==0)
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
enemy1.update();
enemy1.draw();
enemiesArray.forEach(moulik=>{
moulik.update();
moulik.draw();
});
gameFrame++;
requestAnimationFrame(animate);
}
animate();