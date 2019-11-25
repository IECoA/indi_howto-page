/*
$(window).scroll(function() {
  $('video').each(function(){
     if ($(this).isInViewport({ tolerance: 10 })) {
       $(this)[0].play();
     } else {
         $(this)[0].pause();
     }
  })
});
*/

/*Autoplay video JQuery when video is in center of my screen*/
$(window).scroll(function(e)
  {
    var offsetRange = $(window).height() / 3,
        offsetTop = $(window).scrollTop() + offsetRange + $("header").outerHeight(true),
        offsetBottom = offsetTop + offsetRange;

    $("video").each(function () {
      var y1 = $(this).offset().top;
      var y2 = offsetTop;
      if (y1 + $(this).outerHeight(true) < y2 || y1 > offsetBottom) {
        this.pause();
      } else {
        this.play();
      }
    });
});
