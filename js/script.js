window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.background = "rgba(174, 29, 81, 0.95)";
  } else {
    document.getElementById("header").style.background = "none";
  }
}

$(document).ready(function(){
  window.scrollTo(0, 0);
});


$(document).ready(function(){
  $('.burger-menu').click(function(event){
    $('.burger-menu , .header-menu').toggleClass('active');
    $('body').toggleClass('lock');
  })
})
$('.header-list').click(function(event) {
  $('.burger-menu , .header-menu').removeClass('active');
  $('body').removeClass('lock');
})