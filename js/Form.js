class Form {
  constructor() {
    this.input = createInput("Name");
    this.button = createButton("Enter");
    this.button2 = createButton("Play");
    this.confession = createElement('h4 ');
    this.confession2 = createElement('h3');
  }

  hide(){
    this.title.hide();
    this.button.hide();
    this.input.hide();
  }

  display(){
    this.input.position(displayWidth/2 - 135, 350);
    this.button.position(displayWidth/2 + 53, 350);
    this.button2.hide();
    this.button2.position(displayWidth - 150, displayHeight - 150);
    
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();

      if(this.input.value() === "Vivek" || this.input.value() === "Shweta" && this.button.mousePressed){
        bg = loadImage('images/gb.jpg');
        bg.height = displayHeight;
        bg.width = displayWidth;
        this.button2.show();

        this.button2.mousePressed(()=>{

        video = createVideo("images/InShot.mp4");
        flag=1
        positionFlag=1
        
        if(flag===1){
          video.play();
        }

        if(positionFlag===1){
           video.position(width/2, height/2);
           video.size(displayWidth, displayHeight);
           positionFlag=0;
          }
       })
      } else {
        bg = loadImage('images/Sorry.png');
        this.confession.html("Sorry Once Again " + player.name);
        this.confession.position(displayWidth/2, 535);
      }
    });
  }
}