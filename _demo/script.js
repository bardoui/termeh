document.querySelectorAll("tr").forEach((i) => {
    i.addEventListener("click", (e) => {
        i.classList.toggle("is-expanded");
    });
});
