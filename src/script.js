const whatsappNumber = "+6285185079209";

const products = {
    pdh: {
        title: "PDH Kerah Hitam",
        price: "Harga Mulai Rp 100.000",
        description:
            "Seragam dinas premium yang dibuat menggunakan material pilihan dengan kualitas terbaik untuk memberikan kenyamanan, ketahanan, dan tampilan profesional. Dikerjakan dengan jahitan presisi serta finishing rapi pada setiap detail. Tersedia layanan custom bordir nama, logo instansi, maupun identitas sesuai request pelanggan. Pilihan model tersedia lengkap mulai dari pria lengan panjang, pria lengan pendek, wanita lengan panjang, wanita lengan pendek, kerah rebah premium, hingga tunik wanita.Untuk informasi ukuran, detail produk, maupun kebutuhan custom khusus, silakan konsultasikan langsung melalui WhatsApp bersama tim kami.",
        video: ["../assets/products/pdh/pdh.mp4",],
        images: [
            "../assets/products/pdh/pria-panjang.png",
            "../assets/products/pdh/pria-pendek.png",
            "../assets/products/pdh/wanita-panjang.png",
            "../assets/products/pdh/wanita-pendek.png",
            "../assets/products/pdh/kopnat.png",
            "../assets/products/pdh/tunik.png",
            "../assets/products/pdh/bordir.png",
        ],
    },

    kemenag: {
        title: "PDH Kementrian Agama",
        price: "Harga Mulai Rp 100.000",
        description:
            "PDH Kementrian Agama premium yang dirancang dengan material pilihan untuk menghadirkan kenyamanan, tampilan formal, dan kesan profesional. Setiap produk dibuat dengan jahitan presisi serta finishing rapi untuk memastikan kualitas terbaik. Tersedia layanan custom bordir nama, logo, maupun identitas sesuai request pelanggan. Pilihan model tersedia dalam varian pria, wanita, dan tunik wanita. Untuk informasi ukuran, detail produk, serta kebutuhan custom khusus, silakan konsultasikan langsung melalui WhatsApp bersama tim kami.",
        video: ["../assets/products/kemenag/kemenag.mp4"],
        images: [
            "../assets/products/kemenag/kmg-pria.png",
            "../assets/products/kemenag/kmg-wanita.png",
            "../assets/products/kemenag/tunik-kmg.png",
            "../assets/products/kemenag/kmg.png",
            "../assets/products/kemenag/bordir.png",
        ],
    },

    pemda: {
        title: "PDH Pemerintah Daerah",
        price: "Harga Mulai Rp 150.000",
        description:
            "Seragam Pemerintah Daerah premium yang dirancang khusus untuk kebutuhan instansi pemerintahan dengan material berkualitas yang nyaman digunakan untuk aktivitas kerja sehari-hari. Dikerjakan dengan jahitan rapi dan presisi pada setiap detail untuk memberikan tampilan formal, profesional, dan elegan. Tersedia dalam pilihan warna khaki tua dan khaki muda dengan model pria dan wanita. Untuk informasi ukuran, detail produk, maupun konsultasi pemesanan, silakan hubungi kami melalui WhatsApp agar kami dapat membantu merekomendasikan size yang paling sesuai dengan kebutuhan Anda.",
        video: ["../assets/products/pemda/pemda.mp4"],
        images: [
            "../assets/products/pemda/pemda1.png",
            "../assets/products/pemda/pemda2.png",
            "../assets/products/pemda/pemda-tua.png",
            "../assets/products/pemda/pemda-muda.png",
        ],
    },

    korpri: {
        title: "Batik Korpri Kerah Hitam",
        price: "Harga Mulai Rp 130.000",
        description:
            "Batik Korpri kerah hitam resmi dengan material berkualitas yang adem, nyaman, dan cocok digunakan untuk aktivitas kerja maupun acara formal. Dikerjakan dengan jahitan rapi dan presisi pada setiap detail untuk menghadirkan tampilan yang elegan, profesional, dan berkelas. Varian model tersedia lengkap meliputi pria tanpa lapis furing, pria lapis furing, wanita tanpa lapis furing, wanita lapis furing, serta blazer wanita. Untuk informasi ukuran, detail produk, maupun konsultasi pemesanan, silakan hubungi kami melalui WhatsApp agar kami dapat membantu merekomendasikan size yang paling sesuai.",
        video: ["../assets/products/korpri/korpri.mp4"],
        images: [
            "../assets/products/korpri/korpri1.png",
            "../assets/products/korpri/korpri2.png",
            "../assets/products/korpri/korpri3.png",
            "../assets/products/korpri/korpri4.png",
        ],
    },

    pgri: {
        title: "Batik PGRI Kusuma Bangsa",
        price: "Harga Mulai Rp 130.000",
        description:
            "Batik PGRI Kusuma Bangsa premium dengan material berkualitas yang nyaman digunakan untuk aktivitas kerja sehari-hari maupun kegiatan formal. Dikerjakan dengan jahitan rapi dan finishing presisi pada setiap detail untuk menghadirkan tampilan yang profesional, elegan, dan berkelas. Dirancang untuk memberikan kenyamanan serta daya tahan yang optimal dalam penggunaan jangka panjang. Untuk informasi ukuran, detail produk, maupun konsultasi pemesanan, silakan hubungi kami melalui WhatsApp agar kami dapat membantu merekomendasikan size yang paling sesuai.",
        video: ["../assets/products/pgri/pgri.mp4"],
        images: [
            "../assets/products/pgri/pgri1.png",
            "../assets/products/pgri/pgri-pria.png",
            "../assets/products/pgri/pgri-wanita.png",
            "../assets/products/pgri/blazer-pgri.png",
        ],
    },

    sd: {
        title: "Seragam Anak Sekolah Dasar",
        price: "Harga Mulai Rp 70.000",
        description:
            "Seragam Sekolah Dasar premium dengan material berkualitas yang nyaman digunakan untuk aktivitas belajar sehari-hari. Dikerjakan dengan jahitan rapi dan bahan yang nyaman dipakai agar tetap mendukung aktivitas anak sepanjang hari. Tersedia dalam varian seragam laki-laki dan perempuan, serta dapat dibeli dalam set lengkap maupun secara ecer seperti atasan saja atau bawahan saja sesuai kebutuhan. Untuk informasi ukuran, detail produk, maupun konsultasi pemesanan, silakan hubungi kami melalui WhatsApp agar kami dapat membantu merekomendasikan size yang paling sesuai..",
        video: ["../assets/products/sd/sd.mp4"],
        images: [
            "../assets/products/sd/sd1.png",
            "../assets/products/sd/sd2.png",
            "../assets/products/sd/sd3.png",
            "../assets/products/sd/sd4.png",
            "../assets/products/sd/sd5.png",
        ],
    }
};

