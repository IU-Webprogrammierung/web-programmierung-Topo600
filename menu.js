//Hamburger Menu ab 768px

//Variablen geändert(const zu let) für mehr accessibility mit "Menü" & "Schließen" Button
let button = document.getElementById("menuButton");
let nav = document.getElementById("navlinks");
let navLinks = nav.querySelectorAll("li");

//Menu öffnen auf Klick
button.addEventListener("click", () => {
  nav.classList.toggle("show");

  //Text ändern wenn das Menu aufgeht
  if (nav.classList.contains("show")) {
    button.textContent = "Schließen";
  } else {
    button.textContent = "Menü";
  }
});

//for each Schleife für jeden Klick auf einen Link Menu zurücksetzen
navLinks.forEach((navLink) => {
  navLinks.addEventListener("click", () => {
    nav.classList.remove("show");
    button.textContent = "Menü"; //Setzt den Text zurück
  });
});
