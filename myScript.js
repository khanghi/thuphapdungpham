$(document).ready(function(){
    $(".js-login").click(function(){
        $(".modal").addClass("open");
        $(".login").show();
    });
    $(".modal").click(function(){
        $(".login").hide();
        $(".modal").removeClass("open");
    });
    $(".close").click(function(){
        $(".login").hide();
        $(".modal").removeClass("open");
    });
    $(".login").click(function(event){
        event.stopPropagation();
    });     

    $(".js-register").click(function(){
        $(".modal").addClass("open");
        $(".register").show();
    });
    $(".modal").click(function(){
        $(".register").hide();
        $(".modal").removeClass("open");
    });
    $(".close").click(function(){
        $(".register").hide();
        $(".modal").removeClass("open");
    });
    $(".register").click(function(event){
        event.stopPropagation();
    });   
    $('.home-collection-body').slick({
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
    });
    const toTop = document.querySelector(".back-to-top");
    window.addEventListener("scroll", () => {
        if (window.pageYOffset > 200) {
            toTop.classList.add("active");
        } else{
            toTop.classList.remove("active");
        }
    })  
});
