document.addEventListener('load',function(){
    const canvas=document.getElementById("canvas1");
    const ctx=canvas.getContext('2d');
    canvas.width=500; 
    canvas.height=800;  
     class Game{
    constructor(ctx,width,height){
    this.ctx=ctx;
    this.width=width;
    this.height=height;
    this.enemies =[];
    this.enemyInterval=500;
    this.enemyTimer=0;
    this.enemyTypes=['worm','ghost','spider'];
    }
    update(deltaTime){
    this.enemies=this.enemies.filter(object=>!object.markedforDeletion )
    if(this.enemyTimer>this.enemyInterval)
    {
    this.#addnewEnemy();
    this.enemyTimer=0;
    //console.log(this.enemies);
    }
    else
    {
    this.enemyTimer+=deltaTime;
    }
    this.enemies.forEach(object=>object.update(deltaTime));
    }
    draw()
    {
    this.enemies.forEach(object=>object.draw(this.ctx));
    }
    #addnewEnemy(){
    const randomEnemy=this.enemyTypes[Math.floor(Math.random()*this.enemyTypes.length)];
    if(randomEnemy=='worm')this.enemies.push(new Worm(this));
    else if (randomEnemy=='ghost')this.enemies.push(new Ghost(this));
    else if (randomEnemy=='spider')this.enemies.push(new Spider(this));
    /*this.enemies .sort(function(a,b){
    return a.y-b.y;
    }
    )*/
    };
}
    class Enemy{
    constructor(game){
    this.game=game;
    //console.log(this.game);
    this.markedforDeletion=false;
    this.FrameX=0;
    this.maxFrame=5;
    this.frameTimer=0;
    this.frameInterval=100;
    
    //this.x=this.game.width;
    //this.y=Math.random()*this.game.height;
    //this.width=100;
    //this.height=100;
    }    
    update(deltaTime){
    this.x-=this.vx*deltaTime;
    if(this.x<0-this.width) this.markedforDeletion=true;
    if(this.frameTimer>this.frameInterval)
    {
    if(this.frameTimer<this.maxFrame)this.FrameX++;
    else this.FrameX=0;
    this.frameTimer=0;
    }
    else
    {
    this.frameTimer+=deltaTime;
    }
    }
    draw(ctx)
    {
    ctx.drawImage(this.image,this.FrameX*this.spirtWidth,0,this.spirtWidth,this.spirtHeight,this.x,this.y,this.width,this.height);
    }
    }
    
    class Worm extends Enemy{
    constructor(game){
    super(game);
    this.spirtWidth=229;
    this.spirtHeight=171;
    this.width=this.spirtWidth/2;
    this.height=this.spirtHeight/2;
    this.x=this.game.width;
    this.y=Math.random()*this.game.height;
    this.image=worm;
    this.vx=Math.random()*.1+.1;
    }
    }

    class Ghost extends Enemy{
        constructor(game){
        super(game);
        this.spirtWidth=261;
        this.spirtHeight=209;
        this.width=this.spirtWidth/2;
        this.height=this.spirtHeight/2;
        this.x=this.game.width;
        this.y=Math.random()*this.game.height*.6;
        this.image=ghost;
        this.vx=Math.random()*.2+.1;
        this.angle=0;
        this.curve=Math.random()*3;
        }
        update(deltaTime)
        {
        super.update(deltaTime);
        this.y+=Math.sin(this.angle)*this.curve;
        this.angle+=.04;
        }
        draw(ctx)
        {
        ctx.save();
        ctx.globalAlpha=.7;
        super.draw(ctx);
        ctx.restore();
        }
        }
        class Spider extends Enemy{
            constructor(game){
            super(game);
            this.spirtWidth=310;
            this.spirtHeight=175;
            this.width=this.spirtWidth/2;
            this.height=this.spirtHeight/2;
            this.x=Math.random()*this.game.width;
            this.y=0-this.height;
            this.image=spider;
            this.vx=0;
            this.vy=1;
            this.maxLength=Math.random()*this.game.height;
            }
            update(deltaTime)
            {
            super.update(deltaTime);
            if(this.y<0 -this.height*2) this.markedforDeletion=true;
            this.y+=this.vy*deltaTime;
            if(this.y>this.maxLength) this.vy*=-1;
            }
            draw(ctx)
            {
            ctx.beginPath();
            ctx.moveTo(this.x+this.width/2,0);
            ctx.lineTo(this.x+this.width/2,this.y+10);
            ctx.stroke();
           super.draw(ctx);
            }
            }
    const game=new Game(ctx,canvas.width,canvas.height);
    let lastTime=1;
    function animate(timeStamp)
    {
        ctx.clearRect(0,0,canvas.width,canvas.height);
        const deltaTime=timeStamp-lastTime;
        lastTime=timeStamp;
        game.update(deltaTime);
        game.draw();
        requestAnimationFrame(animate)
    }
   
    animate();  
});