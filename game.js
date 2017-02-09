
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
			alert("Click Play button to start the game");
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
				alert("The game is over");
				isPlayClicked = "no";
				clearInterval(timerInterval);
			}
		}, 1000);
	});

});