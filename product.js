<script>
const WHATSAPP = "923152950176";

const products = [
  { 
    id: 1,
    name: "Chocolate Bouquet",
    price: 12000,
    desc: "Sweetness Wrapped In Love",
    fullDesc: "A premium handcrafted chocolate bouquet designed for gifting on birthdays, anniversaries, and special occasions.",
    img: "product1.jpg",
    category: ["Women", "Men"],
    included: "Nutella, Kinder Joy, Lots Of Chocolates"
  },
  { 
    id: 2,
    name: "Makeup Bouquet",
    price: 8000,
    desc: "Perfect Gift For Beauty Lover",
    fullDesc: "A beautifully arranged makeup bouquet curated for beauty enthusiasts who love elegant and thoughtful gifts.",
    img: "product2.jpg",
    category: ["Women"],
    included: "Makeup items arranged in bouquet style"
   },
  {
  id: 3,
  name: "12 Pair Jhumka Bouquet",
  price: 7000,
  desc: "Perfect Gift For Every Occasion",
  fullDesc: "A beautifully arranged bouquet featuring 12 elegant pairs of jhumkas, making it a unique and memorable gift for every special occasion.",
  img: "product3.jpg",
  category: ["Women"]
},
{
  id: 4,
  name: "Premium Gift Box For Him",
  price: 12000,
  desc: "Gift Him Something Truly Special",
  fullDesc: "A thoughtfully curated premium gift box filled with stylish essentials and treats to make him feel truly special.",
  img: "product4.jpg",
  category: ["Men"],
  included: "Zellbury shirt, wallet, Axe body spray, chocolates, cards, bobo balloon"
},
{
  id: 5,
  name: "Baby Girl Basket",
  price: 8000,
  desc: "Welcome Your Baby Girl With Love",
  fullDesc: "A charming baby girl basket packed with quality essentials to celebrate the arrival of your little princess.",
  img: "product5.jpg",
  category: ["Baby Girl"],
  included: "3 suits, 1 pair shoes, 1 skin care kit, 1 rattle set (best quality)"
},
{
  id: 6,
  name: "Baby Girl Box",
  price: 6000,
  desc: "Welcome Your Baby Girl With Love",
  fullDesc: "A lovely gift box containing newborn essentials, perfect for warmly welcoming a baby girl.",
  img: "product6.jpg",
  category: ["Baby Girl"],
  included: "3 suits, 1 pair shoes, 1 feeder, 1 wipes set (normal quality)"
},
{
  id: 7,
  name: "Mother's Day Basket",
  price: 7000,
  desc: "Made With Love Just For Mom",
  fullDesc: "A special Mother's Day basket carefully crafted with love to make every mom feel appreciated and cherished.",
  img: "product7.jpg",
  category: ["Women"]
},
{
  id: 8,
  name: "Hijabi Bouquet",
  price: 7000,
  desc: "A Graceful Gift With A Touch Of Style",
  fullDesc: "An elegant bouquet designed for hijabis, combining beauty, style, and thoughtful gifting in one arrangement.",
  img: "product8.jpg",
  category: ["Women"]
},
{
  id: 9,
  name: "Handmade Flowers Bouquet",
  price: 1500,
  desc: "Forever Flowers, Crafted With Love",
  fullDesc: "A handcrafted flower bouquet designed to stay beautiful forever, making every moment memorable.",
  img: "product9.jpg",
  category: ["Women", "Men"]
},
{
  id: 10,
  name: "Umrah Package",
  price: 20000,
  desc: "The Most Meaningful Gift Of A Lifetime",
  fullDesc: "A thoughtful Umrah-themed gift package created to celebrate and honor a spiritually meaningful journey.",
  img: "product10.jpg",
  category: ["Women", "Men"]
},
{
  id: 11,
  name: "Baby Girl Basket",
  price: 10000,
  desc: "Welcome Your Baby Girl With Love",
  fullDesc: "A premium baby girl basket featuring carefully selected essentials and gifts for a joyful welcome.",
  img: "product11.jpg",
  category: ["Baby Girl"]
},
{
  id: 12,
  name: "Baby Box",
  price: 4000,
  desc: "A Gentle Welcome For Your Little One",
  fullDesc: "A budget-friendly baby box filled with essentials to celebrate the arrival of a precious newborn.",
  img: "product12.jpg",
  category: ["Baby Girl"]
},
{
  id: 13,
  name: "Handmade Flowers Bouquet",
  price: 1500,
  desc: "Forever Flowers, Crafted With Love",
  fullDesc: "A timeless handmade flower bouquet crafted with care to create lasting memories.",
  img: "product13.jpg",
  category: ["Women", "Men"]
},
{
  id: 14,
  name: "Baby Boy Basket",
  price: 15000,
  desc: "Welcome Your Baby Boy With Love",
  fullDesc: "A luxury baby boy basket packed with premium essentials and gifts for your little prince.",
  img: "product14.jpg",
  category: ["Baby Boy"]
},
{
  id: 15,
  name: "Baby Girl Basket",
  price: 6500,
  desc: "Welcome Your Baby Girl With Love",
  fullDesc: "A beautifully arranged baby girl basket designed to celebrate the newest member of the family.",
  img: "product15.jpg",
  category: ["Baby Girl"]
},
{
  id: 16,
  name: "Kitkat Chocolate Bouquet",
  price: 6000,
  desc: "Sweetness Wrapped In Love",
  fullDesc: "A delightful bouquet made with KitKat chocolates, perfect for sharing sweetness on special occasions.",
  img: "product16.jpg",
  category: ["Women", "Men"]
},
{
  id: 17,
  name: "Handmade Flowers Bouquet",
  price: 5000,
  desc: "Forever Flowers, Crafted With Love",
  fullDesc: "A premium handmade flower bouquet designed with artistic detail and lasting beauty.",
  img: "product17.jpg",
  category: ["Women", "Men"]
},
{
  id: 18,
  name: "Basket For Him",
  price: 15000,
  desc: "Gift Him Something Truly Special",
  fullDesc: "A premium gift basket for men filled with carefully selected items to make every occasion unforgettable.",
  img: "product18.jpg",
  category: ["Men"]
},
{
  id: 19,
  name: "Valentine Heart Shape Bouquet",
  price: 3000,
  desc: "Forever Flowers, Crafted With Love",
  fullDesc: "A romantic heart-shaped bouquet designed to express love and affection on Valentine's Day.",
  img: "product19.jpg",
  category: ["Women", "Men"]
},
{
  id: 20,
  name: "Glam Box",
  price: 27000,
  desc: "Perfect Gift For Beauty Lover",
  fullDesc: "A luxurious beauty gift box packed with premium products for anyone who loves glamour and self-care.",
  img: "product20.jpg",
  category: ["Women"]
},
{
  id: 21,
  name: "Hamper For Baby Girl",
  price: 3500,
  desc: "A Curated Hamper Full Of Delight",
  fullDesc: "A delightful hamper filled with thoughtful gifts and essentials for a precious baby girl.",
  img: "product21.jpg",
  category: ["Women", "Baby Girl"]
},
{
  id: 22,
  name: "New Year Deal",
  price: 5000,
  desc: "Make Her New Year Extra Memorable",
  fullDesc: "A festive New Year gift arrangement designed to bring joy and memorable moments.",
  img: "product22.jpg",
  category: ["Women"]
},
{
  id: 23,
  name: "Small Eidi Envelopes",
  price: 100,
  desc: "Spread Joy With Beautifully Crafted Eidi Envelopes",
  fullDesc: "Beautifully designed Eidi envelopes that add a special touch to Eid celebrations.",
  img: "product23.jpg",
  category: ["Women", "Baby Girl"]
},
{
  id: 24,
  name: "Baby Girl Basket",
  price: 18000,
  desc: "Welcome Your Baby Girl With Love",
  fullDesc: "A luxury baby girl basket featuring premium essentials and beautiful gifts for newborn celebrations.",
  img: "product24.jpg",
  category: ["Baby Girl"]
},
{
  id: 25,
  name: "Each Customize Hanger",
  price: 250,
  desc: "Custom Designs Made Just For You",
  fullDesc: "Personalized hangers customized with names and designs, perfect for baby gifts and keepsakes.",
  img: "product25.jpg",
  category: ["Baby Girl", "Baby Boy"]
},
{
  id: 26,
  name: "Basket For Her",
  price: 5000,
  desc: "Elegance, Love & Gifts In One Basket",
  fullDesc: "An elegant gift basket thoughtfully arranged with love and beautiful surprises for her.",
  img: "product26.jpg",
  category: ["Women"]
},
{
  id: 27,
  name: "Baby Boy Basket",
  price: 7000,
  desc: "Welcome Your Baby Boy With Love",
  fullDesc: "A charming baby boy basket designed to celebrate the arrival of your little bundle of joy.",
  img: "product27.jpg",
  category: ["Baby Boy"]
},
{
  id: 28,
  name: "Craving Basket",
  price: 8500,
  desc: "Perfect For The Foodie At Heart",
  fullDesc: "A deliciously curated basket filled with treats and goodies for food lovers.",
  img: "product28.jpg",
  category: ["Women", "Men"]
},
{
  id: 29,
  name: "Birthday Deal",
  price: 7500,
  desc: "Surprise Your Loved Ones On Their Birthday",
  fullDesc: "A birthday gift arrangement designed to create unforgettable celebrations and happy memories.",
  img: "product29.jpg",
  category: ["Women", "Men"]
},
{
  id: 30,
  name: "Customize Basket",
  price: 5000,
  desc: "Elegant, Love & Gifts In Just One Basket",
  fullDesc: "A customizable gift basket tailored to your preferences, making every gift truly personal.",
  img: "product30.jpg",
  category: ["Women"]
},
{
  id: 31,
  name: "Scrap Book",
  price: 5000,
  desc: "Handmade With Love, Filled With Memories",
  fullDesc: "A handmade scrapbook crafted to preserve your precious memories in a beautiful and creative way.",
  img: "product31.jpg",
  category: ["Women"]
},
{
  id: 32,
  name: "Valentine Bouquet",
  price: 4500,
  desc: "One Bouquet, Countless Smiles",
  fullDesc: "A romantic bouquet designed to brighten hearts and create special Valentine's memories.",
  img: "product32.jpg",
  category: ["Women", "Men"]
},
{
  id: 33,
  name: "Lollipop Bouquet",
  price: 4000,
  desc: "A Cute Bouquet For Sweet Surprises",
  fullDesc: "A colorful bouquet made with delicious lollipops, perfect for kids and sweet celebrations.",
  img: "product33.jpg",
  category: ["Baby Girl", "Baby Boy"]
},
{
  id: 34,
  name: "Customize Box",
  price: 2500,
  desc: "Personalized Gifts That Feel Extra Special",
  fullDesc: "A customizable gift box designed to add a personal touch to every occasion.",
  img: "product34.jpg",
  category: ["Men"]
},
{
  id: 35,
  name: "Luxury Basket",
  price: 5500,
  desc: "Sweet Little Luxuries For Someone Special",
  fullDesc: "A stylish luxury basket filled with elegant gifts and thoughtful surprises for loved ones.",
  img: "product35.jpg",
  category: ["Women"]
},
{
  id: 36,
  name: "Luxury Box",
  price: 6500,
  desc: "Gift Him Something Truly Special",
  fullDesc: "A premium luxury gift box featuring elegant accessories and carefully selected items for him.",
  img: "product36.jpg",
  category: ["Men"],
  included: "Shawl, dress, ring with box, wallet, wallet card"
}
],  
 
</script>

