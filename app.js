const accordionTitles = document.querySelectorAll(".accordion-title");

accordionTitles.forEach((accordionTitle) => {
    accordionTitle.addEventListener('click', () => {
        accordionTitle.classList.toggle("active-header")
    });
});