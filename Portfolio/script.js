document.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById("openBtn");
  const navMenu = document.getElementById("mySidenav");
  const links = navMenu.querySelectorAll("a[href^='#']");
  const backToTopButton = document.getElementById("backToTop");

 // === 1. MENU BURGER (overlay) ===
  burger.addEventListener("click", (e) => { 
    e.preventDefault(); 
    
    navMenu.classList.toggle("open");
    burger.classList.toggle("active");
    document.body.classList.toggle("no-scroll");
  });

  // === 2. FERMETURE AUTOMATIQUE APRÈS CLIC SUR UN LIEN ===
  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      const target = document.querySelector(targetId);

      navMenu.classList.remove("open");
      burger.classList.remove("active");
      document.body.classList.remove("no-scroll");

      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: "smooth" });
        }, 250);
      }
    });
  });

  // === 3. CLIQUER À L’EXTÉRIEUR FERMER LE MENU ===
  document.addEventListener("click", e => {
    if (
      navMenu.classList.contains("open") &&
      !navMenu.contains(e.target) &&
      !burger.contains(e.target)
    ) {
      navMenu.classList.remove("open");
      burger.classList.remove("active");
      document.body.classList.remove("no-scroll");
    }
  });

  // === 4. BOUTON RETOUR HAUT ===
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) backToTopButton.classList.add("show");
    else backToTopButton.classList.remove("show");
  });

  backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});