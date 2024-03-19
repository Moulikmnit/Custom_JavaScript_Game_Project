const canvas=document.getElementById('canvas1');
const ctx=canvas.getContext('2d');
let canvasPostion=canvas.getBoundingClientRect();
canvas.width=500;
canvas.height=700;
const explosions=[];

class Explosion{
    constructor(x,y){
    this.spiriteWidth=200;
    this.spiriteHeight=179;
    this.width=this.spiriteWidth/2;
    this.height=this.spiriteHeight/2;
    this.x=x-this.width/2;
    this.y=y-this.height/2;
    this.image=new Image();
    this.image.src="../images/boom.png"
    this.frame=0;
    this.timer=0;
    this.sound=new Audio();
    this.sound.src="C:/Users/user/OneDrive/Desktop/game images/Ice attack 2.wav"
    }
    update()
    {
    if(this.frame===0)
    {
    this.sound.play();
    }
    this.timer++;
    if(this.timer%5===0)
    {
    this.frame++;
    };
    }
    draw()
    {
    ctx.drawImage(this.image,this.frame*this.spiriteWidth,0,this.spiriteWidth,this.spiriteHeight,this.x,this.y,this.width,this.height);
    }
}



window.addEventListener('click',function(e)
{
//ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
ctx.fillStyle="white";
let postionX=e.x-canvasPostion.left;
let postionY=e.y-canvasPostion.top;
explosions.push(new Explosion(postionX,postionY));
}
)

function animate()
{
for(let i=0;i<explosions.length;i++)
{
explosions[i].update();
explosions[i].draw();
if(explosions[i].frame>5)
{
explosions.splice(i,1);
i--;
}
}
requestAnimationFrame(animate);
}
animate();