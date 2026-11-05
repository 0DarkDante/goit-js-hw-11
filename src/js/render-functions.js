import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryContainer = document.querySelector(".gallery");
const loader = document.querySelector(".loader");
const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
});

export function createGallery(images) {
    const galleryMarkup = images.map(image => {
        return `
            <li class="gallery-item">
                <a href="${image.largeImageURL}" class="gallery-link">
                    <img
                        src="${image.webformatURL}"
                        alt="${image.tags}"
                        loading="lazy"
                    />
                </a>

                <div class="gallery-info">
                    <div class="gallery-info-item">
                        <p class="gallery-info-title">Likes</p>
                        <p class="gallery-info-value">${image.likes}</p>
                    </div>

                    <div class="gallery-info-item">
                        <p class="gallery-info-title">Views</p>
                        <p class="gallery-info-value">${image.views}</p>
                    </div>

                    <div class="gallery-info-item">
                        <p class="gallery-info-title">Comments</p>
                        <p class="gallery-info-value">${image.comments}</p>
                    </div>

                    <div class="gallery-info-item">
                        <p class="gallery-info-title">Downloads</p>
                        <p class="gallery-info-value">${image.downloads}</p>
                    </div>
                </div>
            </li>
        `;
    });

    galleryContainer.innerHTML = galleryMarkup.join("");
    lightbox.refresh();
}

export function clearGallery() {
    galleryContainer.innerHTML = "";
}

export function showLoader() {
    loader.style.display = "block";
}

export function hideLoader() {
    loader.style.display = "none";
}