
var yourCharacterList = [
   ["assets/images/obi_wan.jpg", "Obi-Wan Kenobi", 150],
   ["assets/images/luke_skywalker.jpg", "Luke Skywalker", 144],
   ["assets/images/darth_sidious.jpg", "Darth Sidious", 113],
   ["assets/images/darth_maul.jpg", "Darth Maul", 119]
];
var enemiesList = [
   ["assets/images/obi_wan_red.jpg", "Obi-Wan Kenobi", 150],
   ["assets/images/luke_skywalker_red.jpg", "Luke Skywalker", 144],
   ["assets/images/darth_sidious_red.jpg", "Darth Sidious", 113],
   ["assets/images/darth_maul_red.jpg", "Darth Maul", 119]
];
var defenderList = [
   ["assets/images/obi_wan_black.jpg", "Obi-Wan Kenobi", 150],
   ["assets/images/luke_skywalker_black.jpg", "Luke Skywalker", 144],
   ["assets/images/darth_sidious_black.jpg", "Darth Sidious", 113]
   ["assets/images/darth_maul_black.jpg", "Darth Maul", 110]
];
var row1_character = "";
var row2_character = [];
var score = [];
var yourCharacter;
var yourCharacterScore;
var yourCharacterAttackPower;
var defender;
var defenderScore;
var defenderAttackPower;
var won = false;
var loss = false;

function generate_attack_power() {

   var powerraw = Math.floor(Math.random() * 50);
   if (powerraw < 25) {
      powerraw = powerraw + 25;
   }
   return powerraw;

}

function generate_score () {

   for (i=0; i < enemiesList.length; i++) {
      scoreraw = Math.floor(Math.random() * 200);
      //console.log("score="+scoreraw)
      if (scoreraw < 100) {
         scoreraw = scoreraw + 100;
      }
      score.push(scoreraw);
      //console.log("score[]="+score[i]);
   }
}

function init() {

   generate_score();
   $(".img1A").attr("src", yourCharacterList[0][0]);   
   $(".img1B").attr("src", yourCharacterList[1][0]);   
   $(".img1C").attr("src", yourCharacterList[2][0]);   
   $(".img1D").attr("src", yourCharacterList[3][0]);   
   $(".img1A").show();
   $("#score1A").show();
   $(".img1B").show();
   $("#score1B").show();
   $(".img1C").show();
   $("#score1C").show();
   $(".img1D").show();
   $("#score1D").show();
   console.log("score[0]="+score[0]);
   $("#score1A").text(score[0]);
   console.log("score[1]="+score[1]);
   $("#score1B").text(score[1]);
   console.log("score[2]="+score[2]);
   $("#score1C").text(score[2]);
   console.log("score[3]="+score[3]);
   $("#score1D").text(score[3]);
   $(".img20").hide();
   $("#score20").hide();
   $(".img21").hide();
   $("#score21").hide();
   $(".img22").hide();
   $("#score22").hide();
   $("#enemiesAvailable").hide();
   $("#fightSection").hide();
   $("#attackBtn").hide();
   $("#defender").hide();
   $("#gameStatus").hide(); 
   $(".img3A").hide();
   $("#score3A").hide();
   $("#restartBtn").hide();
};

function unhideRow2 () {

   $(".img20").show();
   $("#score20").show();
   $(".img21").show();
   $("#score21").show();
   $(".img22").show();
   $("#score22").show();
   $("#enemiesAvailable").show();
   $("#yourCharacter").text("Your Character");

}

function unhideRow3 () {

   $(".img3A").show();
   $("#score3A").show();
   $("#enemiesAvailable").show();
   $("#yourCharacter").text("Your Character");
   $("#fightSection").show();
   $("#attackBtn").show();
   $("#defender").show();

}

