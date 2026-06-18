const WHATSAPP = "923152950176";

const products = [
  { id: "p1", name: "Chocolate Bouquet", price: 12000, desc: "Sweetness Wrapped In Love", img: "product1.jpg", category: ["Women","Men"], included: "Nutella, Kinder Joy, Lots Of Chocolates" },
  { id: "p2", name: "Makeup Bouquet", price: 8000, desc: "Perfect Gift For Beauty Lover", img: "product2.jpg", category: ["Women"] },
  { id: "p3", name: "12 Pair Jhumka Bouquet", price: 7000, desc: "Perfect Gift For Every Occasion", img: "product3.jpg", category: ["Women"] },
  { id: "p4", name: "Premium Gift Box For Him", price: 12000, desc: "Gift Him Something Truly Special", img: "product4.jpg", category: ["Men"], included: "Zellbury shirt, wallet, Axe body spray, chocolates, cards, bobo balloon" },
  { id: "p5", name: "Baby Girl Basket", price: 8000, desc: "Welcome Your Baby Girl With Love", img: "product5.jpg", category: ["Baby Girl"], included: "3 suits, 1 pair shoes, 1 skin care kit, 1 rattle set (best quality)" },
  { id: "p6", name: "Baby Girl Box", price: 6000, desc: "Welcome Your Baby Girl With Love", img: "product6.jpg", category: ["Baby Girl"], included: "3 suits, 1 pair shoes, 1 feeder, 1 wipes set (normal quality)" },
  { id: "p7", name: "Mother's Day Basket", price: 7000, desc: "Made With Love Just For Mom", img: "product7.jpg", category: ["Women"] },
  { id: "p8", name: "Hijabi Bouquet", price: 7000, desc: "A Graceful Gift With A Touch Of Style", img: "product8.jpg", category: ["Women"] },
  { id: "p9", name: "Handmade Flowers Bouquet", price: 1500, desc: "Forever Flowers, Crafted With Love", img: "product9.jpg", category: ["Women","Men"] },
  { id: "p10", name: "Umrah Package", price: 20000, desc: "The Most Meaningful Gift Of A Lifetime", img: "product10.jpg", category: ["Women","Men"] },
  { id: "p11", name: "Baby Girl Basket", price: 10000, desc: "Welcome Your Baby Girl With Love", img: "product11.jpg", category: ["Baby Girl"] },
  { id: "p12", name: "Baby Box", price: 4000, desc: "A Gentle Welcome For Your Little One", img: "product12.jpg", category: ["Baby Girl"] },
  { id: "p13", name: "Handmade Flowers Bouquet", price: 1500, desc: "Forever Flowers, Crafted With Love", img: "product13.jpg", category: ["Women","Men"] },
  { id: "p14", name: "Baby Boy Basket", price: 15000, desc: "Welcome Your Baby Boy With Love", img: "product14.jpg", category: ["Baby Boy"] },
  { id: "p15", name: "Baby Girl Basket", price: 6500, desc: "Welcome Your Baby Girl With Love", img: "product15.jpg", category: ["Baby Girl"] },
  { id: "p16", name: "Kitkat Chocolate Bouquet", price: 6000, desc: "Sweetness Wrapped In Love", img: "product16.jpg", category: ["Women","Men"] },
  { id: "p17", name: "Handmade Flowers Bouquet", price: 5000, desc: "Forever Flowers, Crafted With Love", img: "product17.jpg", category: ["Women","Men"] },
  { id: "p18", name: "Basket For Him", price: 15000, desc: "Gift Him Something Truly Special", img: "product18.jpg", category: ["Men"] },
  { id: "p19", name: "Valentine Heart Shape Bouquet", price: 3000, desc: "Forever Flowers, Crafted With Love", img: "product19.jpg", category: ["Women","Men"] },
  { id: "p20", name: "Glam Box", price: 27000, desc: "Perfect Gift For Beauty Lover", img: "product20.jpg", category: ["Women"] },
  { id: "p21", name: "Hamper For Baby Girl", price: 3500, desc: "A Curated Hamper Full Of Delight", img: "product21.jpg", category: ["Women","Baby Girl"] },
  { id: "p22", name: "New Year Deal", price: 5000, desc: "Make Her New Year Extra Memorable", img: "product22.jpg", category: ["Women"] },
  { id: "p23", name: "Small Eidi Envelopes", price: 100, desc: "Spread Joy With Beautifully Crafted Eidi Envelopes", img: "product23.jpg", category: ["Women","Baby Girl"] },
  { id: "p24", name: "Baby Girl Basket", price: 18000, desc: "Welcome Your Baby Girl With Love", img: "product24.jpg", category: ["Baby Girl"] },
  { id: "p25", name: "Each Customize Hanger", price: 250, desc: "Custom Designs Made Just For You", img: "product25.jpg", category: ["Baby Girl","Baby Boy"] },
  { id: "p26", name: "Basket For Her", price: 5000, desc: "Elegance, Love & Gifts In One Basket", img: "product26.jpg", category: ["Women"] },
  { id: "p27", name: "Baby Boy Basket", price: 7000, desc: "Welcome Your Baby Boy With Love", img: "product27.jpg", category: ["Baby Boy"] },
  { id: "p28", name: "Craving Basket", price: 8500, desc: "Perfect For The Foodie At Heart", img: "product28.jpg", category: ["Women","Men"] },
  { id: "p29", name: "Birthday Deal", price: 7500, desc: "Surprise Your Loved Ones On Their Birthday", img: "product29.jpg", category: ["Women","Men"] },
  { id: "p30", name: "Customize Basket", price: 5000, desc: "Elegant, Love & Gifts In Just One Basket", img: "product30.jpg", category: ["Women"] },
  { id: "p31", name: "Scrap Book", price: 5000, desc: "Handmade With Love, Filled With Memories", img: "product31.jpg", category: ["Women"] },
  { id: "p32", name: "Valentine Bouquet", price: 4500, desc: "One Bouquet, Countless Smiles", img: "product32.jpg", category: ["Women","Men"] },
  { id: "p33", name: "Lollipop Bouquet", price: 4000, desc: "A Cute Bouquet For Sweet Surprises", img: "product33.jpg", category: ["Baby Girl","Baby Boy"] },
  { id: "p34", name: "Customize Box", price: 2500, desc: "Personalized Gifts That Feel Extra Special", img: "product34.jpg", category: ["Men"] },
  { id: "p35", name: "Luxury Basket", price: 5500, desc: "Sweet Little Luxuries For Someone Special", img: "product35.jpg", category: ["Women"] },
  { id: "p36", name: "Luxury Box", price: 6500, desc: "Gift Him Something Truly Special", img: "product36.jpg", category: ["Men"], included: "Shawl, dress, ring with box, wallet, wallet card" },
];

