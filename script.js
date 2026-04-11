let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Category Products Data
const categoryProducts = {
western: {
title: "👚 Western Wear",
desc: "Stylish western outfits for every occasion",
products: [
{name: "Top", price: "999", image: "images/HomeStretch™ Rib Solo Longsleeve.jpg"},
{name: "Cardigan", price: "1299", image: "images/The Featherlight Cashmere Cardigan_ Yes, it is as soft as it sounds_.jpg"},
{name: "Soft Girl Hoodie", price: "1499", image: "images/our classic blue dream is coming to life tomorrow - tomorrow 7PM.jpg"},
{name: "Wide Leg Jeans", price: "1999", image: "images/wide leg jeans.jpg"}
]
},
ethnic: {
title: "👗 Ethnic Wear",
desc: "Traditional and modern ethnic fashion",
products: [
{name: "Saree", price: "4999", image: "images/Elegant Sage Green Sequin Saree with Halter Neck Blouse.jpg"},
{name: "Kurti", price: "899", image: "images/Sleeveless Short Kurti.jpg"},
{name: "Lehenga", price: "3599", image: "images/Jasma Lehenga Set - XL _ 42.jpg"},
{name: "Kurta set", price: "2599", image: "images/Sue Mue Kavya Aari Work Kurta Set_ Aza Fashions.jpg"}
]
},
beauty: {
title: "💄 Beauty",
desc: "Cosmetics and skincare essentials",
products: [
{name: "Lipstick", price: "399", image: "images/download (12).jpg"},
{name: "Foundation", price: "669", image: "images/foundation.jpg"},
{name: "Mascara", price: "349", image: "images/Lash Sensational® Waterproof Mascara Eye Makeup - Maybelline.jpg"},
{name: "Nail Polish", price: "149", image: "images/download (13).jpg"}
]
},
footwear: {
title: "👠 Footwear",
desc: "Shoes and sneakers for every style",
products: [
{name: "Heels", price: "3559", image: "images/download (14).jpg"},
{name: "Sneakers", price: "5999", image: "images/New Balance 9060 “Workwear & Indigo”.jpg"},
{name: "Flats", price: "2490", image: "images/15 New-In Pieces From COS, Mango and H&M Everyone Will Mistake for Designer.jpg"},
{name: "Sandals", price: "1599", image: "images/Sloane Cream Vegan Leather Sandals - 39.jpg"}
]
},
handbags: {
title: "👜  Handbags",
desc: "Stylish handbags for every occasion",
products: [
{name: "Sling Bag", price: "2999", image: "images/download (17).jpg"},
{name: "Handbag", price: "3599", image: "images/download (15).jpg"},
{name: "Tote Bag", price: "899", image: "images/Resort and Beach Wear.jpg"},
{name: "shoulder bag", price: "1999", image: "images/download (16).jpg"}
]
},
accessories: {
title: "👜 Accessories",
desc: "Bags, belts, and more to complete your look",
products: [
{name: "earrings", price: "299", image: "images/download (18).jpg"},
{name: "Sunglasses", price: "1199", image: "images/download (19).jpg"},
{name: "Scarf", price: "499", image: "images/I Don't Sail, But TikTok's _.jpg"},
{name: "Belt", price: "599", image: "images/Brown Belt With Gold Buckle _ Color_ Brown_Gold _ Size_ Xs.jpg"}
]
},
sportswear: {
title: "🏃 Sportswear",
desc: "Active and athletic clothing for fitness",
products: [
{name: "Workout Top", price: "999", image: "images/download (20).jpg"},
{name: "Leggings", price: "1299", image: "images/download (22).jpg"},
{name: "Sports jacket", price: "2999", image: "images/Urban Outfitters Customer Login.jpg"},
{name: "Shorts", price: "599", image: "images/download (21).jpg"}
]
}
};

function goToCategory(category){
if(!categoryProducts[category]) return;
let categoryData = categoryProducts[category];
let categoryHeader = document.getElementById("categoryHeader");
let categoryTitle = document.getElementById("categoryTitle");
let categoryDesc = document.getElementById("categoryDesc");
let productsSection = document.getElementById("productsSection");

categoryTitle.innerText = categoryData.title;
categoryDesc.innerText = categoryData.desc;
categoryHeader.style.display = "block";
productsSection.innerHTML = "";

categoryData.products.forEach(product => {
let productDiv = document.createElement("div");
productDiv.classList.add("product");
productDiv.innerHTML = `
<img src="${product.image}" alt="${product.name}">
<h3>${product.name}</h3>
<p>₹${product.price}</p>
<button onclick="addToCart('${product.name}','${product.price}','${product.image}')">Add to Cart</button>
<button onclick="addToWishlist('${product.name}','${product.price}','${product.image}')">❤️ Wishlist</button>
`;
productsSection.appendChild(productDiv);
});

categoryHeader.scrollIntoView({behavior: 'smooth'});
}

// Profile Management
function toggleProfileMenu(){
let profileMenu = document.getElementById("profileMenu");
profileMenu.classList.toggle("active");
}

function checkUserLogin(){
let user = JSON.parse(localStorage.getItem("currentUser"));
let loginContent = document.getElementById("loginContent");
let userContent = document.getElementById("userContent");

if(user){
// User is logged in
loginContent.style.display = "none";
userContent.style.display = "block";
document.getElementById("userName").innerText = user.name || "User";
document.getElementById("userEmail").innerText = user.email || "N/A";
document.getElementById("userAddress").innerText = user.address || "Not Set";
} else {
// User is not logged in
loginContent.style.display = "block";
userContent.style.display = "none";
}
}

function goToLogin(){
window.location.href = "login.html";
}

function goToRegister(){
window.location.href = "register.html";
}

function logout(){
localStorage.removeItem("currentUser");
alert("You have been logged out!");
location.reload();
}

// Close profile menu when clicking outside
document.addEventListener("click", function(event){
let profileMenu = document.getElementById("profileMenu");
let profileBtn = document.querySelector(".profile-btn");
if(profileMenu && profileBtn && !profileMenu.contains(event.target) && !profileBtn.contains(event.target)){
profileMenu.classList.remove("active");
}
});

// Cart Management
function addToCart(name, price, image){

let cart = JSON.parse(localStorage.getItem("cart")) || [];

cart.push({
name:name,
price:price,
image:image
});

localStorage.setItem("cart", JSON.stringify(cart));

alert(name + " added to cart!");

}

// Wishlist Management
function addToWishlist(name, price, image){

let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

wishlist.push({
name:name,
price:price,
image:image
});

localStorage.setItem("wishlist", JSON.stringify(wishlist));

alert(name + " added to wishlist!");

}

// Initialize profile menu on page load
window.addEventListener("DOMContentLoaded", function(){
checkUserLogin();
});