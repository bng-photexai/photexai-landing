document.addEventListener("DOMContentLoaded", function () {
  const navbars = document.querySelectorAll(".navbar");

  function handleScroll() {
    navbars.forEach((navbar) => {
      if (window.scrollY > 0) {
        navbar.classList.add("bg-black", "bg-opacity-85");
      } else {
        navbar.classList.remove("bg-black", "bg-opacity-85");
      }
    });
  }

  window.addEventListener("scroll", handleScroll);
});
