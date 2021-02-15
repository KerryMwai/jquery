$("document").ready(
    function (){
        $("div>p").css("background","green")
        $("div>p.fourth-paragraph").css("border","10px solid maroon")
        $("div>p.fourth-paragraph").css("padding", "10px")
        $("#box + ul").css("border","2px inset blue")
        $("p:first-child").css("border","2px inset blue")
        $("p:last-of-type").css("border","4px inset aqua")
        $("p:contains('John')").css("border", "4px dashed orange")
        
        $("#lastdata").css("border","4px solid purple")
        $("#lastdata").css("padding","4px")
        $("#lastdata p:parent").css("fontSize","30px")
        $("#lastdata p:nth-child(2)").css("color", "aqua")
        $("#lastdata p:nth-child(3)").css("background", "gray")
        
    }
)