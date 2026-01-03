const pages = document.querySelectorAll(".page");
const navLinks = document.querySelectorAll(".nav-link");

let currentPage = 0; // مصدر الحقيقة



function showPage(index) {
    pages.forEach(page => page.classList.remove("active"));
    navLinks.forEach(link => link.classList.remove("active"));

    pages[index].classList.add("active");
    navLinks[index].classList.add("active");

    currentPage = index; // ← هذا السطر مهم جدًا
    updateButtons();
}

// إذا زر يعمل بالكود لكنه لا يستجيب →
//header,.pageا ما حدث في  JSابحثي عن عنصر يغطيه وليس عن خطأ  
// التنقل من المنيو
navLinks.forEach((link, index) => {
    link.addEventListener("click", () => {
        showPage(index);
    });
});

// التنقل بالضغط على التالي و السابق
document.getElementById("next").onclick = () => {
    if (currentPage < pages.length - 1) {
        currentPage++;
        showPage(currentPage );
    }
};

document.getElementById("prev").onclick = () => {
    if (currentPage > 0) {
        currentPage--;
        showPage(currentPage );
    }
};
// اختفاء كبسة التالي في اخر صفحه
function updateButtons() {
    document.getElementById("prev").style.display =
        currentPage === 0 ? "none" : "inline-block";

    document.getElementById("next").style.display =
        currentPage === pages.length - 1 ? "none" : "inline-block";
}


// صور شهادات دورات تتوقف عند اقتراب السهم
const carousel = document.querySelector(".carousel");

carousel.addEventListener("mouseenter", () => {
  carousel.style.animationPlayState = "paused";
});

carousel.addEventListener("mouseleave", () => {
  carousel.style.animationPlayState = "running";
});

// تحرك الصور في صفحة الفنون
document.querySelectorAll('.paint-blob').forEach(blob => {
    const images = blob.querySelectorAll('.art-image');
    let index = 0;

    setInterval(() => {
        images[index].classList.remove('active');
        index = (index + 1) % images.length;
        images[index].classList.add('active');
    }, 3000); // كل 3 ثوانٍ
});
