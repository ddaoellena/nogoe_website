var increment = 0;
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
