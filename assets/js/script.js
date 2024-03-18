// Toggle hamburger menu
const navbarList = document.querySelector(".navbar-list");
const hamburger = document.querySelector("#hamburger-menu");

hamburger.onclick = (e) => {
  navbarList.classList.toggle("active");
  if (navbarList.classList.contains("active")) {
    hamburger.style.color = "var(--accent)";
  } else {
    hamburger.style.color = "var(--primary)";
  }
  e.preventDefault();
};

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarList.contains(e.target)) {
    navbarList.classList.remove("active");
    hamburger.style.color = "var(--primary)";
  }
});

// Toggle search form
const searchForm = document.querySelector(".search-form");
const searchInput = document.querySelector("#search-input");
const searchButton = document.querySelector("#search-button");

searchButton.onclick = (e) => {
  searchForm.classList.toggle("active");
  if (searchForm.classList.contains("active")) {
    searchButton.style.color = "var(--accent)";
  } else {
    searchButton.style.color = "var(--primary)";
  }
  searchInput.focus();
  e.preventDefault();
};

document.addEventListener("click", function (e) {
  if (!searchForm.contains(e.target) && !searchButton.contains(e.target)) {
    searchForm.classList.remove("active");
    searchButton.style.color = "var(--primary)";
  }
});

// Toggle Shopping Cart
const keranjang = document.querySelector(".keranjang");
const shoppingCart = document.querySelector("#shopping-cart");

shoppingCart.onclick = (e) => {
  keranjang.classList.toggle("active");
  if (keranjang.classList.contains("active")) {
    shoppingCart.style.color = "var(--accent)";
  } else {
    shoppingCart.style.color = "var(--primary)";
  }
  e.preventDefault();
};

document.addEventListener("click", function (e) {
  if (!keranjang.contains(e.target) && !shoppingCart.contains(e.target)) {
    keranjang.classList.remove("active");
    shoppingCart.style.color = "var(--primary)";
  }
});

// Scrolling effect navbar
document.addEventListener("DOMContentLoaded", function () {
  const navbarLinks = document.querySelectorAll(".navbar-list a");

  function activeNavbar() {
    const scrollPosition = window.scrollY;

    navbarLinks.forEach((navbarLink) => {
      const sectionId = navbarLink.getAttribute("href").substring(1);
      const section = document.getElementById(sectionId);

      if (
        section.offsetTop - 100 <= scrollPosition &&
        section.offsetTop + section.offsetHeight > scrollPosition
      ) {
        navbarLinks.forEach((navbarLink) => {
          navbarLink.classList.remove("active");
        });
        navbarLink.classList.add("active");
      }
    });
  }

  activeNavbar();

  window.addEventListener("scroll", activeNavbar);
});
