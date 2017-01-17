    // When the user submits the form,
    //   Check what answer they picked
    //   And tell them if they're correct

    // submit
$(document).ready(function() {
    
    $("#quiz-form").on("submit", function(event) {
        event.preventDefault();
        var $answer = $("#quiz-answer"); 
        var answer = $answer.val();
        console.log(answer);
        if (answer === "4 pairs") {
            $("#result").text("Congratulations! You are an expert on jumping spiders!");
            $("#result").css("color", "white");
        } else {
            $("#result").text("Try again!");
            $("#result").css("color", "black");
        }
        
    });
    
});
        