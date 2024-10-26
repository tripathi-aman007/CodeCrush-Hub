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

    // Append letters with a delay
    appendLetters(text, loaderText, 200);
    setTimeout(() => {
      appendLetters(subtext, loaderSubtext, 200);
    }, text.length * 200 + 500);

    // Calculate the total delay based on text length
    const totalDelay = text.length * 200 + subtext.length * 200 + 1500;

    // Delay the loader disappearance
    setTimeout(() => {
      loader.style.transition = "opacity 0.5s ease";
      loader.style.opacity = "0";
      setTimeout(() => {
        loader.style.display = "none";
      }, 500); // Wait for the fade-out transition
    }, totalDelay); // Delay the fade-out until all text is shown

    // Set the visited flag in localStorage
    localStorage.setItem("visited", "true");
  } else {
    // If visited, hide the loader immediately
    loader.style.display = "none";
  }

  // Hamburger menu functionality
  const hamburger = document.getElementById("hamburger");
  const nav = document.getElementById("nav");

  // Check if hamburger and nav elements exist before adding event listener
  if (hamburger && nav) {
    hamburger.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
