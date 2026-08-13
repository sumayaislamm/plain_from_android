fetch("./components/navbar.html")
    .then(response => {

        if (!response.ok) {
            throw new Error("Navbar file could not be loaded");
        }

        return response.text();
    })

    .then(html => {

        const container =
            document.getElementById("navbar-container");

        if (container) {
            container.innerHTML = html;
        }


        /* =========================
           SECTION ACCORDION
        ========================= */

        const sectionButtons =
            document.querySelectorAll(".section-toggle");

        sectionButtons.forEach(button => {

            button.addEventListener("click", () => {

                const section =
                    button.closest(".nav-section");

                section.classList.toggle("open");

            });

        });


        /* =========================
           MOBILE MENU
        ========================= */

        const menuButton =
            document.getElementById("mobileMenuBtn");

        const sidebar =
            document.getElementById("sidebar");

        const overlay =
            document.getElementById("sidebarOverlay");


        function closeSidebar() {

            sidebar.classList.remove("open");

            overlay.classList.remove("active");
        }


        if (menuButton && sidebar) {

            menuButton.addEventListener("click", () => {

                sidebar.classList.toggle("open");

                overlay.classList.toggle("active");

            });

        }


        if (overlay) {

            overlay.addEventListener(
                "click",
                closeSidebar
            );

        }


        /* Close mobile sidebar
           when a link is clicked */

        const navLinks =
            document.querySelectorAll(".nav-link");

        navLinks.forEach(link => {

            link.addEventListener("click", () => {

                if (
                    window.innerWidth <= 900
                ) {
                    closeSidebar();
                }

            });

        });

    })

    .catch(error => {

        console.error(
            "Navbar Error:",
            error
        );

        const container =
            document.getElementById("navbar-container");

        if (container) {
            container.innerHTML = "";
        }

    });