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