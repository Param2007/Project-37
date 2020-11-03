class Form {

    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Play');
      this.greeting = createElement('h2');
      this.title = createElement('h2');
      this.reset = createButton('Reset');
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
      this.title.hide();
      // this.reset.hide();
    }
  
    display(){
      this.title.html("Multiplayer Hurdle Game");
      this.title.position(windowWidth/2,0);
      this.reset.position(windowWidth/8*6,windowHeight/2);
      this.input.position(windowWidth/2, windowHeight/2);
      this.button.position(windowWidth/8*5, windowHeight/8*5);
      this.button.mousePressed(()=>{
          this.input.hide();
          this.button.hide();
          player.name = this.input.value();
          playerCount+=1;
          player.index = playerCount;
          player.update();
          player.updateCount(playerCount);
          this.greeting.html("Hello " + player.name)
          this.greeting.position(displayWidth/2 - 70, displayHeight/4);
        });
      this.reset.mousePressed(()=>{
        player.updateCount(0);
        game.update(0);
      });
  
    }
  }
  