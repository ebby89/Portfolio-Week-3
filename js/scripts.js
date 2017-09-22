// Back-End Business Logic
var result = [];

function toPingPong(userInput) {

  if (userInput <= 0) {
    alert('Please enter a positive number.')
    return ""; //alert for 0 or negative number -- returns nothing
  }

  for (i = 1; i <= userInput; i++) {
    if (i % 3 === 0 && i % 5 === 0) { //for divisible by 15 -- display ping-pong
      result.push("ping-pong");
    } else if (i % 5 === 0) { //for divisible by 5 -- display pong
        result.push("pong");
    } else if (i % 3 === 0) { //for divisible by 3 -- display ping
        result.push("ping");
    } else {
        result.push(i); //display the non-divisible numbers
    }
  }

  return result; //return the resulting array of numbers/ping/pong/ping-pongs
}; //END FUNCTION toPingPong


// Front-End Logic
$(document).ready(function(){
  $('#pingPongForm').submit(function(event){
    event.preventDefault();

    var userInput = $('#numberInput').val();
    $('span').text(userInput); //display the number they entered back to them

    var result = toPingPong(userInput);

    result.forEach(function(output) {
      $('ul').append('<li>' + output + '<li>'); //display result of EACH value within the array as a <li> within the <ul>
    });

    $('#output').fadeIn(600); //quick fadeIn of hidden output div
    $('#hide').hide(); //hide the rest of the form/rules when displaying output
  }); //FORM SUBMIT FUNCTION EVENT
}); //DOCUMENT READY FUNCTION