init();
// select Your Character
$('.image-row1').click(function(){
   /* alternatively if the additional parent element is not desired  
      the event can be delegated to the document */

   num = $(this).attr("value");
   //console.log("num="+num);
   src = $(this).attr("src");
   //console.log("src="+src);

   numint = parseInt(num);
   console.log("numint="+numint);
   console.log("score[numint]="+numint)
   $("#score1A").text(score[numint]);
   yourCharacter = enemiesList[numint][1];
   console.log("yourCharacter="+yourCharacter);
   yourCharacterScore = score[numint];
   console.log("yourCharacterScore="+yourCharacterScore);
   row1_character = numint;
   
   for (i=0; i < 4; i++) {
	   if (i != numint) {
		   row2_character.push(i);
	   }
   }
   console.log("row2_character="+row2_character)
   $(".img1B").hide();
   $("#score1B").hide();
   $(".img1C").hide();
   $("#score1C").hide();
   $(".img1D").hide();
   $("#score1D").hide();
   $(".img1A").attr("src", src);

   //alert("You clicked row 1- Characters")

   var j = 0;
   for (i=0; i < 4; i++) {
      if (numint != i) {
         $(".img2"+j).attr("src", enemiesList[i][0]);
         $("#score2"+j).text(score[i]);
         console.log("#score2"+j+"=",score[i]);
         j++;
         //console.log("j= img2"+j);
         //console.log("src="+enemiesList[j][0]);
         //console.log("i="+i);
      }
      //else {
      //   console.log("i="+i);
      //}
   }
   unhideRow2();
  
   //alert('clicked element index: '+num1);
});

$('.image-row2').click(function(){

   num = $(this).attr("value");
   //console.log("row2 num="+num);
   src = $(this).attr("src");
   //console.log("row2 src="+src);

   // Change enemy to a defender
   src = src.replace("red","black");   
   //alert("You clicked row 2- Defenders");

   numIntClick = parseInt(num);
   numint = row2_character[numIntClick];
   console.log("numIntClick="+numIntClick);
   console.log("numint="+numint);
   //debugger
   // put 3rd row score here
   console.log("numint="+numint);
   defender = enemiesList[numint][1];
   console.log("defender="+defender)
   $("#score3A").text(score[numint]);
   defenderScore = score[numint];
   console.log("defenderScore="+defenderScore);

   // attack power
   yourCharacterAttackPower = generate_attack_power();
   defenderAttackPower = generate_attack_power();
   console.log("yourCharacterAttackPower="+yourCharacterAttackPower);
   console.log("defenderAttackPower="+defenderAttackPower);

   $(".img22").hide();
   $(".img3A").attr("src", src);

   var j = 0;
   for (i=0; i < row2_character.length; i++) {
      k = row2_character[i];   
      if (numint != k) {
         $(".img2"+j).attr("src", enemiesList[k][0]); // changed i to j
         $("#score2"+j).text(score[k]);
         j++;
         //console.log("row2 not equal j= img2"+k);
         //console.log("row2 not equal src="+enemiesList[k][0]);
         //console.log("row2 not equal i="+k);
      }
      //else {
      //   console.log("row2 equal i="+k);
      //}
   }
   unhideRow3();
  
   // Your attacked Luke Skywalker for 24 damage.
   // Luke Skywalker you back for 5 damage.
   htmlString = "Your attacked Luke Skywalker for 24 damage.<br>Luke Skywalker you back for 5 damage."
   //console.log(htmlString)
   $("#gameStatus").html(htmlString);
   //$("#gameStatus").show(); 

   //alert('clicked element index: '+num1);
});

$('#attack-button').click(function(){

   defenderScore = defenderScore - yourCharacterAttackPower;
   yourCharacterScore = yourCharacterScore - defenderAttackPower;
   powergain = Math.floor(Math.random() * 15);
   yourCharacterScore = yourCharacterScore + powergain;
   console.log("Your Score: "+yourCharacterScore)
   console.log("Oppponent Score: "+defenderScore)
   if (parseInt(yourCharacterScore) < 1) {
      yourCharacterScore = 0;
      //alert("You lose!")
      loss = true;
   }
   else if (parseInt(defenderScore) < 1) {
      defenderScore = 0;
      won = true;
      //alert("You Won!")
   }
   $("#score1A").text(yourCharacterScore);
   $("#score3A").text(defenderScore);
   
   htmlString = "You attacked "+defender+" for "+yourCharacterAttackPower+" damage.<br>";
   htmlString = htmlString+defender+" you back for "+defenderAttackPower+" damage.";
   if (won == true) {
      htmlString = "You won! GAME OVER!" 
      console.log("won: "+htmlString);
      //$(".img3A").hide(); 
      //$("#score3A").hide(); 
      $("#fightSection").hide();
      $("#attackBtn").hide();
      $("#restartBtn").show();
      }
   else if (loss == true) {
      htmlString = "You have been defeated. GAME OVER!" 
      console.log("loss: "+htmlString) 
      $("#fightSection").hide();
      $("#attackBtn").hide();
      $("#restartBtn").show();
   }
   $("#gameStatus").html(htmlString);
   $("#gameStatus").show();


});

$('#restart-button').click(function(){

init();

});

