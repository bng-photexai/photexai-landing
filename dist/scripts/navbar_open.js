document.addEventListener("DOMContentLoaded", function () {
  const openMobileNavbarButton = document.querySelector(
    ".open-mobile-navbar-button"
  );
  const closeMobileNavbarButton = document.querySelector(
    ".close-mobile-navbar-button"
  );
  const mobileNavbar = document.querySelector(".mobile-navbar");

  if (openMobileNavbarButton && closeMobileNavbarButton && mobileNavbar) {
    openMobileNavbarButton.addEventListener("click", () => {
      mobileNavbar.classList.remove("hidden");
    });

    closeMobileNavbarButton.addEventListener("click", () => {
      mobileNavbar.classList.add("hidden");
    });
  }
});
