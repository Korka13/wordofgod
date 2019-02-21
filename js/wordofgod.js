
$(".nulla").on('animationend', function() { 
    $(".nulla").removeClass("big").css({"display": "none"});
  });

  $("html").one("click", function() {{
    setTimeout(function(){
    $("body").fadeOut(2000, function() {$(this).remove();});
  },5000);
  }
    var obj = document.createElement("audio");
    obj.src = "media/nulla3.mp3";
  setTimeout(function() {
    $(".nulla").addClass("big").css({"display": "initial"});
    obj.play();
    $(".sunburst").fadeIn(1500, function(){$(this).fadeOut(1500)});
  }, 2000);  
  });