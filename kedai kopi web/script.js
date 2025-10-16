// Navigasi antar section
const navLinks = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("section");
const btnScroll = document.getElementById("btn-scroll");

function showSection(id) {
  sections.forEach((sec) => sec.classList.remove("aktif"));
  document.getElementById(id).classList.add("aktif");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    showSection(link.dataset.section);
  });
});

if (btnScroll) {
  btnScroll.addEventListener("click", () => showSection("menu"));
}

// Data produk
const produkList = [
  {
    nama: "Espresso",
    harga: 12000,
    img: "https://i.pinimg.com/736x/f0/65/5f/f0655f2737da76be9b4ac435c65e3d9b.jpg",
  },
  {
    nama: "Americano",
    harga: 15000,
    img: "https://i.pinimg.com/1200x/bc/0c/ff/bc0cffc8b21c24b4b571e98b9ab5da12.jpg",
  },
  {
    nama: "Cappuccino",
    harga: 18000,
    img: "https://i.pinimg.com/1200x/9d/88/b1/9d88b1aff2041fe5095d8fa1eea8977f.jpg",
  },
  {
    nama: "Latte",
    harga: 18000,
    img: "https://i.pinimg.com/1200x/36/8c/d2/368cd29f3543ea79e01f921e968030e4.jpg",
  },
  {
    nama: "Macchiato",
    harga: 20000,
    img: "https://i.pinimg.com/1200x/15/64/e0/1564e0b50862040029cc4270e2f70a12.jpg",
  },
  {
    nama: "Mocha",
    harga: 20000,
    img: "https://i.pinimg.com/1200x/f0/71/9f/f0719ffc75c241e47f97a528b9673e92.jpg",
  },
  {
    nama: "Flat White",
    harga: 20000,
    img: "https://www.putrafarmayogyakarta.co.id/wp-content/uploads/2024/07/kopi-flat-white-adalah.jpg",
  },
  {
    nama: "Ropang Coklat",
    harga: 18000,
    img: "https://a-cdn.sindonews.net/dyn/620/content/2019/06/19/185/1412769/begini-cara-membuat-ropang-cokelat-keju-yang-hangat-dan-lezat-lRY-thumb.jpg",
  },
  {
    nama: "Ropang Keju",
    harga: 18000,
    img: "https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/6ee7f860-9a30-4dcc-9a27-ac702d40df57_Go-Biz_20240211_150110.jpeg",
  },
  {
    nama: "Roti Salad",
    harga: 22000,
    img: "https://asset.kompas.com/crops/UZ2o039VgvK6dPQtVRBLqzvFdxY=/0x5:968x651/1200x800/data/photo/2022/05/13/627de3c4da550.jpg",
  },
];

const daftarDiv = document.getElementById("daftar-produk");
const isiKeranjang = document.getElementById("isi-keranjang");
const totalSpan = document.getElementById("total");

let total = 0;

// Fungsi menampilkan produk
produkList.forEach((p) => {
  const div = document.createElement("div");
  div.classList.add("produk-item");
  div.innerHTML = `
    <img src="${p.img}" alt="${p.nama}">
    <h4>${p.nama}</h4>
    <p>Rp ${p.harga.toLocaleString("id-ID")}</p>
    <button>Tambah</button>
  `;
  div
    .querySelector("button")
    .addEventListener("click", () => tambahKeKeranjang(p));
  daftarDiv.appendChild(div);
});

// Fungsi tambah ke keranjang
function tambahKeKeranjang(p) {
  const item = document.createElement("p");
  item.textContent = `${p.nama} - Rp ${p.harga.toLocaleString("id-ID")}`;
  isiKeranjang.appendChild(item);
  total += p.harga;
  totalSpan.textContent = total.toLocaleString("id-ID");
}

// Tombol reset keranjang
document.getElementById("btn-reset").addEventListener("click", () => {
  isiKeranjang.innerHTML = "";
  total = 0;
  totalSpan.textContent = 0;
  document.getElementById("hasil-checkout").innerHTML = "";
});

// Tombol checkout
document.getElementById("btn-checkout").addEventListener("click", () => {
  const voucher = document.getElementById("voucher").value.trim();
  let diskon = 0;
  if (voucher === "NGOPI10") diskon = 0.1;

  const totalBayar = total - total * diskon;

  document.getElementById("hasil-checkout").innerHTML = `
    <p>☕ Terima kasih telah berbelanja!<br>
    <strong>Total Akhir: Rp ${totalBayar.toLocaleString("id-ID")}</strong></p>
  `;
});
