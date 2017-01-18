
$(document).ready(function() {

	$("#fly").click(function() {
		var fly = $("img#fly");
		var a = 90 * Math.random();
		var b = 90 * Math.random();
		fly.css({"top":a +"%", "left":b +"%"});
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
				clearInterval(timerInterval);
			}
		}, 1000);
	});

});