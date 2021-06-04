$(document).ready(function(){
    $(".item-active").css("background-color", "#519DD9")
    $(".link-active").css("color", "#FFFFFF")

    $(".nav-item").on("click", function(){
        $(".nav-item").css("background-color", "")
        $(".nav-link").css("color", "#344E5C")
        $(this).css("background-color", "#519DD9")
        $(this).find(".nav-link").css("color", "#FFFFFF")
    })
})