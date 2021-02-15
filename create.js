$("document").ready(function () {
    $("#create").click(function () {
        $("#container p:last").html("<p>We replaced the text that was here before")
    })


    $("#create-variable").click(function () {
        var newText = $("#container p:last")
        
        $("#container p:first").html(newText)
    })
})