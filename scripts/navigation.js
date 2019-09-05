var headerWrapper = document.querySelector("#header-wrapper");
var headerContent = document.querySelector("#header-content");
var activeProject = "";
var welcomeWrapper = document.querySelector("#welcome-wrapper");

function enterWebsite(){
  document.querySelector("#enter-wrapper").classList.add("hidden");
  for (var i = 0; i < document.getElementsByClassName("marquee-left").length; i++) {
    document.getElementsByClassName("marquee-left")[i].classList.add("remove-left");
  }
  for (var i = 0; i < document.getElementsByClassName("marquee-right").length; i++) {
    document.getElementsByClassName("marquee-right")[i].classList.add("remove-right");
  }
  setTimeout(function(){
    welcomeWrapper.remove();
  }, 1000);
}

function enterMouseOver(){
  document.querySelector("#enter-content").classList.add("on-hover");
}

function enterMouseLeave(){
  document.querySelector("#enter-content").classList.remove("on-hover");
}

function toggleWork(){
  if (headerWrapper.classList.contains("expanded") == true) {
    headerWrapper.classList.remove("expanded");
    document.querySelector("#work-content").classList.remove("displayed");
    setTimeout(function(){
      document.querySelector("#work-content").classList.add("hidden");
      headerContent.innerHTML = "";}, 200);
  } else if (headerWrapper.classList.contains("full-expanded") == true) {
    headerWrapper.classList.remove("full-expanded");
    headerWrapper.classList.add("expanded");
    appendWork();
    setTimeout(setCurrentActiveProject, 200);
  } else {
    headerWrapper.classList.add("expanded");
    setTimeout(function(){
      appendWork();
    }, 100);
    setTimeout(setCurrentActiveProject, 200);
  }
}

function setCurrentActiveProject(){
  if (activeProject.length > 0) {
    var currentProjectText = document.querySelector("#text-"+activeProject);
    console.log(currentProjectText);
    currentProjectText.classList.add("active");
  }
}

function toggleAbout(){
  if (headerWrapper.classList.contains("full-expanded") == true) {
    headerWrapper.classList.remove("full-expanded");
    document.querySelector("#about-content").classList.remove("displayed");
    setTimeout(function(){  headerContent.innerHTML = "";}, 200)
  } else if (headerWrapper.classList.contains("expanded") == true) {
    headerWrapper.classList.remove("expanded");
    headerWrapper.classList.add("full-expanded");
    appendAbout();
  } else {
    headerWrapper.classList.add("full-expanded");
    setTimeout(function(){
      appendAbout();
    }, 100);
  }
}

function openProject(el){
  headerWrapper.classList.remove("expanded");
  if (slideCollapsed == false) {
    document.querySelector("#caroussel-content").remove();
    document.querySelector("#project-content-wrapper").classList.add("displayed");
    slideCollapsed = true;
  }
  document.querySelector("#work-content").classList.remove("displayed");
  setTimeout(function(){
    document.querySelector("#work-content").classList.add("hidden");
    headerContent.innerHTML = "";}, 200);
  activeProject = window[el.dataset.id].toString;
  setActiveProject(el);
  appendProject(el);
}

function setActiveProject(el){
  var workTexts = document.getElementsByClassName("work-text");
  for (var i = 0; i < workTexts.length; i++) {
    workTexts[i].classList.remove("active");
  }
  el.classList.add("active");
}

function copyMail(){
  var copyText = document.getElementById("to-copy");
  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/
  /* Copy the text inside the text field */
  document.execCommand("copy");
  var copiedText = document.getElementById("copied-text");
  copiedText.style.display = "block";
  setTimeout(function(){
    copiedText.classList.add("displayed");
  }, 100);
  setTimeout(function(){
    copiedText.classList.remove("displayed");
  }, 1000);
  setTimeout(function(){
    copiedText.style.display = "none";
  }, 1500);
}
