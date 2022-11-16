const overlay = document.getElementById("overlay"),
    openModal = document.getElementById("open-modal"),
    closeModal = document.getElementById("close-modal");

overlay.style.display = "none"

openModal.addEventListener("click", () => {
    overlay.style.display = "block"
})

closeModal.addEventListener("click", () => {
    overlay.style.display = "none"
})
