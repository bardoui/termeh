document.querySelectorAll("tr").forEach((i) => {
    i.addEventListener("click", (e) => {
        i.classList.toggle("is-expanded");
    });
});

const button = document.getElementById("val-button");
const field = document.getElementById("val-field");
button.addEventListener("click", (e) => {
    field.classList.toggle("is-failed");
    e.preventDefault();
});
