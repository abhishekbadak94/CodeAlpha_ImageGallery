const images = document.querySelectorAll(".gallery-container img");

images.forEach((img) => {
    img.addEventListener("click", () => {
        console.log("Image clicked:", img);
    });
});

const lightBox = document.querySelector(".lightBox");
const lightboxImg1 = document.querySelector("#lightboxImage1");
const closeBtn = document.querySelector("#closeBtn");

let currentIndex = 0;
images.forEach((img, index) => {
    img.addEventListener("click", () => {
           currentIndex = index;
        lightboxImg1.src = img.src;
        lightBox.style.display = "flex";
         
    });
});

closeBtn.addEventListener("click", () => {
    lightBox.style.display = "none";
});


const nextBtn = document.querySelector("#nextBtn");
nextBtn.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    lightboxImg1.src = images[currentIndex].src;
});

const prevBtn = document.querySelector("#prevBtn");
prevBtn.addEventListener("click", () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    lightboxImg1.src = images [currentIndex].src;

});
