  $(document).ready(function(){
    //Math.floor(Math.random() * (maxNumber - minNumber) + minNumber) returns a random integer number between minNumber and maxNumber both inclusive.
    const minNumber = 19;
    const maxNumber = 120;
    var randomNumber = Math.floor(Math.random() * (maxNumber - minNumber) + minNumber );
    console.log(randomNumber);
    $("#random").html('<h2 class="h2 p-2">' + randomNumber + '</h2>');
    $("button").click(function(){
        $("p").toggle();
    });
  });
    
    