function getProductById(id) {
  return products.find(p => p.id === id);
}

const categoryLabels = {
  "All": "All Gifts",
  "Women": "For Her",
  "Men": "For Him",
  "Baby Boy": "Baby Boy",
  "Baby Girl": "Baby Girl"
};

let currentModal = null;

function formatPrice(price) {
  return price >= 10000
    ? "Rs " + Math.floor(price / 1000) + "k+"
    : "Rs " + price.toLocaleString();
}

// Renders the product grid for a single, fixed category (used on category pages).
// imgPrefix lets sub-pages point back to the root images folder if needed.
function renderGrid(cat, imgPrefix) {
  imgPrefix = imgPrefix || "";
  const grid = document.getElementById("productGrid");
  if (!grid) return;
  const filtered = cat === "All" ? products : products.filter(p => p.category.includes(cat));

  const titleEl = document.getElementById("sectionTitle");
  const countEl = document.getElementById("sectionCount");
  if (titleEl) titleEl.textContent = categoryLabels[cat] || "All Gifts";
  if (countEl) countEl.textContent = filtered.length + " pieces";

  if (filtered.length === 0) {
    grid.innerHTML = `<div class="empty-state"><span class="empty-state-icon">✦</span><p class="empty-state-text">No pieces found in this collection yet.</p></div>`;
    return;
  }

  grid.innerHTML = filtered.map((product) => {
    const badgePrice = formatPrice(product.price);
    const includedHTML = product.included
      ? `<div class="p-card-included"><span class="p-card-included-label">What's Included</span>${product.included}</div>`
      : "";
    const idx = products.indexOf(product);
    const delay = Math.min(filtered.indexOf(product) * 0.055, 0.55);
    const detailHref = `${imgPrefix}product.html?id=${product.id}`;
    return `
      <article class="p-card card-animate" style="animation-delay:${delay}s">
        <a href="${detailHref}" target="_blank" rel="noreferrer" class="p-card-img-wrap" style="display:block;">
          <img src="${imgPrefix}${product.img}" alt="${product.name}" onerror="this.style.display='none';this.parentNode.style.background='linear-gradient(135deg,#EDE9FE,#F3F0FF)';" />
          <div class="p-card-badge">${badgePrice}</div>
        </a>
        <div class="p-card-body">
          <a href="${detailHref}" target="_blank" rel="noreferrer" style="text-decoration:none;">
            <h3 class="p-card-name">${product.name}</h3>
          </a>
          <p class="p-card-desc">${product.desc}</p>
          <div class="p-card-price">Rs ${product.price.toLocaleString()}</div>
          <div class="p-card-price-label">Starting Price · DC Not Included</div>
          <div class="p-card-divider"></div>
          ${includedHTML}
          <div class="p-card-actions">
            <button class="btn-primary" onclick="openOrder(${idx})"><span>Order Now</span></button>
            <button class="btn-outline" onclick="handleCustomize('${product.name.replace(/'/g, "\\'")}')">Customize</button>
          </div>
        </div>
      </article>`;
  }).join("");
}

