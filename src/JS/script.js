$('.slider2').slick({
    slidesToShow: 4,
    slidesToScroll: 1
    
  });

  $('.img_sl1').click(function(){
    var vm=this;
    $('#img_sl').fadeOut(200, function(){
      $(this).attr("src", $(vm).attr("src")).fadeIn(1000);
    });
    return false;
  });
  
  
  $('.img_sl2').click(function(){
    var vm=this;
    $('#img_sla').fadeOut(200, function(){
      $(this).attr("src", $(vm).attr("src")).fadeIn(1000);
    });
    return false;
  });
  
  $('.slider1').slick();
  
  
  function myFunction() {
    document.getElementById("demo").innerHTML = "Surfing is a surface water pastime in which the wave rider, referred to as a surfer, rides on the forward part, or face, of a moving wave, which usually carries the surfer towards the shore. Waves suitable for surfing are primarily found in the ocean, but can also be found in lakes or rivers in the form of a standing wave or tidal bore. However, surfers can also utilize artificial.";
  
  }
  
  function myFunction1() {
    document.getElementById("demo").innerHTML = "The term surfing usually refers to the act of riding a wave using a board, regardless of the stance. There are several types of boards. The native peoples of the Pacific, for instance, surfed waves on alaia, paipo, and other such craft, and did so on their belly and knees. The modern-day definition of surfing, however, most often refers to a surfer riding a wave standing on a surfboard.";
  }
  
  function myFunction2() {
    document.getElementById("demo").innerHTML = "Three major subdivisions within stand-up surfing are stand-up paddling, long boarding and short boarding with several major differences including the board design and length, the riding style, and the kind of wave that is ridden.The modern-day definition of surfing, however, most often refers to a surfer riding a wave standing on refers to a surfer often refers a surfboard";
  }
  
  function myFunction3() {
    document.getElementById("demo1").innerHTML = "Surfing is a surface water pastime in which the wave rider, referred to as a surfer, rides on the forward part, or face, of a moving wave, which usually carries the surfer towards the shore. Waves suitable for surfing are primarily found in the ocean, but can also be found in lakes or rivers in the form of a standing wave or tidal bore. However, surfers can also utilize artificial.";
  
  }
  
  function myFunction4() {
    document.getElementById("demo1").innerHTML = "The term surfing usually refers to the act of riding a wave using a board, regardless of the stance. There are several types of boards. The native peoples of the Pacific, for instance, surfed waves on alaia, paipo, and other such craft, and did so on their belly and knees. The modern-day definition of surfing, however, most often refers to a surfer riding a wave standing on a surfboard.";
  }
  
  function myFunction5() {
    document.getElementById("demo1").innerHTML = "Three major subdivisions within stand-up surfing are stand-up paddling, long boarding and short boarding with several major differences including the board design and length, the riding style, and the kind of wave that is ridden.The modern-day definition of surfing, however, most often refers to a surfer riding a wave standing on refers to a surfer often refers a surfboard";
  }
  

  