import * as basicLightbox from "basiclightbox";
import "basiclightbox/dist/basicLightbox.min.css";

export default function basicLightboxSettings() {
  const triggerButtons = document.querySelectorAll(
    ".tabs__content-video-button"
  );

  const showVideo = (index) => {
    const videoId = triggerButtons[index].dataset.videoId;
    console.log("videoId", videoId);
    const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    const iframeHtml = `
        <iframe
          width="75%"
          height="85.3%"
          src="${embedUrl}"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        ></iframe>
      `;
    const instance = basicLightbox.create(iframeHtml);
    instance.show();
  };

  triggerButtons.forEach((button, index) => {
    const buttonIndex = index;
    button.addEventListener("click", () => showVideo(buttonIndex));
  });
}
