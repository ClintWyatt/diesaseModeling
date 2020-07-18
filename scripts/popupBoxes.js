function showPopup(field) {
  resetAllPopups();

  document.getElementById(field + "-popup").style.opacity = "100%";
  document.getElementById(field + "-popup").style.zIndex = "3";
  document.getElementsByName(field)[0].style.backgroundColor = 'white';
}

function resetAllPopups() {
  document.getElementById("diseaseName-popup").style.opacity = "0%";
  document.getElementById("diseaseName-popup").style.zIndex = "1";
  document.getElementById("infRate-popup").style.opacity = "0%";
  document.getElementById("infRate-popup").style.zIndex = "1";
  document.getElementById("threshold-popup").style.opacity = "0%";
  document.getElementById("threshold-popup").style.zIndex = "1";
  document.getElementById("numDays-popup").style.opacity = "0%";
  document.getElementById("numDays-popup").style.zIndex = "1";
}
