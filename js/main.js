// Sayfa linkleri için aktif class
const currentPath = window.location.pathname;
document.querySelectorAll('.nav-link').forEach(link => {
    if (link.getAttribute('href') && currentPath.endsWith(link.getAttribute('href'))) {
        link.classList.add('active');
    }
});

// Slider
document.addEventListener("DOMContentLoaded", function () {
    const contentWrapper = document.querySelector(".most-populars");
    const contents = contentWrapper.querySelectorAll(".content");
    const leftBtn = contentWrapper.querySelector(".left-icon-wrapper-left");
    const rightBtn = contentWrapper.querySelector(".left-icon-wrapper-right");
    const dots = contentWrapper.querySelectorAll(".dot");

    const itemsPerPage = 4;
    let currentPage = 0;
    const totalPages = Math.ceil(contents.length / itemsPerPage);

    function updateSlider() {
        contents.forEach((item, index) => {
            item.style.display =
                index >= currentPage * itemsPerPage &&
                index < (currentPage + 1) * itemsPerPage
                    ? "block"
                    : "none";
        });

        dots.forEach((dot, index) => {
            dot.classList.toggle("active", index === currentPage);
        });
    }

    leftBtn.addEventListener("click", () => {
        currentPage = (currentPage - 1 + totalPages) % totalPages;
        updateSlider();
    });

    rightBtn.addEventListener("click", () => {
        currentPage = (currentPage + 1) % totalPages;
        updateSlider();
    });

    updateSlider(); // Sayfa yüklendiğinde
});
