function appendWork(){
  $("#header-content").load("./assets/html/work.html");
  setTimeout(function(){
    document.querySelector("#work-content").classList.add("displayed");
  }, 100);
}

function appendAbout(){
  $("#header-content").load("./assets/html/about.html");
  setTimeout(function(){
    document.querySelector("#about-content").classList.add("displayed");
  }, 100);
}

function appendProject(el){
  var projectTitle = document.querySelector("#project-title"),
      projectSubtitle = document.querySelector("#project-subtitle"),
      projectDesc = document.querySelector("#project-desc"),
      projectPicsSlide = document.querySelector("#project-pics-slide");
  var imgArray = window[el.dataset.id].imgs;
  projectTitle.innerHTML = window[el.dataset.id].title;
  projectSubtitle.innerHTML = window[el.dataset.id].subTitle;
  projectDesc.innerHTML = window[el.dataset.id].description;
  projectPicsSlide.innerHTML = "";
  document.querySelector('#loading-pic-wrapper').classList.remove("hidden");
  for (var i = 0; i < imgArray.length; i++) {
    var projectImgDiv = document.createElement("div");
    var projectImg = document.createElement("img");
    projectImgDiv.setAttribute("class", "project-pic-div");
    projectImgDiv.style.flex = 100/imgArray.length +"%";
    projectImg.setAttribute("class", "project-pic pic-"+el.dataset.id);
    projectImg.setAttribute("src", "./assets/pics/"+imgArray[i]);
    projectImgDiv.appendChild(projectImg);
    projectPicsSlide.appendChild(projectImgDiv);
  }
  setTimeout(initSlide, 20);
  maxSlides = imgArray.length;
}

function centerProjectImgs(){
  var projectPicsDiv = document.getElementsByClassName("project-pic-div")
      projectPics = document.getElementsByClassName("project-pic");
  for (var i = 0; i < projectPicsDiv.length; i++) {
    var leftOffset = (projectPicsDiv[i].getBoundingClientRect().width - projectPicsWrapper.getBoundingClientRect().width)/2;
      projectPicsDiv[i].style.left = -leftOffset + "px";

  }
}

function initSlide(){
  centerProjectImgs();
  for (var i = 2; i < projectPicsSlide.childNodes.length; i++) {
    projectPicsSlide.childNodes[i].classList.add("hidden");
  }
  var checkIfLoaded =
  setInterval(function(){
    if (projectPics[projectPics.length-1].complete) {
        removeLoading();
        clearInterval(checkIfLoaded);
    }
  }, 200)
  currentSlide = 1;
  displayCurrentSlide();
}

function removeLoading(){
  document.querySelector('#loading-pic-wrapper').classList.add("hidden");
}
