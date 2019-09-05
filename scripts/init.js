var increment = 0;
function slideShow(){
}
function slideOneImage(){
  var carousselContent = document.querySelector("#caroussel-content");

  setInterval(function(){
    increment++;
     if (increment >= 6) {clearInterval(this);}
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
