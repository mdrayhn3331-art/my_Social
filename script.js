// Loading Screen
window.addEventListener("load", () => {

    setTimeout(() => {

        const loader = document.querySelector(".loader");

        loader.style.opacity = "0";
        loader.style.transition = "0.8s";
        loader.style.pointerEvents = "none";

        setTimeout(() => {
            loader.style.display = "none";
        }, 800);

    }, 4000);

});


// Copy Link Button
function copyLink() {

    navigator.clipboard.writeText(window.location.href)

    .then(() => {
        alert("✅ Link copied successfully!");
    })

    .catch(() => {
        alert("❌ Copy failed.");
    });

}


// Button Click Animation
document.querySelectorAll("a").forEach(btn => {

    btn.addEventListener("click", function () {

        this.style.transform = "scale(0.95)";

        setTimeout(() => {

            this.style.transform = "";

        },150);

    });

});
