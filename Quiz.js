class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    question.hide();
    background(255,255,0);
    fill(0,0,0);
    stroke(0,128,0);
    textSize(30);
    textFont(" Traditional serif");
    text("Result of the Quiz",350, 50);
    text("----------------------------",310, 65);
    Contestant.getPlayerInfo();
    if(allContestants !== undefined){
      var display_Answers = 230;
      fill(0,0,0);
      stroke(255,69,0)
      textSize(28);
      textFont("Traditional serif");
      text("*NOTE: Contestant who answered correct are highlighted in red color!",20,230);

      for(var plr in allContestants){
        var correctAns = "2";
        if (correctAns === allContestants[plr].answer) 
          fill("red")
        else
          fill("black")
   
    display_Answers+=30;
    textSize(20);
    text(allContestants[plr].name + ": " + allContestants[plr].answer, 250,display_Answers)
  }

}
  }

  }
