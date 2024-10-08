let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", (e) => {
    let arrowParent = e.target.parentElement.parentElement; 
    arrowParent.classList.toggle("showMenu");
  });
}

let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".menu-icon");
sidebarBtn.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

document.addEventListener("DOMContentLoaded", function() {
  const profileName = document.getElementById('profile_name');
  const profileEmail = document.getElementById('profile_email');

  const username = localStorage.getItem('username');
  const email = localStorage.getItem('email');

  if (username) {
    profileName.textContent = username;
  }

  if (email) {
    profileEmail.textContent = email;
  }
  
  const logoutBtn = document.getElementById('logout');
  logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    profileName.textContent = 'User';
    profileEmail.textContent = 'User e-Mail';
  });
});
