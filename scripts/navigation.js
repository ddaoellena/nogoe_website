var headerWrapper = document.querySelector("#header-wrapper");
var headerContent = document.querySelector("#header-content");
var activeProject = "";

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
    setTimeout(setCurrentActiveProject, 100);
  } else {
    headerWrapper.classList.add("expanded");
    setTimeout(function(){
      appendWork();
    }, 100);
    setTimeout(setCurrentActiveProject, 100);
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
