const products = [
  {
    name: "Black T-Shirt",
    price: "$20",
    category: "fashion",
    image: "https://picsum.photos/400/300?random=1",
  },
  {
    name: "Minimal Watch",
    price: "$120",
    category: "accessories",
    image: "https://picsum.photos/400/300?random=2",
  },
  {
    name: "Wireless Headphone",
    price: "$99",
    category: "tech",
    image: "https://picsum.photos/400/300?random=3",
  },
  {
    name: "Black Hoodie",
    price: "$45",
    category: "fashion",
    image: "https://picsum.photos/400/300?random=4",
  },
];

const catalog = document.getElementById("catalog");
const filterButtons = document.querySelectorAll(".filter-btn");

function renderProducts(category) {
  catalog.innerHTML = "";

  const filtered =
    category === "all"
      ? products
      : products.filter((p) => p.category === category);

  filtered.forEach((product, index) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${product.image}" />
      <div class="card-content">
        <div class="card-title">${product.name}</div>
        <div class="card-price">${product.price}</div>
      </div>
    `;

    catalog.appendChild(card);

    setTimeout(() => {
      card.classList.add("show");
    }, index * 100);
  });
}

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".active").classList.remove("active");
    btn.classList.add("active");

    renderProducts(btn.dataset.category);
  });
});

const slides = document.querySelectorAll(".slide");
let current = 0;

function showSlide(index) {
  slides.forEach((s) => s.classList.remove("active"));
  slides[index].classList.add("active");
}

document.querySelector(".next").onclick = () => {
  current = (current + 1) % slides.length;
  showSlide(current);
};

document.querySelector(".prev").onclick = () => {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
};

setInterval(() => {
  current = (current + 1) % slides.length;
  showSlide(current);
}, 4000);

renderProducts("all");
