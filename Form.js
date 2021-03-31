class Form {

constructor(){

this.title=createElement('h1')
this.button=createButton("PLAY")


}

hide(){
this.button.hide();
this.title.hide();
}


display(){
if(gameState===0){
background(0)

this.title.html("GAME OF TABLE")
this.title.position(500,50)
this.title.style('color',"#FB7A27")

this.button.position(700,350)

this.button.mousePressed(()=>{
    gameState=1

})
}
}
}