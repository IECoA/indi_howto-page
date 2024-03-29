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
        offsetTop = $(window).scrollTop() + offsetRange,
        offsetTopHeader = $(window).scrollTop() + offsetRange + $("header").outerHeight(true),
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

/* Accordion */
var acc = document.getElementsByClassName("l-accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

// Smooth Scroll
// Select all links with hashes
$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) {
            return false;
          } else {
            $target.attr('tabindex','-1');
            $target.focus();
          };
        });
      }
    }
  });

// Video Views Counter
var v = document.getElementsByTagName("video")[0];
v.addEventListener("ended", function() {
    console.log ('Viewed');
}, true);

// Progress Bar 2
/*
player       = document.getElementById('video-element');
progressBar  = document.getElementById('progress-bar');

player.addEventListener('timeupdate', updateProgressBar, false);

progressBar.addEventListener("click", seek);

function seek(e) {
    var percent = e.offsetX / this.offsetWidth;
    player.currentTime = percent * player.duration;
    e.target.value = Math.floor(percent / 100);
    e.target.innerHTML = progressBar.value + '% played';
}

function updateProgressBar() {
  var percentage = Math.floor((100 / player.duration) * player.currentTime);
  progressBar.value = percentage;
  progressBar.innerHTML = percentage + '% played';
}

function resetPlayer() {
  progressBar.value = 0;
  player.currentTime = 0;
  changeButtonType(btnPlayPause, 'play');
}*/
