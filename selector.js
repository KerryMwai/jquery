$("document").ready(function(){
    // $("h1:last").css("border", "2px solid red");
    // $(".second").css("border", "2px solid purple");

    // var newText = $("<p>");
    // newText.append("<h1>I just replaced the text in here</h1>");

    // $("#textBox").html(newText);

    // $("#textBox").on("click", mouseClicked);
    // $("#textBox").on("mouseleave", mouseLieaves);

    // function mouseClicked() {
    //     $("#textBox").html("<h1>You clicked the content</h1>");
    // }
    // function mouseLieaves() {
    //     $("#textBox").html("<h1>You entered the mouse into the area</h1>");
    // }

    // selectors

    $("#show").on("click", function () {
        $("#textBox").show();
    });

    $("#hide").on("click", function () {
        $("#textBox").hide();
    });

    $(".textCopy").hover(highLightText);

    function highLightText() {
        $(this).toggleClass("highlight");
    }

    $("#fade-in").on("click", function () {
        $("#textBox").fadeIn(3000, function () {
            alert("I am done Fading In");
        });
    });

    $("#fade-out").on("click", function () {
        $("#textBox").fadeOut("fast", function () {
            alert("I am done Fading Out");
        });
    });

    $("#slide-up").click(function () { 
        $("#textBox").slideUp("2000", "linear");
    });


    $("#slide-down").click(function () { 
        $("#textBox").slideDown("2000", "linear");
    });


    $("#slideToggle").click(function () { 
        $("#textBox").slideToggle("2000", function () {
            alert("Done");
        });
    });

    $("#toggleMe").click(function () { 
        $("#textBox").toggle(4000,"swing");
    });

    $("#grow").click(function () {
        $("#textBox3").animate({ width: "500px" }, 1000);
    });


    $("#move").click(function () {
        $("#textBox3").animate({ marginLeft: "500px" }, 2000);
    });


    $("#bigger").click(function () {
        $("#textBox3").animate({ fontSize: "40px" }, 3000);
    });


    $("#many").click(function () {
        $("#textBox3").animate({ fontSize: "40px", width:"600px", marginLeft:"100px", marginTop:"20px" }, 3000);
    });

    // filters

    $("p").css("border", "1px dotted red");
    $("#headerTop").css("border", "3px dashed blue");
    $(".greenborder").css("border", "4px solid green");

    $("#container").css("border","4px inset purple")

    $("#container p:first").css("padding","5px")
    $("#container p:last").css("padding","10px")
    $("#container p:even").css("background","yellow")
    $("#container p:odd").css("background","gray")
    $("#container p:odd").css("padding","12px")
    $("#container p:last").css("marginTop","30px")

});