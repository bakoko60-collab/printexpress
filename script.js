const galleryData = {
  printing: ["printing.jpg", "printing-1.jpg", "printing-2.jpg", "printing-3.jpg"],
  design: ["design.jpg", "design-1.jpg", "design-2.jpg", "design-3.jpg"],
  signs: ["signs.jpg", "signs-1.jpg", "signs-2.jpg", "signs-3.jpg"],
  branding: ["branding.jpg", "branding-1.jpg", "branding-2.jpg", "branding-3.jpg"]
};

const viewButtons = document.querySelectorAll(".view-btn");
const lightbox = document.getElementById("lightbox");
const lightboxContent = document.getElementById("lightbox-content");
const closeBtn = document.getElementById("closeBtn");

viewButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const folder = btn.parentElement.getAttribute("data-folder");
    openLightbox(folder);
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

function openLightbox(folder) {
  const images = galleryData[folder];
  lightboxContent.innerHTML = "";
  images.forEach(imgFile => {
    const img = document.createElement("img");
    img.src = `images/${folder}/${imgFile}`;
    img.alt = imgFile;
    lightboxContent.appendChild(img);
  });
  lightbox.style.display = "flex";
}
// ====== FULL IMAGE VIEW FUNCTIONALITY ======
const fullView = document.getElementById("fullImageView");
const fullImg = document.getElementById("fullImage");
const closeFullView = document.getElementById("closeFullView");

// When any image in the lightbox is clicked → open full view
lightboxContent.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    fullImg.src = e.target.src;
    fullView.style.display = "flex";
  }
});

// Close when X is clicked or background is clicked
closeFullView.addEventListener("click", () => {
  fullView.style.display = "none";
});
fullView.addEventListener("click", (e) => {
  if (e.target === fullView) {
    fullView.style.display = "none";
  }
});
