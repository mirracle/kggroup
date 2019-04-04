$('.sl').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
     responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
   
  ]
});

$('.sl_1').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
     responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

// Map area




window.onscroll = function showHeader() {
    var header = document.querySelector('#menu');
    if (window.pageYOffset > 250) {
        header.classList.add('header_fixed');
    } else {
        header.classList.remove('header_fixed');
    }
}


$(function () {
    $('a[href^="#"]').on('click', function (event) {
        // отменяем стандартное действие
        event.preventDefault();

        var sc = $(this).attr("href"),
            dn = $(sc).offset().top;
        /*
        * sc - в переменную заносим информацию о том, к какому блоку надо перейти
        * dn - определяем положение блока на странице
        */

        $('html, body').animate({ scrollTop: dn }, 1000);

        /*
        * 1000 скорость перехода в миллисекундах
        */
    });
});

// Map area

   $(document).on('click','#showResult',function(){
        
        $('#mainIframe').contents().find('.floor_close').hide();
        // .css("display","none");
          var numberRoom = document.getElementById("numberFloor");
          $('#mainIframe').contents().find("#SvgjsPath1018").click();
          
             $('#mainIframe').css("display","block");
          console.log("clicked");
        
            switch(numberRoom.value){
                case "1": $('#mainIframe').contents().find("#SvgjsPath1020").click();
               break;
                case "2": $('#mainIframe').contents().find("#SvgjsPath1019").click(); break;
                case "3": $('#mainIframe').contents().find("#SvgjsPath1018").click(); break;
                case "4": $('#mainIframe').contents().find("#SvgjsPath1017").click(); break;
                case "5": $('#mainIframe').contents().find("#SvgjsPath1016").click(); break;
                case "6": $('#mainIframe').contents().find("#SvgjsPath1015").click(); break;
                case "7": $('#mainIframe').contents().find("#SvgjsPath1014").click(); break;
                case "8": $('#mainIframe').contents().find("#SvgjsPath1013").click(); break;
                case "9": $('#mainIframe').contents().find("#SvgjsPath1012").click(); break;
                case "10": $('#mainIframe').contents().find("#SvgjsPath1011").click(); break;
                case "11": $('#mainIframe').contents().find("#SvgjsPath1010").click(); break;
                case "12": $('#mainIframe').contents().find("#SvgjsPath1009").click(); break;
                case "13": $('#mainIframe').contents().find("#SvgjsPath1008").click(); break;
                
            }
            
      });
      
       
    $(document).ready(function(){
        setTimeout(function(){
        $('#mainIframe').contents().find('.floor_close').css("display","none");
         console.log("test click ks");   
        },500);
    });
      
