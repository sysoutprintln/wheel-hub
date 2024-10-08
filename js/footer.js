let navLinks = document.querySelectorAll(".nav-links li a");
navLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    let targetUrl = link.getAttribute("href");
    window.location.href = targetUrl;
  });
});
