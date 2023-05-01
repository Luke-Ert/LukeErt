if (document.getElementById("instagramEmbed")) {
  document.getElementById("instagramEmbed").style.display = "none";
}
if (document.getElementById("shareButton")) {
  document.getElementById("shareButton").style.display = "none";
}
setTimeout(() => {
  document.getElementById("loadingTitle").innerText = "Loading.";
}, 1000);
setTimeout(() => {
  document.getElementById("loadingTitle").innerText = "Loading..";
}, 1500);
setTimeout(() => {
  document.getElementById("loadingTitle").innerText = "Loading...";
}, 2000);
setTimeout(() => {
  document.getElementById("loadingScreen").style.animation = "fadeOut 2s";
  if (document.getElementById("instagramEmbed")) {
    document.getElementById("instagramEmbed").style.display = "block";
  }
}, 2500);
setTimeout(() => {
  document.getElementById("loadingScreen").style.display = "none";
  if (document.getElementById("shareButton")) {
    document.getElementById("shareButton").style.display = "block";
  }
}, 4500);
