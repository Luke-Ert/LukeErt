function share() {
  if (navigator.canShare()) {
    navigator
      .share({
        title: "Luke Ert",
        url: "https://lukeert.co.uk",
      })
      .then(() => {
        console.log("Shared!");
      })
      .catch(console.error);
  } else {
    navigator.clipboard.writeText("https://lukeert.co.uk");
    var popup = document.getElementById("copied");
    popup.classList.toggle("show");
  }
}
