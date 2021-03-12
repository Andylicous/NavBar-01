$(function() {

    $(".Hamburger-Toggle").on("click", function(){

        if($(".NavBar_item").hasClass("active")){
            $(".NavBar_item").removeClass("active");
        }
        else{
            $(".NavBar_item").addClass("active");

        }
    })


});