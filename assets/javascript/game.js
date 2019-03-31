  $(document).ready(function(){
   
    var randomNumber;
    
    var randomCrystal1;
    var randomCrystal2;
    var randomCrystal3;
    var randomCrystal4;
    var crystalNumbers = []; // for array of random crystal values

    var totalScore;
    var wins;
    var losses;
    var isMatched;

   
  
    
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
      isMatched = false;
      randomCrystal1 = 0;
      randomCrystal2 = 0;
      randomCrystal3 = 0;
      randomCrystal4 = 0; 
      $("#pDiv").click(function(){
        $(".parInfo").toggle();
      });
      
    }

    
    
    function startGame() {
       randomNumber = generateRandomNumber(19,120);
       $("#random").html('<h2 class="h2 p-2">' + randomNumber + '</h2>');
        //When the player clicks on a crystal, it will add a specific amount of points to the player's total score
        $('#crystal1').on("click", function(){
          //Each crystal should have a random hidden value between 1 - 12 
          randomCrystal1 = generateRandomNumber(1,12);
          totalScore += randomCrystal1;
          $('#score').html('<h3 class="h3 p-1">' + totalScore + '</h3>');
          // crystalNumbers.push(randomCrystal1);
        });

        $('#crystal2').on("click", function(){
          //Each crystal should have a random hidden value between 1 - 12 
          randomCrystal2 = generateRandomNumber(1,12);
          totalScore += randomCrystal2;
          $('#score').html('<h3 class="h3 p-1">' + totalScore + '</h3>');
          // crystalNumbers.push(randomCrystal2);
        });

        $('#crystal3').on("click", function(){
          //Each crystal should have a random hidden value between 1 - 12 
          randomCrystal3 = generateRandomNumber(1,12);
          totalScore += randomCrystal3;
          $('#score').html('<h3 class="h3 p-1">' + totalScore + '</h3>');
          // crystalNumbers.push(randomCrystal3);
        });

        $('#crystal4').on("click", function(){
          //Each crystal should have a random hidden value between 1 - 12 
          randomCrystal4 = generateRandomNumber(1,12);
          totalScore += randomCrystal4;
          $('#score').html('<h3 class="h3 p-1">' + totalScore + '</h3>');
          // crystalNumbers.push(randomCrystal4);
        });
    
        $(".crystal").on("click", function() {
          if (totalScore === randomNumber) {
            isMatched = true;
            wins++;
            $('#score').html('<h3 class="h3 p-1">' + totalScore + '</h3>');
            
            $('#wins').text('Wins:  ' + wins);
            setTimeout(function() {
              $('#message').html('<h3 class="h3 p-1">' + ' YOU ARE A GENIUS!' + '</h3>').css("background-color", "#7fffd4");
            }, 200);
            
          }
          else if (totalScore > randomNumber) {
            losses++;
            $('#score').html('<h3 class="h3 p-1">' + totalScore + '</h3>');
            
            $('#losses').text('Losses:  ' + losses);
            setTimeout(function() {
              $('#message').html('<h3 class="h3 p-1">' + ' YOU ARE A LOSER!' + '</h3>').css({"background-color": "red", "color": "white"});
            }, 200);
            
          }
          
        });
    
    }
     
    initializeGame();
    startGame();
    
    
  });
    
    
