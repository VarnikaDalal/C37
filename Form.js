class Form{
    constructor(){
    this.input=createInput("Name:");
    this.button=createButton("Click");
    this.greeting=createElement('h3');

    }

    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }


    display(){
        var title=createElement('h2')
        title.html("Car Racing Game");
        title.position(180,30);

        this.input.position(180,70);

        this.button.position(180,110);

       
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();

            player.name=this.input.value()
            playerCount=playerCount+1;
            player.index=playerCount;
            player.update();
            player.updateCount(playerCount);

            this.greeting.html("Hello " +  player.name );
            this.greeting.position(180,70);
        })
    }
}