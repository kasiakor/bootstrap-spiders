
$(document).ready(function() {

	$("#fly").click(function() {
		var fly = $("img#fly");
		var a = 500 * Math.random();
		var b = 930 * Math.random();
		fly.css({"top":a +'px', "left":b +'px'});
	});

	var score = 0;
	$("#fly").click(function() {
		if(counter > 0) {
			score++;
			$("#counter > span").html(score);
			
		}
	});

	var counter = 10;
	$("#starter").click(function() {
		var timerInterval = setInterval(function(){
				
			if(counter > 0) {
				counter--;
				$("#timer > span").html(counter);
			}
			else {
				clearInterval(timerInterval);
			}
		}, 1000);
	});
});