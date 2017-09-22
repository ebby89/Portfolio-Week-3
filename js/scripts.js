// Back-End Business Logic
var result = [];

function playPingPong(number){

  if (number<=0) {
    alert("Please enter a positive number.");
    return "";
  }

  for(var i = 1; i <= number; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
      result.push("ping-pong");
    } else if (i % 5 === 0) {
      result.push("pong");
    } else if (i % 3 === 0) {
        result.push("ping");
    } else {
      result.push(i);
    }
  }

  return result;

};

// Front-End User Interface
$(document).ready(function(){
  $("form#pingPong").submit(function(event){
    event.preventDefault();

    var number = $("#numberInput").val()

    $(".resultNumber").text(number);

    var result = playPingPong(number)

    result.forEach(function(item) {
      $("ul").append("<li>"+item+"</li>");
    });

    $("#result").fadeIn(600);
    $("#pingPong").hide();

    var refreshPage = [];

  });
});
