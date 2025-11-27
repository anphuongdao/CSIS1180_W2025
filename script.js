// -------------- Discount Popup -----------------
function openDiscount() {
  document.getElementById('discount-popup').style.display = 'flex';
}

function closeDiscount() {
  document.getElementById('discount-popup').style.display = 'none';
}

function submitDiscount() {
  let email = document.getElementById('discount-email').value;
  if(email) {
    alert(`Thank you ${email}! Check your inbox for your sparkly coupon 💖`);
    closeDiscount();
  } else {
    alert('Please enter a valid email ✧');
  }
}

// -------------- Add to Cart Hearts -----------------
function addToCart(product, price) {
  alert(`${product} added to your cart! 💖`);

  let heart = document.createElement('div');
  heart.className = 'heart-burst';
  heart.textContent = '💖';
  heart.style.left = Math.random() * window.innerWidth + 'px';
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 1200);
}
