//Hamburger Menu ab 768px
//
/*Das menü hat einen "Menü" Button sowie einen "Schließen" Button. Wenn man auf den Menü Button klickt
geht ein Menü auf und zeigt die Navigationsoptionen zu den anderen Seiten an. Solange das Menü geöffnet ist
zeigt der Button "Schließen" an. Mit weiterem klick kann das Menü dann geschlossen werden.
Für die Umsetzung wurden drei variablen erstellt welche durch ID's und einem <li> tag zugeordnet werden.
Ein event listener nimmt den Klick an und für eine Funktion aus. "show" wird aktiviert und lässt das Menü
in den sichtbaren Bereich sliden. Mit einer if-else bedingung wird abgefragt ob show aktiv ist um den richtigen Text
anzuzeigen. Am Ende muss mit der for-each schleife sichergestellt werden das show nach jedem Klick (auf die Links)
deaktiviert wird und der Button Text auf Menü geht
*/
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
