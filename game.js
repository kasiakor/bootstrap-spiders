
$(document).ready(function() {	

	isPlayClicked = "no";

	$("#fly").click(function() {
		if(isPlayClicked == "yes") {
			var fly = $("img#fly");
			var a = 90 * Math.random();
			var b = 90 * Math.random();
			fly.css({"top":a +"%", "left":b +"%"});
		}
		else if (isPlayClicked == "no") {
			alert("Click 'Play' button to start the game");
		}
	});

	var score = 0;
	$("#fly").click(function() {
		if(counter > 0) {
			score++;
			$("#counter > span").html(score);
			
		}
	});

	var counter;
	$("#starter").click(function() {
		isPlayClicked = "yes"; 
		if(typeof timerInterval !== "undefined") {
			clearInterval(timerInterval);
		};

		counter = 10;
		$("#timer > span").html(counter);
		score = 0;
		$("#counter > span").html(score);

		timerInterval = setInterval(function(){	
			if(counter > 0) {
				counter--;
				$("#timer > span").html(counter);
			}
			else {
				
				isPlayClicked = "no";
				clearInterval(timerInterval);
               
				if(localStorage.getItem("highscore") == null) {
					highscore = localStorage.setItem("highscore", 0);
				}
				else {
					highscore = localStorage.getItem("highscore");
				}
           

				if(highscore !== null){
					
				   	if (score > parseInt(localStorage.getItem("highscore"))) {
					   	score === highscore;
					    localStorage.setItem("highscore", score );
					    alert("The game is over!\nYou are the best player with score: " + score);
					}

					else {
				      	alert("The game is over!\nYour score:  " + score);
					}

					
				}		
			}
		}, 1000);
         
	});
       
});