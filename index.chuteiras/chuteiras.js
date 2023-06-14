function expandImage(event) {
    var image = event.target;
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("modal-img");
    modalImg.src = image.src;
    modal.classList.add("show");
}

function closeModal() {
    var modal = document.getElementById("modal");
    modal.classList.remove("show");
}