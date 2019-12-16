console.log("Running from Parent.JS")

// Set parent body { overflow-y: hidden; }
// Set iframe height { height: calc(100vh - 140px); }
var heightToMinus = $(".navbar").outerHeight() + $(".play-bar").outerHeight() - 2;
$("#csFrame").css({
    "height": "calc(100vh - " + heightToMinus + "px )"
})
document.getElementById("csFrame").setAttribute("scrolling", "yes")
$("body").css({
    "overflow-y": "hidden"
})
document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById('csFrame').src += '';


});