const modal = document.getElementById("productModal");
const modalTitle = document.getElementById("modalTitle");
const modalPrice = document.getElementById("modalPrice");
const modalDescription = document.getElementById("modalDescription");
const mediaViewer = document.getElementById("mediaViewer");
const modalImage = document.getElementById("modalImage");
const closeModal = document.getElementById("closeModal");
const thumbnailContainer = document.getElementById("thumbnailContainer");
const waButton = document.getElementById("waButton");
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

document.querySelectorAll(".detail-btn").forEach((button) => {
    button.addEventListener("click", () => {
        const key = button.dataset.product;
        const product = products[key];

        modalTitle.textContent = product.title;
        modalPrice.textContent = product.price;
        modalDescription.textContent = product.description;
        const message =
            `Halo kak, saya tertarik dengan produk ${product.title}. ` +
            `Mohon info detail harga, ukuran, dan ketersediaannya.`;

        waButton.href =
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        modalImage.src = product.images[0];
        mediaViewer.innerHTML = `
  <img
    id="modalImage"
    src="${product.images[0]}"
    class="w-full h-full object-contain"
  >
`;

        thumbnailContainer.innerHTML = "";

        product.images.forEach((image) => {
            const thumb = document.createElement("img");

            thumb.src = image;
            thumb.className =
                "w-20 h-20 object-cover rounded-xl cursor-pointer border";

            thumb.onclick = () => {
                mediaViewer.innerHTML = `
        <img src="${image}" class="w-full h-full object-contain">
    `;
            };

            thumbnailContainer.appendChild(thumb);
        });

        if (product.video) {
            const videoThumb = document.createElement("div");

            videoThumb.className =
                "w-20 h-20 rounded-xl border cursor-pointer overflow-hidden relative shrink-0 bg-gray-200";

            videoThumb.innerHTML = `
    <div class="w-full h-full flex items-center justify-center text-3xl">
        ▶
    </div>
`;

            videoThumb.onclick = () => {
                mediaViewer.innerHTML = `
      <video controls autoplay class="w-full h-full object-contain">
        <source src="${product.video}" type="video/mp4">
      </video>
    `;
            };

            thumbnailContainer.appendChild(videoThumb);
        }

        modal.classList.remove("hidden");
        document.body.style.overflow = "hidden";
    });
});

closeModal.addEventListener("click", () => {
    modal.classList.add("hidden");
    document.body.style.overflow = "auto";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.add("hidden");
        document.body.style.overflow = "auto";
    }
});

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});