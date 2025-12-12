import Swiper from "swiper";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function swiperSettings() {
  const accessoriesSlider = new Swiper(".accessories__slider", {
    modules: [Pagination, Autoplay],
    loop: true,
    autoplay: {
      delay: 7000,
      pauseOnMouseEnter: true,
      disableOnInteraction: false,
    },
    slidesPerView: 4,
    grabCursor: true,
    pagination: {
      el: ".accessories__slider-pagination",
      clickable: true,
    },
  });
}
