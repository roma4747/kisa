document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("mob-hamburger");
  const closeBtn = document.getElementById("nav-mob-close-btn");
  const menuWrapper = document.getElementById("nav-mob-wrapper");

  hamburger.addEventListener("click", () => {
    menuWrapper.classList.add("open");
    document.body.classList.add("no-scroll");
    hamburger.classList.add("hidden");
    closeBtn.classList.add("visible");
  });

  closeBtn.addEventListener("click", () => {
    menuWrapper.classList.remove("open");
    document.body.classList.remove("no-scroll");
    hamburger.classList.remove("hidden");
    closeBtn.classList.remove("visible");
  });
});
