const openModal = document.getElementById('open-modal');
const overlay = document.getElementById("overlay");
const closeModal = document.getElementById("close-modal");

openModal.addEventListener("click", function() {
    overlay.style.display = "block";
    console.log("clicked");
})

closeModal.addEventListener("click", function() {
    overlay.style.display = "none";
})