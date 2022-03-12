function resetRem() {
  let deviceWidth = document.documentElement.clientWidth || window.innerWidth;
  if(deviceWidth > 750) {
    deviceWidth = 750;
  }
  if(deviceWidth < 320) {
    deviceWidth = 320;
  }
  document.documentElement.style.fontSize = (deviceWidth / 100) + "px";
}

resetRem();

window.onresize = function() {
  resetRem();
}

document.querySelector("body").style.fontSize = 16 + "px";
