$(document).ready(function(){
    $(".card-1").mouseover(function(){
        $(".xidmetlerimiz-cards").css({"background":"url(../img/tls-slide-1-img-1.jpg) center/cover"})
    })
    $(".card-2").mouseover(function(){
        $(".xidmetlerimiz-cards").css({"background":"url(../img/tls-slide-1-img-2.jpg) center/cover"})
    })
    $(".card-3").mouseover(function(){
        $(".xidmetlerimiz-cards").css({"background":"url(../img/tls-slide-1-img-3.jpg) center/cover"})
    })
    $(".card-4").mouseover(function(){
        $(".xidmetlerimiz-cards").css({"background":"url(../img/tls-slide-1-img-4.jpg) center/cover"})
    })
    $(".card-5").mouseover(function(){
        $(".xidmetlerimiz-cards").css({"background":"url(../img/tls-slide-1-img-1.jpg) center/cover"})
    })
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 70) {
            $('.navbar-my-bg').css({"background":"#fff"});  
		  }
          else{
            $('.navbar-my-bg').css({"background":"transparent"});  
          }

    })
})