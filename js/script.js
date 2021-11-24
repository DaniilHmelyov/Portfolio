window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.padding = "20px 140px 20px 140px";
    document.getElementById("header").style.background = "rgba(174, 29, 81, 0.7)";
    document.getElementById("header").style.backdropFilter = "blur(8px)";
  } else {
    document.getElementById("header").style.padding = "60px 140px 0px 140px";
    document.getElementById("header").style.background = "none";
    document.getElementById("header").style.backdropFilter = "none";
  }
}

$(document).ready(function(){
  window.scrollTo(0, 0);
});

