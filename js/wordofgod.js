//Function that centers in viewport
jQuery.fn.center = function() {
  this.css("position", "absolute");
  this.css("top", ($(window).height() - this.height()) / 2 + $(window).scrollTop() + "px");
  this.css("left", ($(window).width() - this.width()) / 2 + $(window).scrollLeft() + "px");
  return this;
}

$(".nulla").on('animationend', function() { 
    $(".nulla").removeClass("big").css({"display": "none"});
  });

//Center
$(".nulla").center()

//Zoom in / out
$("html").click(function() {{
	setTimeout(function(){
	$("html").fadeOut(2000, function() {$(this).remove();});
},5000);
}
	var obj = document.createElement("audio");
  obj.src = "img/nulla3.mp3";
setTimeout(function() {
	$(".nulla").addClass("big").css({"display": "initial"});
	obj.play();
  $(".sunburst").fadeIn(2000, function() {$(this).fadeOut(2000);});
}, 2000);

});;

// $("html").click(function(){
//   $('.nulla').show("scale",{}, 5000);
// })
