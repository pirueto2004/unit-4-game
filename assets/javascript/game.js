  $(document).ready(function(){
    function setBackgroundImage(myObject, imageUrl) {
      myObject.css({
                   "background-image": "url(" + imageUrl + ")",
                   "background-position": "center", 
                   });
    }

    var body = $("body");
    var imageUrl = 'assets/images/bg-pic2.jpg';
    setBackgroundImage(body, imageUrl);
    
    var crystalsRow = $("#myRow");
    var imageUrl1 = 'assets/images/sparkling-bg.gif';
    setBackgroundImage(crystalsRow, imageUrl1);

    var targetScore;
    
    var randomCrystal1;
    var randomCrystal2;
    var randomCrystal3;
    var randomCrystal4;
    var crystalNumbers = []; // for array of random crystal values

    var totalScore;
    var wins;
    var losses;
    
    var session_wins;
    var session_losses;

    var myAudio;
    var myAudio1;
    
  //   function sound(src) {
  //     this.sound = document.createElement("audio");
  //     this.sound.src = src;
  //     this.sound.setAttribute("preload", "auto");
  //     this.sound.setAttribute("controls", "none");
  //     this.sound.style.display = "none";
  //     document.body.appendChild(this.sound);
  //     this.play = function(){
  //         this.sound.play();
  //     }
  //     this.stop = function(){
  //         this.sound.pause();
  //     }    
  // }
    function generateRandomNumber(min,max) {
      //Math.floor(Math.random() * (maxNumber - minNumber) + minNumber) returns a random integer number between minNumber and maxNumber both inclusive.
      //The random number shown at the start of the game should be between 19 - 120
      rand = Math.floor(Math.random() * (max - min) + min ); 
      return rand;
    }

    function initializeGame() {
      totalScore = 0;
      wins = 0;
      losses = 0;
      
      randomCrystal1 = 0;
      randomCrystal2 = 0;
      randomCrystal3 = 0;
      randomCrystal4 = 0; 
      
      //Toggle button to show/hide the info paragraphs
      $("#pDiv").click(function(){     
          if($(this).text() == "Click me to hide text") 
          {
            $(this).text("Click me to show text");
            $(".parInfo").toggle();
          }
          else
          {
            $(this).text("Click me to hide text");
            $(".parInfo").toggle();
          };      
      });

      newGame();
            
    }

    function addToScore(val) {
      totalScore += val;
      $('#score').html('<h2 class="h2 p-1">' + totalScore + '</h2>');
    }

   
    function showButtons() {
      //Give options to Play Again or Reset game  
      $('#playAgain').html('<button type="button" class="btn btn-warning btn-sm">' + ' PLAY AGAIN ' + '</button>');
      $('#resetGame').html('<button type="button" class="btn btn-danger btn-sm">' + ' RESET GAME ' + '</button>');
      $('#playAgain').click(function(){
        newGame();
      });
      $('#resetGame').click(function(){
        initializeGame();
      });   
    }

    function newGame() {
      totalScore = 0;
      
      randomCrystal1 = 0;
      randomCrystal2 = 0;
      randomCrystal3 = 0;
      randomCrystal4 = 0; 
      
       targetScore = generateRandomNumber(19,120);
       $("#random").html('<h2 class="h2 p-2">' + targetScore + '</h2>');
       $('#score').html('<h2 class="h2 p-1">' + totalScore + '</h2>');
       $('#wins').text('Wins:  ' + wins);
       $('#losses').text('Losses:  ' + losses);
       $('#message').html('');

    }

    initializeGame();

        myAudio = new Audio('assets/sound/win-sound-2.mp3');
        myAudio1 = new Audio('assets/sound/button-sound.mp3');

        //When the player clicks on a crystal, it will add a specific amount of points to the player's total score
        $('#crystal1').on("click", function(){
          myAudio1.play();
          //Each crystal should have a random hidden value between 1 - 12 
          randomCrystal1 = generateRandomNumber(1,12);
          addToScore(randomCrystal1);
          
        });

        $('#crystal2').on("click", function(){
          myAudio1.play();
          //Each crystal should have a random hidden value between 1 - 12 
          randomCrystal2 = generateRandomNumber(1,12);
          addToScore(randomCrystal2);
         
        });

        $('#crystal3').on("click", function(){
          myAudio1.play();
          //Each crystal should have a random hidden value between 1 - 12 
          randomCrystal3 = generateRandomNumber(1,12);
          addToScore(randomCrystal3);
         
        });

        $('#crystal4').on("click", function(){
          myAudio1.play();
          //Each crystal should have a random hidden value between 1 - 12 
          randomCrystal4 = generateRandomNumber(1,12);
          addToScore(randomCrystal4);
        
        });
    
        $(".crystal").on("click", function() {    
          //if your score matches your goal you win and do the following
          if (totalScore === targetScore) {
            myAudio.play();
            wins++;
            session_wins = wins;
            //Update the score and wins
            $('#score').html('<h2 class="h2 p-1">' + totalScore + '</h2>');  
            $('#wins').text('Wins:  ' + session_wins);
            //Congrats for winning
            $('#message').html('<h3 class="h3 p-1">' + ' CONGRATS, YOU WON!' + '</h3>').css({"background-color": "red", "color": "black"});
            showButtons();
            
          }
          //if your score is greater than your goal you lose and do the following
          else if (totalScore > targetScore) {
            losses++;
            myAudio.play();
            session_losses = losses;
            //Update the score and losses
            $('#score').html('<h2 class="h2 p-1">' + totalScore + '</h2>');      
            $('#losses').text('Losses:  ' + session_losses);
            //Message for losing
            $('#message').html('<h3 class="h3 p-1">' + ' SORRY, YOU LOSE!' + '</h3>').css({"background-color": "red", "color": "white"});
            showButtons();
           
          }
          
        });  
  });
    
    
