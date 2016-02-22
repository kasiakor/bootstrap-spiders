// When the user submits the form,
    //   Check what answer they picked
    //   And tell them if they're correct

    // submit
    $("#quiz-form").on("submit", function(event) {
        event.preventDefault();
        var $answer = $("#quiz-answer"); 
        var answer = $answer.val();
        console.log(answer);
        if (answer === "4 pairs") {
            $("#result").text("Congratulations! You are expert on jumping spiders!");
            $("#result").css("color", "blue");
        } else {
            $("#result").text("Try again!");
            $("#result").css("color", "red");
        }
        
    });