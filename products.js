// ============================================
// NOVI Jewelry - Product Data
// Dummy data for demonstration
// ============================================

const products = {
  men: [
    {
      id: 1,
      name: "Classic Gold Ring",
      category: "Rings",
      price: 299,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&h=500&fit=crop",
      rating: 4.5,
      isNew: false,
      onSale: false
    },
    {
      id: 2,
      name: "Silver Chain Bracelet",
      category: "Bracelets",
      price: 189,
      originalPrice: 249,
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&h=500&fit=crop",
      rating: 4.8,
      isNew: false,
      onSale: true
    },
    {
      id: 3,
      name: "Luxury Watch",
      category: "Watches",
      price: 899,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=500&h=500&fit=crop",
      rating: 5.0,
      isNew: true,
      onSale: false
    },
    {
      id: 4,
      name: "Platinum Cufflinks",
      category: "Accessories",
      price: 349,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1610042692870-7b1e7e4e4c4a?w=500&h=500&fit=crop",
      rating: 4.6,
      isNew: false,
      onSale: false
    },
    {
      id: 5,
      name: "Black Onyx Ring",
      category: "Rings",
      price: 279,
      originalPrice: 359,
      image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=500&h=500&fit=crop",
      rating: 4.7,
      isNew: false,
      onSale: true
    },
    {
      id: 6,
      name: "Leather Bracelet",
      category: "Bracelets",
      price: 129,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&h=500&fit=crop",
      rating: 4.4,
      isNew: true,
      onSale: false
    },
    {
      id: 7,
      name: "Gold Chain Necklace",
      category: "Necklaces",
      price: 449,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=500&fit=crop",
      rating: 4.9,
      isNew: false,
      onSale: false
    },
    {
      id: 8,
      name: "Diamond Stud Earring",
      category: "Earrings",
      price: 599,
      originalPrice: 799,
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&h=500&fit=crop",
      rating: 5.0,
      isNew: false,
      onSale: true
    }
  ],
  women: [
    {
      id: 9,
      name: "Diamond Engagement Ring",
      category: "Rings",
      price: 1299,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&h=500&fit=crop",
      rating: 5.0,
      isNew: true,
      onSale: false
    },
    {
      id: 10,
      name: "Pearl Necklace",
      category: "Necklaces",
      price: 399,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=500&fit=crop",
      rating: 4.8,
      isNew: false,
      onSale: false
    },
    {
      id: 11,
      name: "Rose Gold Bracelet",
      category: "Bracelets",
      price: 249,
      originalPrice: 329,
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&h=500&fit=crop",
      rating: 4.7,
      isNew: false,
      onSale: true
    },
    {
      id: 12,
      name: "Sapphire Earrings",
      category: "Earrings",
      price: 699,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&h=500&fit=crop",
      rating: 4.9,
      isNew: true,
      onSale: false
    },
    {
      id: 13,
      name: "Gold Charm Bracelet",
      category: "Bracelets",
      price: 329,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&h=500&fit=crop",
      rating: 4.6,
      isNew: false,
      onSale: false
    },
    {
      id: 14,
      name: "Emerald Pendant",
      category: "Necklaces",
      price: 549,
      originalPrice: 699,
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=500&fit=crop",
      rating: 4.8,
      isNew: false,
      onSale: true
    },
    {
      id: 15,
      name: "Silver Anklet",
      category: "Anklets",
      price: 149,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&h=500&fit=crop",
      rating: 4.5,
      isNew: true,
      onSale: false
    },
    {
      id: 16,
      name: "Crystal Drop Earrings",
      category: "Earrings",
      price: 199,
      originalPrice: 259,
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&h=500&fit=crop",
      rating: 4.7,
      isNew: false,
      onSale: true
    }
  ],
  unisex: [
    {
      id: 17,
      name: "Minimalist Band Ring",
      category: "Rings",
      price: 179,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&h=500&fit=crop",
      rating: 4.6,
      isNew: true,
      onSale: false
    },
    {
      id: 18,
      name: "Leather Cord Necklace",
      category: "Necklaces",
      price: 99,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=500&fit=crop",
      rating: 4.4,
      isNew: false,
      onSale: false
    },
    {
      id: 19,
      name: "Beaded Bracelet Set",
      category: "Bracelets",
      price: 129,
      originalPrice: 169,
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&h=500&fit=crop",
      rating: 4.5,
      isNew: false,
      onSale: true
    },
    {
      id: 20,
      name: "Signet Ring",
      category: "Rings",
      price: 249,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=500&h=500&fit=crop",
      rating: 4.7,
      isNew: true,
      onSale: false
    },
    {
      id: 21,
      name: "Chain Link Bracelet",
      category: "Bracelets",
      price: 199,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&h=500&fit=crop",
      rating: 4.6,
      isNew: false,
      onSale: false
    },
    {
      id: 22,
      name: "Pendant Necklace",
      category: "Necklaces",
      price: 159,
      originalPrice: 199,
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=500&fit=crop",
      rating: 4.5,
      isNew: false,
      onSale: true
    },
    {
      id: 23,
      name: "Hoop Earrings",
      category: "Earrings",
      price: 89,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&h=500&fit=crop",
      rating: 4.8,
      isNew: true,
      onSale: false
    },
    {
      id: 24,
      name: "Stainless Steel Watch",
      category: "Watches",
      price: 299,
      originalPrice: 399,
      image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=500&h=500&fit=crop",
      rating: 4.7,
      isNew: false,
      onSale: true
    }
  ]
};

