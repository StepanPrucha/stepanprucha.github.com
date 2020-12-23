function thanks() {
  var thx = document.getElementById("thanks");
  var body = document.getElementById("body")
  if (thx.style.display === "flex") {
    thx.style.display = null;
    body.style.height = null;
    body.style.overflow = null;
  } else {
    thx.style.display = "flex";
    body.style.height = "100%";
    body.style.overflow = "hidden";
  }
}

$('a[href^="#"]').click(function(e){
  e.preventDefault();
  var target = $($(this).attr('href'));
  if(target.length){
    var scrollTo = target.offset().top - 0;
    $('body, html').animate({scrollTop: scrollTo+'vh'}, 1000);
  }
});