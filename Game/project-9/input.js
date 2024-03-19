export class Inputhandler{
constructor()
{
this.key=[];
window.addEventListener('keydown',e=>{
if((e.key==='ArrowDown'||
e.key==='ArrowUp'||
e.key==='ArrowLeft'||
e.key==='ArrowRight'||
e.key==='Enter') && this.key.indexOf(e.key)===-1){
this.key.push(e.key);
}
console.log(e.key,this,keys);
});
window.addEventListener('keydown',e=>{
    if((e.key==='ArrowDown'||
    e.key==='ArrowUp'||
    e.key==='ArrowLeft'||
    e.key==='ArrowRight'||
    e.key==='Enter') && this.key.indexOf(e.key)===-1){
    this.key.push(e.key);
    }
    console.log(e.key,this,keys);
    });
    
}
}