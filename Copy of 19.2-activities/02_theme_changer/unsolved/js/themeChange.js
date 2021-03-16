$(".themeChange").on("click", function(){
    if ($(this).hasClass("regular")){
        $("#theme").attr("href", "css/blank.css")
        console.log("works");

    }
})


$(".themeChange").on("click", function(){
   else if ($(this).hasClass("blue")){
        $("#theme").attr("href", "css/blue.css")
        console.log("blue!");

    }
})

$(".themeChange").on("click", function(){
    else if ($(this).hasClass("dark")){
        $("#theme").attr("href", "css/dark.css")
        console.log("dark!");

    }
})