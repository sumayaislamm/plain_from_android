fetch("./components/navbar.html")
    .then(response => {
        if (!response.ok) {
            throw new Error("Navbar file could not be loaded");
        }

        return response.text();
    })
    .then(html => {
        const container = document.getElementById("navbar-container");

        if (container) {
            container.innerHTML = html;
        }

        const menuButton = document.getElementById("mobileMenuBtn");
        const sidebar = document.getElementById("sidebar");

        if (menuButton && sidebar) {
            menuButton.addEventListener("click", () => {
                sidebar.classList.toggle("open");
            });
        }
    })
    .catch(error => {
        console.error("Navbar Error:", error);

        const container = document.getElementById("navbar-container");

        if (container) {
            container.innerHTML = "";
        }
    });