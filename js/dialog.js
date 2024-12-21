function dialogOpen(dialogId) {
  document.getElementById(dialogId).classList.add("show");
  document.getElementById("body-overlay").classList.add("show");
  document.body.classList.add("hidden");
}

function dialogClose(dialogId) {
  document.getElementById(dialogId).classList.remove("show");
  document.getElementById("body-overlay").classList.remove("show");
  document.body.classList.remove("hidden");
}
