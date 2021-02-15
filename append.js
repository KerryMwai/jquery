$("document").ready(function () {
    $("#append").click(function () {
        $("#container p:first").append("Hello welcome back this an append");
    })


    $("#prepend").click(function () {
        $("#container p:last").prepend("Hello welcome back this an append");
    })

    $("#main p:first").wrap("<div class='colorBox'>")

    $("#main p:last").empty()

    $("#replaceAll").click(function () {
        $("<div>This has replaced all</div>").replaceAll("#main");
    })

    $("#replaceWith").click(function () {
        $("#main").replaceWith("<div>The text was replaced with</div>");
    })

    $("#add").click(function () {
        $("#classAddition p:first").addClass("color")
    })


    $("#remove").click(function () {
        $("#classAddition p:first").removeClass("color")
    })


    $("#toggle").click(function () {
        $("#classAddition p:first").toggleClass("color")
    })


    $("#increase").click(function () {
        $("#classAddition p:first").css("fontSize", "+=1px");
    })


    $("#decrease").click(function () {
        $("#classAddition p:first").css("fontSize", "-=1px");
    })
})