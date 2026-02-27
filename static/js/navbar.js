(function () {
  function initNavbar() {
    var toggle = document.querySelector(".app-navbar__toggle");
    var nav = document.getElementById("primary-nav");
    if (!toggle || !nav) return;

    var secondaryLinks = nav.querySelectorAll(
      ".app-navbar__item--secondary .app-navbar__link"
    );

    function isOpen() {
      return toggle.getAttribute("aria-expanded") === "true";
    }

    function openMenu() {
      toggle.setAttribute("aria-expanded", "true");
      nav.classList.add("is-open");
      nav.setAttribute("data-collapsed", "false");
      if (secondaryLinks.length > 0) {
        secondaryLinks[0].focus();
      }
    }

    function closeMenu() {
      toggle.setAttribute("aria-expanded", "false");
      nav.classList.remove("is-open");
      nav.setAttribute("data-collapsed", "true");
      toggle.focus();
    }

    toggle.addEventListener("click", function () {
      if (isOpen()) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    toggle.addEventListener("keydown", function (event) {
      var key = event.key || event.code;
      if (key === "Enter" || key === " " || key === "Spacebar") {
        event.preventDefault();
        if (isOpen()) {
          closeMenu();
        } else {
          openMenu();
        }
      }
    });

    document.addEventListener("keydown", function (event) {
      if (!isOpen()) return;
      if (event.key === "Escape" || event.key === "Esc") {
        closeMenu();
      }
    });

    document.addEventListener("click", function (event) {
      if (!isOpen()) return;
      if (!nav.contains(event.target) && !toggle.contains(event.target)) {
        closeMenu();
      }
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth >= 768 && isOpen()) {
        toggle.setAttribute("aria-expanded", "false");
        nav.classList.remove("is-open");
        nav.setAttribute("data-collapsed", "true");
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initNavbar);
  } else {
    initNavbar();
  }
})();

