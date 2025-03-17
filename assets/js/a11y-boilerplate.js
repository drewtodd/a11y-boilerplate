// A11y Boilerplate JavaScript
// Ensuring WCAG 2.1 AA Compliance

document.addEventListener("DOMContentLoaded", function () {
    // Skip Link Focus Handling
    const skipLink = document.querySelector(".skip-link");
    if (skipLink) {
        skipLink.addEventListener("focus", function () {
            this.style.top = "10px";
        });

        skipLink.addEventListener("blur", function () {
            this.style.top = "-40px";
        });
    }

    // Accessible Navigation Toggle for Mobile
    const navToggle = document.querySelector(".nav-toggle");
    const navMenu = document.querySelector("nav");

    if (navToggle && navMenu) {
        navToggle.addEventListener("click", function () {
            const isExpanded = navToggle.getAttribute("aria-expanded") === "true";
            navToggle.setAttribute("aria-expanded", !isExpanded);
            navMenu.classList.toggle("nav-open");
        });

        // Close menu when clicking outside
        document.addEventListener("click", function (event) {
            if (!navMenu.contains(event.target) && !navToggle.contains(event.target)) {
                navMenu.classList.remove("nav-open");
                navToggle.setAttribute("aria-expanded", "false");
            }
        });

        // Close menu on Escape key
        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape") {
                navMenu.classList.remove("nav-open");
                navToggle.setAttribute("aria-expanded", "false");
            }
        });
    }

    // Enhance Focus Management
    const interactiveElements = document.querySelectorAll("a, button, input, textarea, select");
    interactiveElements.forEach((el) => {
        el.addEventListener("focus", function () {
            this.classList.add("focused");
        });

        el.addEventListener("blur", function () {
            this.classList.remove("focused");
        });
    });

    // Improve Keyboard Navigation for Dropdowns
    document.querySelectorAll(".dropdown").forEach((dropdown) => {
        const trigger = dropdown.querySelector(".dropdown-toggle");

        if (trigger) {
            trigger.addEventListener("keydown", function (event) {
                if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    const expanded = trigger.getAttribute("aria-expanded") === "true";
                    trigger.setAttribute("aria-expanded", !expanded);
                    dropdown.classList.toggle("open");
                }
            });

            // Close dropdown on Escape key
            document.addEventListener("keydown", function (event) {
                if (event.key === "Escape" && dropdown.classList.contains("open")) {
                    dropdown.classList.remove("open");
                    trigger.setAttribute("aria-expanded", "false");
                    trigger.focus();
                }
            });
        }
    });
});
