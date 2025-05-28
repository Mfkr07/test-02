document.getElementById("year").textContent = new Date().getFullYear();

function toggleMore() {
  const more = document.getElementById("more");
  const btn = document.getElementById("seeMore");

  if (more.style.display === "none") {
    more.style.display = "inline";
    btn.textContent = "See Less...";
  } else {
    more.style.display = "none";
    btn.textContent = "See More...";
  }
}

new Swiper(".swiper-wrapper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },

  function toggleDropdown() {
    const menu = document.getElementById("dropdownMenu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
  }
  
  document.addEventListener("click", function (event) {
    const login = document.querySelector(".login");
    const dropdown = document.getElementById("dropdownMenu");
    if (!login.contains(event.target)) {
      dropdown.style.display = "none";
    }
  });

});
