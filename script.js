
  document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.getElementById("carouselExampleIndicators");
    const items = carousel.querySelectorAll(".carousel-item");
    const indicatorsContainer = carousel.querySelector(".carousel-indicators");

    indicatorsContainer.innerHTML = ""; // Limpiar si hay indicadores previos

    items.forEach((item, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.setAttribute("data-bs-target", "#carouselExampleIndicators");
      button.setAttribute("data-bs-slide-to", index);
      if (index === 0) button.classList.add("active");
      indicatorsContainer.appendChild(button);
    });
  });

