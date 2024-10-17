window.onload = function () {
  // Loader functionality
  const loader = document.querySelector(".loader");
  const loaderText = document.getElementById("loader-text");
  const loaderSubtext = document.getElementById("loader-subtext");

  // Check if the user has visited before
  if (!localStorage.getItem("visited")) {
    // Show the loader for first-time visitors
    const text = loaderText.innerText.split("");
    const subtext = loaderSubtext.innerText.split("");

    loaderText.innerHTML = "";
    loaderSubtext.innerHTML = "";

    const appendLetters = (text, targetElement, delay) => {
      text.forEach((letter, index) => {
        setTimeout(() => {
          targetElement.innerHTML += letter;
          const lastChild = targetElement.lastChild;
          if (lastChild) {
            lastChild.style.opacity = "1";
            lastChild.style.transform = "translateY(0)";
          }
        }, index * delay);
      });
    };

    appendLetters(text, loaderText, 200);
    setTimeout(() => {
      appendLetters(subtext, loaderSubtext, 200);
    }, text.length * 200 + 500);

    const totalDelay = text.length * 200 + subtext.length * 200 + 1000;
    setTimeout(() => {
      loader.style.transition = "opacity 0.5s ease";
      loader.style.opacity = "0";
      setTimeout(() => {
        loader.style.display = "none";
      }, 500);
    }, totalDelay);

    // Set the visited flag in localStorage
    localStorage.setItem("visited", "true");
  } else {
    // If visited, hide the loader immediately
    loader.style.display = "none";
  }

  // Hamburger menu functionality
  const hamburger = document.getElementById("hamburger");
  const nav = document.getElementById("nav");

  hamburger.addEventListener("click", () => {
    nav.classList.toggle("show"); // Toggle active class to show/hide nav
  });
};
