fetch("navbar.html")
.then(response => response.text())
.then(data => {

    document.getElementById("navbar-container").innerHTML = data;

    const menuButton =
        document.getElementById("mobileMenuBtn");

    const sidebar =
        document.getElementById("sidebar");

    if (menuButton && sidebar) {

        menuButton.addEventListener("click", () => {
            sidebar.classList.toggle("open");
        });

    }

})
.catch(error => {
    console.error("Navbar loading failed:", error);
});