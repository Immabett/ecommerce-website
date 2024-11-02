document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message!');
        form.reset();
    });

    const cartButtons = document.querySelectorAll('.product button');

    cartButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Item added to cart!');
        });
    });
});
document.getElementById('category').addEventListener('change', function() {
    let selectedCategory = this.value;
    // Logic to filter products based on the selected category
  });
  
  document.getElementById('search').addEventListener('input', function() {
    let searchText = this.value.toLowerCase();
    // Logic to filter products based on searchText
  });

  const cartItems = [];
const wishlistItems = [];

// Function to add items to cart or wishlist
function addToCart(product) {
  cartItems.push(product);
  renderCart();
}

function addToWishlist(product) {
  wishlistItems.push(product);
  renderWishlist();
}

// Function to display cart items
function renderCart() {
  // Update HTML content with cartItems
}

function renderWishlist() {
  // Update HTML content with wishlistItems
}

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // Logic to authenticate the user
  }
  
  function submitReview() {
    const reviewText = document.getElementById('review-text').value;
    const rating = document.getElementById('rating').value;
    // Logic to save the review and rating
  }
  