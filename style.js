// Add interactivity if needed
document.querySelector('.banner button').addEventListener('click', () => {
    alert('Shop Now Clicked!');
  });

  document.addEventListener("DOMContentLoaded", () => {
    const cartButtons = document.querySelectorAll(".add-to-cart");
  
    cartButtons.forEach((button) => {
      button.addEventListener("click", () => {
        alert("Item added to cart!");
      });
    });
  })