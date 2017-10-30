"use strict"



$("#btn1").on('click', function(event) {
    console.log("Hello");
    var tempNum = $("#counter").html()
    tempNum = parseInt(tempNum)
    tempNum += 1
    $("#counter").html(tempNum)

});


console.log("Hello World")
