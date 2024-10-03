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


// HEEX
// defmodule BetStackWeb.Live.Public.MarketingInfo do
//   @moduledoc """
//   Displays marketing information for the general public.
//   """

//   use BetStackWeb, :component

//   def index(assigns) do
//     cardDetails = [
//       %{
//         id: "card-1",
//         img: "/images/Banners/Marketing/1-3.png",
//         altText: "Signup/Login Banner",
//         cta1: %{
//           name: "Sign up",
//           action: "/signup"
//         },
//         cta2: %{
//           name: "Login",
//           action: "/login"
//         }
//       },
//       %{
//         id: "card-2",
//         img: "/images/Banners/Marketing/2-2.png",
//         altText: "Signup/Login Banner",
//         cta1: %{
//           name: "Sign up",
//           action: "/signup"
//         },
//         cta2: %{
//           name: "Login",
//           action: "/login"
//         }
//       },
//       %{
//         id: "card-3",
//         img: "/images/Banners/Marketing/3-2.png",
//         altText: "Signup/Login Banner",
//         cta1: %{
//           name: "Sign up",
//           action: "/signup"
//         },
//         cta2: %{
//           name: "Login",
//           action: "/login"
//         }
//       },
//       %{
//         id: "card-4",
//         img: "/images/Banners/Marketing/4-2.png",
//         altText: "Signup/Login Banner",
//         cta1: %{
//           name: "Sign up",
//           action: "/signup"
//         },
//         cta2: %{
//           name: "Login",
//           action: "/login"
//         }
//       },
//       %{
//         id: "card-5",
//         img: "/images/Banners/Marketing/5-2.png",
//         altText: "Signup/Login Banner",
//         cta1: %{
//           name: "Sign up",
//           action: "/signup"
//         },
//         cta2: %{
//           name: "Login",
//           action: "/login"
//         }
//       }
//     ]


//     assigns =
//       assigns
//       |> assign(cardDetails: cardDetails)


//     ~H"""
//       <div class="w-full " id="carousel-market-container" phx-hook="CarouselHook">
//         <!-- Carousel Cards -->
//         <div id="carousel-parent-container" class={"flex overflow-x-hidden justify-items-center"}>
//           <div id="carousel-container" class="flex gap-4">
//             <%= for card <- @cardDetails do %>
//               <div id={card.id} data-card-id={card.id} class="flex justify-end items-end rounded-lg w-64 h-36 relative overflow-hidden p-6" style={"background: linear-gradient(171deg, rgba(0, 0, 0, 0.00) 7.08%, #000 94.36%), url(#{card.img}) lightgray 0px -179.526px / 100% 316.132% no-repeat; background-position: center; background-size: cover;"}>
//                 <div class="flex gap-2.5 w-full justify-end">
//                   <.button class="bg-yellow-500 border border-yellow-500 rounded-md text-sm font-normal text-woodsmoke-950 px-2 py-1 min-w-fit w-20">
//                     <a href={card.cta1.action} class="font-normal"> <%= card.cta1.name %> </a>
//                   </.button>
//                   <.button class="rounded-md text-sm border border-white font-normal text-white px-2 py-1 min-w-fit w-20">
//                     <a href={card.cta2.action} class="font-normal"> <%= card.cta2.name %> </a>
//                   </.button>
//                 </div>
//               </div>
//             <% end %>
//           </div>
//         </div>

//         <!-- Buttons for scrolling to specific cards -->
//         <div class="flex gap-1 mt-4 justify-center">
//           <%= for card <- @cardDetails do %>
//             <.button class="px-1 py-2" data-btn-id={card.id}>
//               <div class="h-1 w-7 rounded-lg bg-gray-500"></div>
//             </.button>
//           <% end %>
//         </div>
//       </div>
//       """
//   end

// end