function openOrder(idOrIdx) {
  currentModal = typeof idOrIdx === "string" ? getProductById(idOrIdx) : products[idOrIdx];
  if (!currentModal) return;
  document.getElementById("modalName").textContent = currentModal.name;
  document.getElementById("modalPrice").textContent = "Rs " + currentModal.price.toLocaleString();
  document.getElementById("modalOverlay").classList.add("open");
}

function closeModal() {
  const overlay = document.getElementById("modalOverlay");
  if (overlay) overlay.classList.remove("open");
  currentModal = null;
}

function handleOverlayClick(e) {
  if (e.target === e.currentTarget) closeModal();
}

function handleCustomize(name) {
  const msg = "Hello! I'd like to customize: " + name;
  window.open("https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(msg), "_blank");
}

function handlePaid() {
  if (!currentModal) return;
  const msg = "✨ Order Confirmation\nProduct: " + currentModal.name + "\nPrice: Rs " + currentModal.price.toLocaleString() + "\n\nPayment screenshot attached.";
  window.open("https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(msg), "_blank");
  closeModal();
}

/* ===================== REVIEWS (Firebase Firestore) =====================
   Collection: "reviews"
   Each doc: { productId, name, rating (1-5), comment, status: "pending"|"approved", createdAt }
   Only "approved" reviews are shown publicly. New submissions are always "pending"
   until approved from admin.html.
=========================================================================== */

async function submitReview(productId, name, rating, comment) {
  if (typeof db === "undefined") {
    throw new Error("Reviews are temporarily unavailable. Please try again later.");
  }
  return db.collection("reviews").add({
    productId,
    name: name.trim().slice(0, 60),
    rating: Number(rating),
    comment: comment.trim().slice(0, 600),
    status: "pending",
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
  });
}

async function fetchApprovedReviews(productId) {
  if (typeof db === "undefined") return [];
  const snap = await db.collection("reviews")
    .where("productId", "==", productId)
    .where("status", "==", "approved")
    .get();
  const reviews = [];
  snap.forEach(doc => reviews.push({ id: doc.id, ...doc.data() }));
  reviews.sort((a, b) => {
    const ta = a.createdAt && a.createdAt.toMillis ? a.createdAt.toMillis() : 0;
    const tb = b.createdAt && b.createdAt.toMillis ? b.createdAt.toMillis() : 0;
    return tb - ta;
  });
  return reviews;
}

function computeAverageRating(reviews) {
  if (!reviews.length) return { avg: 0, count: 0 };
  const sum = reviews.reduce((acc, r) => acc + (Number(r.rating) || 0), 0);
  return { avg: sum / reviews.length, count: reviews.length };
}

function renderStars(rating, size) {
  size = size || 14;
  const full = Math.round(rating);
  let html = "";
  for (let i = 1; i <= 5; i++) {
    html += `<span style="font-size:${size}px;color:${i <= full ? "#7C3AED" : "#DDD6FE"};">★</span>`;
  }
  return html;
}
