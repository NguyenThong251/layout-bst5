var modalOverlay = document.getElementById("overlay-cart");
var closeCart = document.getElementById("close-cart");
var modalViewCart = document.getElementById("modal-cart-view");
var cartClick = document.getElementById("cart-click");
function getModalViewCart() {
  modalOverlay.classList.remove("d-none");
  modalOverlay.classList.add("overlay-ani");
  modalViewCart.classList.remove("modal-cart-view");
  modalViewCart.classList.add("fadeInRight");
  modalViewCart.classList.add("modal-cart-view-active");
  modalOverlay.addEventListener("click", () => {
    modalOverlay.classList.add("d-none");
    modalOverlay.classList.add("overlay-ani");
    modalViewCart.classList.remove("modal-cart-view-active");
    modalViewCart.classList.add("modal-cart-view");
  });
  closeCart.addEventListener("click", () => {
    modalOverlay.classList.add("d-none");
    modalOverlay.classList.add("overlay-ani");
    modalViewCart.classList.remove("modal-cart-view-active");
    modalViewCart.classList.add("modal-cart-view");
  });
}
cartClick.addEventListener("click", getModalViewCart);
