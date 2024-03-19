let playerState="idle";
const dropDown=document.getElementById("animations");
dropDown.addEventListener('change',function(e){
playerState=e.target.value;
});



const canvas=document.getElementById('canvas1');
const ctx=canvas.getContext('2d');
const CANVAS_WIDTH=canvas.width=600;
const CANVAS_HEIGHT=canvas.height=600;
const playerImage= new Image();
playerImage.src='../images/shadow_dog.png';
const spirtWidth=575;
const spirtHeight=523;
let gameFrame=0;
let staggeredFrame=5;
const spiritAnimations=[];
const animationStates=[
 {
    name:'idle',
    frames:7
 },
 {
    name:'jump',
    frames:7
 },
 {
    name:'fall',
    frames:7
 },
 {
    name:'run',
    frames:9
 },
 {
    name:'dizzy',
    frames:11
 },
 {
    name:'sit',
    frames:5
 },
 {
    name:'roll',
    frames:7
 },
 {
    name:'bite',
    frames:7
 },
 {
    name:'ko',
    frames:12
 },
 {
    name:'gethit',
    frames:4
 },
];
animationStates.forEach((state,index)=>{
    let frames={
    loc:[],
    }

    for(let j=0;j<state.frames;j++)
    {
    let positionX=j*spirtWidth;
    let positionY=index*spirtHeight;
    frames.loc.push({x:positionX,y:positionY});
    }
    spiritAnimations[state.name]=frames;
});
console.log(animationStates);

function animate(){
ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
//ctx.drawImage(img,sx,sy,sw,sh,dx,dy,dw,dh);
let position=Math.floor(gameFrame/staggeredFrame)%spiritAnimations[playerState].loc.length;
let frameX=spirtWidth*position;
let frameY=spiritAnimations[playerState].loc[position].y;
ctx.drawImage(playerImage,frameX,frameY,spirtWidth,spirtHeight,0,0,spirtWidth,spirtHeight);
gameFrame++;
requestAnimationFrame(animate);
};
animate();

