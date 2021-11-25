$(document).ready(function(){
  $(".category").hover(function(){
    var desc = $(this).find(".description")
    desc.fadeIn();
    desc.animate({top: '650px'});
  }, function() {
    var desc = $(this).find(".description")
    desc.animate({top: '900px'});
  });
});

$(document).ready(function(){
  $(".category").hover(function(){
    var desc = $(this).find(".subtext")
    desc.fadeIn();
    desc.animate({top: '550px'});
  }, function() {
    var desc = $(this).find(".subtext")
    desc.animate({top: '700px'});
  });
});

const container = document.querySelector(".main");
console.log(container)

document.addEventListener("wheel", event => {
  event.preventDefault();  
  const container = document.querySelector(".main");
  container.scrollLeft += event.deltaY;
});