// Get all products
function getAllProducts() {
  return [...products.men, ...products.women, ...products.unisex];
}

// Get products by category
function getProductsByCategory(category) {
  return products[category] || [];
}

// Get new arrivals
function getNewArrivals() {
  return getAllProducts().filter(product => product.isNew);
}

// Get sale products
function getSaleProducts() {
  return getAllProducts().filter(product => product.onSale);
}

// Render product card
function renderProductCard(product) {
  const badge = product.isNew ? 'new' : product.onSale ? 'sale' : '';
  const badgeText = product.isNew ? 'NEW' : product.onSale ? 'SALE' : '';
  const priceHTML = product.originalPrice 
    ? `<span class="price-current">$${product.price}</span><span class="price-original">$${product.originalPrice}</span>`
    : `<span class="price-current">$${product.price}</span>`;
  
  const stars = '★'.repeat(Math.floor(product.rating)) + '☆'.repeat(5 - Math.floor(product.rating));
  
  return `
    <div class="product-card reveal">
      <div class="product-image-wrapper">
        <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
        ${badge ? `<div class="product-badge ${badge}">${badgeText}</div>` : ''}
        <div class="product-overlay">
          <div class="product-quick-actions">
            <button class="quick-action-btn" onclick="addToCart(${product.id})">Add to Cart</button>
            <button class="quick-action-btn" onclick="quickView(${product.id})">Quick View</button>
          </div>
        </div>
      </div>
      <div class="product-info">
        <div class="product-category">${product.category}</div>
        <h3 class="product-title">${product.name}</h3>
        <div class="product-price">
          ${priceHTML}
        </div>
        <div class="product-rating">
          <span>${stars}</span>
          <span>(${product.rating})</span>
        </div>
      </div>
    </div>
  `;
}

// Render products to container
function renderProducts(products, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  container.innerHTML = products.map(product => renderProductCard(product)).join('');
  
  // Trigger reveal animations
  setTimeout(() => {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('active');
      }, index * 100);
    });
  }, 100);
}

// Cart functionality (dummy)
let cart = [];

function addToCart(productId) {
  const product = getAllProducts().find(p => p.id === productId);
  if (product) {
    cart.push(product);
    updateCartCount();
    showNotification(`${product.name} added to cart!`);
  }
}

function updateCartCount() {
  const cartBadge = document.querySelector('.cart-badge');
  if (cartBadge) {
    cartBadge.setAttribute('data-count', cart.length);
  }
}

function quickView(productId) {
  const product = getAllProducts().find(p => p.id === productId);
  if (product) {
    showNotification(`Quick view for ${product.name} (Feature coming soon)`);
  }
}

// Notification system
function showNotification(message) {
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    background: var(--gradient-gold);
    color: white;
    padding: 1rem 1.5rem;
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-xl);
    z-index: 10000;
    animation: slideInRight 0.3s ease-out;
  `;
  notification.textContent = message;
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = 'fadeOut 0.3s ease-out';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// Filter products
function filterProducts(products, filters) {
  let filtered = [...products];
  
  if (filters.category && filters.category !== 'all') {
    filtered = filtered.filter(p => p.category.toLowerCase() === filters.category.toLowerCase());
  }
  
  if (filters.priceRange) {
    const [min, max] = filters.priceRange;
    filtered = filtered.filter(p => p.price >= min && p.price <= max);
  }
  
  if (filters.sortBy) {
    switch(filters.sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered.sort((a, b) => b.isNew - a.isNew);
        break;
    }
  }
  
  return filtered;
}
