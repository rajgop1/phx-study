let CarouselHook = {
  mounted() {
    const carouselParentContainer = document.getElementById("carousel-parent-container");
    const carouselContainer = document.getElementById("carousel-container");
    const cards = document.querySelectorAll("[data-card-id]");

    // Set the minWidth of the carousel container dynamically
    // carouselContainer.style.minWidth = `${carouselContainer.clientWidth * 2}px`;

    // Check if the carousel content is overflowing
    // const isOverflowing = this.isCarouselOverflowing(carouselParentContainer.getBoundingClientRect());

    console.log(carouselParentContainer.getBoundingClientRect())
    console.log(carouselContainer.getBoundingClientRect())

    // Show or hide buttons based on overflow status
    // this.toggleButtons(isOverflowing);

    // Highlight the first button as active
    this.highlightActiveButton(cards[0].getAttribute("data-card-id"));

    // Attach click events to buttons
    document.querySelectorAll("[data-btn-id]").forEach(button => {
      button.addEventListener("click", (e) => {
        const cardId = e.currentTarget.getAttribute("data-btn-id");
        this.scrollToCard(cardId);
      });
    });
  },

  scrollToCard(cardId) {
    const card = document.getElementById(cardId);
    if (card) {
      card.scrollIntoView({ behavior: "smooth", block: "end", inline: "start" });
    }
    this.highlightActiveButton(cardId);
  },

  highlightActiveButton(activeCardId) {
    document.querySelectorAll("[data-btn-id]").forEach(button => {
      const buttonId = button.getAttribute("data-btn-id");
      const buttonBg = button.querySelector("div");

      if (buttonId === activeCardId) {
        buttonBg.classList.remove("bg-gray-500");
        buttonBg.classList.add("bg-yellow-500");
      } else {
        buttonBg.classList.remove("bg-yellow-500");
        buttonBg.classList.add("bg-gray-500");
      }
    });
  },

  // Method to check if the carousel is overflowing
  isCarouselOverflowing(element) {
    console.log("element.clientWidth , element.scrollWidth",element.clientWidth , element.offsetWidth)
    return element.clientWidth > element.scrollWidth
    
  },

  // Show or hide buttons based on whether the carousel is overflowing
  toggleButtons(isOverflowing) {
    document.querySelectorAll("[data-btn-id]").forEach(button => {
      if (isOverflowing) {
        button.style.display = "block"; // Show buttons if overflowing
      } else {
        button.style.display = "none"; // Hide buttons if not overflowing
      }
    });
  }
};

export default CarouselHook;
