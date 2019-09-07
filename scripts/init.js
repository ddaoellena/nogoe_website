var increment = -1;
var carousselContent = document.querySelector("#caroussel-content");
var slideCollapsed = false;

function slideShow(){
}
function slideOneImage(){
  setInterval(function(){
    increment++;
     if (slideCollapsed == true) {clearInterval(this);}
     else {
       carousselContent.style.left = -increment*100 +"%";
       console.log(increment);
     }
     if (increment == 5) {
       increment = 0;
       carousselContent.style.left = increment +"%";
     }
  }, 2500);
}

slideOneImage();

function centerCarouselImages(){
  var imageCarousselWrapper = document.getElementsByClassName("img-caroussel-wrapper"),
      imageCaroussel = document.getElementsByClassName("img-caroussel");;
  for (var i = 0; i < imageCarousselWrapper.length; i++) {
    var topOffset = (imageCaroussel[i].height - carousselContent.getBoundingClientRect().height)/2;
      imageCarousselWrapper[i].style.marginTop = -topOffset + "px";
    console.log(topOffset);
  }
}

window.onresize = function(){
  if (slideCollapsed == false) {
    centerCarouselImages();
  }
  if (slideCollapsed == true) {
    centerProjectImgs();
  }
}

function removeInitLoad(){
  document.querySelector('#init-loading-wrapper').classList.add("hidden");
  setTimeout(function(){
    document.querySelector('#init-loading-wrapper').remove();
  }, 200)
}

function initCarousel(){
  var imageCaroussel = document.getElementsByClassName("img-caroussel");
  var checkIfLoaded =
  setInterval(function(){
    if (imageCaroussel[imageCaroussel.length-1].complete) {
        centerCarouselImages();
        removeInitLoad();
        clearInterval(checkIfLoaded);
    }
  }, 200)
}

window.onload = initCarousel
