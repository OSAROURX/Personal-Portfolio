const navSlider = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".navlinks");
  const navLinks = document.querySelectorAll(".navlinks li");

  burger.addEventListener("click", () => {
    nav.classList.toggle("burgerClicked");

    navLinks.forEach((i, index) => {
      if (i.style.animation) {
        i.style.animation = "";
      } else {
        i.style.animation = `navLinkSlide 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });
  });
};

navSlider();
