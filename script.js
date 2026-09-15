/* ═══════════ GLASSORA v2.0 — Complete Logic (16 Premium Products) ═══════════ */
const products = [
    { id:1, name:'iPhone 15 Pro Max 256GB', category:'electronics', price:169999, originalPrice:185000, rating:4.9, reviews:2143, image:'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&h=600&fit=crop', badge:'hot', discount:8 },
    { id:2, name:'Sony WH-1000XM5 Headphones', category:'electronics', price:42999, originalPrice:48000, rating:4.8, reviews:1520, image:'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&h=600&fit=crop', badge:'sale', discount:10 },
    { id:3, name:'Nike Air Max 270 Sneakers', category:'fashion', price:12999, originalPrice:15500, rating:4.7, reviews:892, image:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop', badge:'new', discount:16 },
    { id:4, name:'Dyson Supersonic Hair Dryer', category:'beauty', price:38500, originalPrice:42000, rating:4.9, reviews:647, image:'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=600&fit=crop', badge:'sale', discount:8 },
    { id:5, name:'Samsung Galaxy Watch 6 44mm', category:'electronics', price:34999, originalPrice:37500, rating:4.6, reviews:789, image:'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop', badge:'hot', discount:7 },
    { id:6, name:'MacBook Air M2 13-inch', category:'electronics', price:149999, originalPrice:165000, rating:4.9, reviews:1254, image:'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&h=600&fit=crop', badge:'new', discount:9 },
    { id:7, name:'Casio G-Shock GA-2100', category:'fashion', price:8499, originalPrice:10000, rating:4.5, reviews:431, image:'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=600&h=600&fit=crop', badge:'sale', discount:15 },
    { id:8, name:'Chanel No. 5 Eau de Parfum', category:'beauty', price:15800, originalPrice:17000, rating:4.8, reviews:356, image:'https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&h=600&fit=crop', badge:'hot', discount:7 },
    { id:9, name:'Rolex Submariner Date 41mm', category:'fashion', price:2850000, originalPrice:3000000, rating:5.0, reviews:96, image:'https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=600&h=600&fit=crop', badge:'hot', discount:5 },
    { id:10, name:'Bose QuietComfort Ultra Earbuds', category:'electronics', price:38999, originalPrice:43000, rating:4.7, reviews:523, image:'https://images.unsplash.com/photo-1608156639585-b3a032ef9689?w=600&h=600&fit=crop', badge:'new', discount:9 },
    { id:11, name:'Adidas Ultraboost 22 Running Shoe', category:'sports', price:14999, originalPrice:17500, rating:4.6, reviews:678, image:'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&h=600&fit=crop', badge:'sale', discount:14 },
    { id:12, name:'Canon EOS R6 Mark II Camera', category:'electronics', price:269999, originalPrice:290000, rating:4.9, reviews:234, image:'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&h=600&fit=crop', badge:'new', discount:7 },
    { id:13, name:'Dior Sauvage Eau de Parfum 100ml', category:'beauty', price:16400, originalPrice:18000, rating:4.8, reviews:789, image:'https://images.unsplash.com/photo-1619994403073-2cec844b8e63?w=600&h=600&fit=crop', badge:'hot', discount:9 },
    { id:14, name:'Apple Watch Ultra 2 49mm', category:'electronics', price:97999, originalPrice:105000, rating:4.9, reviews:456, image:'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=600&h=600&fit=crop', badge:'sale', discount:7 },
    { id:15, name:'Levi\'s 501 Original Jeans', category:'fashion', price:4999, originalPrice:6000, rating:4.4, reviews:1123, image:'https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&h=600&fit=crop', badge:'sale', discount:17 },
    { id:16, name:'PS5 Slim Disc Edition Console', category:'electronics', price:64999, originalPrice:74999, rating:4.8, reviews:875, image:'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=600&h=600&fit=crop', badge:'hot', discount:13 }
];

let cart = [];
let currentFilter = 'all';
let currentSearch = '';

function renderProducts() {
    const grid = document.getElementById('productsGrid');
    let filtered = products;
    if (currentFilter !== 'all') filtered = filtered.filter(p => p.category === currentFilter);
    if (currentSearch) filtered = filtered.filter(p => p.name.toLowerCase().includes(currentSearch.toLowerCase()));
    if (filtered.length === 0) { grid.innerHTML = `<div class="cart-empty" style="grid-column:1/-1;padding:80px"><i class="fas fa-search" style="font-size:60px;color:var(--text-mut)"></i><p style="font-size:20px;font-weight:700;margin-top:15px">কোনো প্রোডাক্ট পাওয়া যায়নি!</p><span style="color:var(--text-mut)">অন্য কিছু খুঁজুন</span></div>`; return; }
    grid.innerHTML = filtered.map((p,i)=>`
        <div class="product-card glass" style="animation-delay:${i*0.1}s">
            <div class="product-image"><img src="${p.image}" alt="${p.name}" loading="lazy">
                <div class="product-badges">${p.badge==='sale'?'<span class="product-badge badge-sale">সেল</span>':''}${p.badge==='new'?'<span class="product-badge badge-new">নতুন</span>':''}${p.badge==='hot'?'<span class="product-badge badge-hot">হট</span>':''}</div>
                <button class="product-wishlist" onclick="toggleWishlist(${p.id},this)" aria-label="Wishlist"><i class="far fa-heart"></i></button>
            </div>
            <div class="product-info">
                <div class="product-category">${p.category==='electronics'?'ইলেকট্রনিক্স':p.category==='fashion'?'ফ্যাশন':p.category==='beauty'?'বিউটি':'স্পোর্টস'}</div>
                <h3 class="product-name">${p.name}</h3>
                <div class="product-rating"><div class="stars">${'<i class="fas fa-star"></i>'.repeat(Math.floor(p.rating))}${p.rating%1!==0?'<i class="fas fa-star-half-alt"></i>':''}</div><span class="rating-count">(${p.reviews})</span></div>
                <div class="product-pricing"><span class="current-price">৳${p.price.toLocaleString('en-IN')}</span><span class="original-price">৳${p.originalPrice.toLocaleString('en-IN')}</span><span class="discount-tag">-${p.discount}%</span></div>
                <div class="product-actions"><button class="btn-add-cart" onclick="addToCart(${p.id})"><i class="fas fa-shopping-cart"></i> কার্টে যোগ করুন</button><button class="btn-quick-view" onclick="openQuickView(${p.id})" aria-label="Quick View"><i class="fas fa-eye"></i></button></div>
            </div>
        </div>`).join('');
}

function addToCart(id) { const p = products.find(x=>x.id===id); const e = cart.find(c=>c.id===id); if(e) e.qty++; else cart.push({...p, qty:1}); updateCartUI(); showNotification(`"${p.name}" কার্টে যোগ হয়েছে!`); }
function toggleCart() { document.getElementById('cartSidebar').classList.toggle('active'); document.getElementById('cartOverlay').classList.toggle('active'); }
function closeCart() { document.getElementById('cartSidebar').classList.remove('active'); document.getElementById('cartOverlay').classList.remove('active'); }
function updateCartUI() {
    const c=document.getElementById('cartItems'); const total=cart.reduce((s,i)=>s+i.price*i.qty,0); const count=cart.reduce((s,i)=>s+i.qty,0);
    document.getElementById('cartBadge').textContent=count; document.getElementById('cartTotal').textContent='৳'+total.toLocaleString('en-IN');
    if(cart.length===0){ c.innerHTML=`<div class="cart-empty"><i class="fas fa-shopping-cart"></i><p>আপনার কার্ট খালি!</p><span>প্রোডাক্ট যোগ করুন</span></div>`; return; }
    c.innerHTML=cart.map(i=>`<div class="cart-item"><div class="cart-item-img"><img src="${i.image}" alt="${i.name}"></div><div class="cart-item-info"><h4>${i.name}</h4><div class="cart-item-price">৳${i.price.toLocaleString('en-IN')}</div><div class="cart-item-qty"><button class="qty-btn" onclick="changeQty(${i.id},-1)"><i class="fas fa-minus"></i></button><span style="font-size:14px;font-weight:600">${i.qty}</span><button class="qty-btn" onclick="changeQty(${i.id},1)"><i class="fas fa-plus"></i></button></div></div><span class="cart-item-remove" onclick="removeFromCart(${i.id})"><i class="fas fa-trash-alt"></i></span></div>`).join('');
}
function changeQty(id,d){ const i=cart.find(x=>x.id===id); if(i){ i.qty+=d; if(i.qty<=0) removeFromCart(id); else updateCartUI(); } }
function removeFromCart(id){ cart=cart.filter(x=>x.id!==id); updateCartUI(); showNotification('প্রোডাক্ট কার্ট থেকে সরানো হয়েছে!'); }
function checkout(){ if(cart.length===0){ showNotification('কার্ট খালি! আগে প্রোডাক্ট যোগ করুন।'); return; } showNotification('অর্ডার সফলভাবে সম্পন্ন হয়েছে! 🎉'); cart=[]; updateCartUI(); closeCart(); }
function openQuickView(id){ const p=products.find(x=>x.id===id); if(!p) return; document.getElementById('quickViewContent').innerHTML=`<div class="modal-img"><img src="${p.image}" alt="${p.name}"></div><div class="modal-details"><div class="product-category">${p.category==='electronics'?'ইলেকট্রনিক্স':p.category==='fashion'?'ফ্যাশন':p.category==='beauty'?'বিউটি':'স্পোর্টস'}</div><h2>${p.name}</h2><div class="modal-price">৳${p.price.toLocaleString('en-IN')} <span style="font-size:16px;color:var(--text-mut);text-decoration:line-through">৳${p.originalPrice.toLocaleString('en-IN')}</span></div><div class="product-rating"><div class="stars">${'<i class="fas fa-star"></i>'.repeat(Math.floor(p.rating))}</div><span class="rating-count">(${p.reviews} রিভিউ)</span></div><p class="modal-desc">এটি একটি প্রিমিয়াম মানের অরিজিনাল প্রোডাক্ট। GLASSORA থেকে কেনার পর ৭ দিনের রিটার্ন পলিসি এবং ১ বছরের ওয়ারেন্টি গ্যারান্টি। সারাদেশে ফ্রি ও দ্রুত ডেলিভারি।</p><div style="display:flex;gap:10px;margin-bottom:15px"><div style="flex:1;padding:10px;border-radius:10px;background:rgba(102,126,234,.1);text-align:center;font-size:13px;color:var(--accent1);font-weight:600"><i class="fas fa-check-circle"></i> অরিজিনাল</div><div style="flex:1;padding:10px;border-radius:10px;background:rgba(16,185,129,.1);text-align:center;font-size:13px;color:var(--success);font-weight:600"><i class="fas fa-truck"></i> ফ্রি ডেলিভারি</div></div><button class="modal-add" onclick="addToCart(${p.id}); closeQuickView();"><i class="fas fa-shopping-cart"></i> কার্টে যোগ করুন</button></div>`; document.getElementById('quickViewModal').classList.add('active'); document.getElementById('quickViewOverlay').classList.add('active'); }
function closeQuickView(){ document.getElementById('quickViewModal').classList.remove('active'); document.getElementById('quickViewOverlay').classList.remove('active'); }
function filterProducts(cat){ currentFilter=cat; renderProducts(); document.getElementById('products').scrollIntoView({behavior:'smooth'}); }
function handleSearch(){ currentSearch=document.getElementById('searchInput').value.trim(); renderProducts(); }
function toggleWishlist(id,btn){ btn.classList.toggle('active'); const icon=btn.querySelector('i'); icon.classList.toggle('far'); icon.classList.toggle('fas'); const p=products.find(x=>x.id===id); showNotification(btn.classList.contains('active')?`${p.name} উইশলিস্টে যোগ হয়েছে! ❤️`:'উইশলিস্ট থেকে অপসারিত হয়েছে'); }
function toggleWishlistBtn(){ showNotification('উইশলিস্ট ফিচার চালু আছে!'); }
let notifTimer; function showNotification(msg){ const n=document.getElementById('notification'); document.getElementById('notifMsg').textContent=msg; n.classList.add('show'); clearTimeout(notifTimer); notifTimer=setTimeout(()=>n.classList.remove('show'),2500); }
function handleSubscribe(e){ e.preventDefault(); showNotification('নিউজলেটার সাবস্ক্রাইব সফল! 🎉'); e.target.reset(); }
let totalSeconds = 23182; function startCountdown(){ const h=document.getElementById('hours'),m=document.getElementById('minutes'),s=document.getElementById('seconds'); function update(){ if(totalSeconds<=0) totalSeconds=23182; totalSeconds--; h.textContent=String(Math.floor(totalSeconds/3600)).padStart(2,'0'); m.textContent=String(Math.floor((totalSeconds%3600)/60)).padStart(2,'0'); s.textContent=String(totalSeconds%60).padStart(2,'0'); } update(); setInterval(update,1000); }
window.addEventListener('scroll',()=>{ document.getElementById('navbar').classList.toggle('scrolled',window.scrollY>50); document.getElementById('scrollTop').classList.toggle('visible',window.scrollY>400); });
function scrollToSection(id){ document.getElementById(id).scrollIntoView({behavior:'smooth'}); }
function scrollToTop(){ window.scrollTo({top:0,behavior:'smooth'}); }
function toggleMobileMenu(){ showNotification('মোবাইল মেনু — UI চালু আছে!'); }
document.addEventListener('keydown',(e)=>{ if(e.key==='Escape'){ closeCart(); closeQuickView(); } });
renderProducts(); updateCartUI(); startCountdown();
