$(document).ready(function(){
    $(".card-1").mouseover(function(){
        $(".xidmetlerimiz-cards").css({"background":"url(../img/DƏMİR-YOLU-DAŞINMASI.jpg) center/cover"})
    })
    $(".card-2").mouseover(function(){
        $(".xidmetlerimiz-cards").css({"background":"url(../img/DƏNİZ-YOLU-DAŞINMASI.jpg) center/cover"})
    })
    $(".card-3").mouseover(function(){
        $(".xidmetlerimiz-cards").css({"background":"url(../img/GÖMRÜK-RƏSMİLƏŞDİRİLMƏSİ-VƏ-BROKER-XİDMƏTİ.jpg) center/cover"})
    })
    $(".card-4").mouseover(function(){
        $(".xidmetlerimiz-cards").css({"background":"url(../img/HAVA-YOLU-DAŞINMASI.png) center/cover"})
    })
    $(".card-5").mouseover(function(){
        $(".xidmetlerimiz-cards").css({"background":"url(../img/QURU-YOL-DAŞINMASI.png) center/cover"})
    })
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 70) {
            $('.navbar-my-bg').css({"background":"rgba(255, 3, 3, 0.823)"});  
            $('.navbar-button > button').css({"background":"#fff","color":"#dd3333"})
		  }
          else{
            $('.navbar-my-bg').css({"background":"transparent"});  
            $('.navbar-button > button').css({"background":"#dd3334","color":"#fff"})
          }

    })
})
