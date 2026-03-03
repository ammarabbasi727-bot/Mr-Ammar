let image = document.getElementById("myImage");
let showBtn = document.getElementById("showBtn");
let hideBtn = document.getElementById("hideBtn");

showBtn.onclick = function() {
    image.classList.remove("hidden");
    image.classList.add("show");

    showBtn.style.display = "none";
    hideBtn.style.display = "inline";
};

hideBtn.onclick = function() {
    image.classList.remove("show");
    image.classList.add("hidden");

    showBtn.style.display = "inline";
    hideBtn.style.display = "none";
};