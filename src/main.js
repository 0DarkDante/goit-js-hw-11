import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from "./js/pixabay-api.js";
import { createGallery } from "./js/render-functions.js";
import { showLoader, hideLoader, clearGallery } from "./js/render-functions.js";

const form = document.querySelector(".form");
const input = document.querySelector("input[name='search-text']");

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const searchQuery = input.value.trim();

    if (searchQuery === "") {
        iziToast.warning({
            title: 'Warning',
            message: 'Please enter a search query!'
        });
        return;
    }

    clearGallery()
    showLoader()

    getImagesByQuery(searchQuery)
    .then(images => {
        if (images.length === 0) {
            iziToast.error({
                title: 'Error',
                message: 'Sorry, there are no images matching your search query. Please try again!'
            })
            return;
        }

        createGallery(images);


    })
    .catch(error => {
        iziToast.error({
            title: 'Error',
            message: 'An error occurred while fetching images. Please try again later.'
        });
    })
    .finally(() => {
        hideLoader();
    })
})