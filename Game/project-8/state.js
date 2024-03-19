export const states={
STANDING_LEFT:0,
STANDING_LEFT:1,
}
class State{
constructor(state){
this.state=state;
}
}

export class StandingLeft extends State{
constructor(player)
{
super('STANDING LEFT');
this.player=player;
}
enter()
{
this.player.frameY=6;
this.player.speed=this.player.maxSpeed;
this.player.maxFrame=8;
}
handleInput(input){
if(input==="PRESS right") this.player.setState(states.JUMPING_RIGHT);
else if (this.player.onGround())this.player.setState(states.STANDING_LEFT);
else if (this.player.vy>0)this.player.setState(states.FALLING_LEFT);
}

export 








enter(){
this.player.frameY=0;
}
handleInput(input)
{
if (input==='PRESS left')
}





}

