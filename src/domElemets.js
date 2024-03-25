export default class Nav {
    body = document.querySelector("body");
    constructor() {
        this.state = false;
        this.nav = document.createElement("nav");
        this.homeButton = document.createElement("button");
        this.menuButton = document.createElement("button");
        this.contactButton = document.createElement("button");
        this.contentContainer = document.createElement("div");
    }
    createNav() {
        this.nav.className = "nav";
        this.body.appendChild(this.nav);
        this.nav.append(this.homeButton, this.menuButton, this.contactButton);
    }
    createNavButtons() {
        this.homeButton.className = "nav-button home";
        this.menuButton.className = "nav-button menu";
        this.contactButton.className = "nav-button contact";

        this.homeButton.textContent = "Home";
        this.menuButton.textContent = "Menu";
        this.contactButton.textContent = "Contact";

        this.homeButton.value = 1;
        this.menuButton.value = 0;
        this.contactButton.value = 0;

        const navButtons = document.getElementsByClassName("nav-button");

        for (let button of navButtons) {
            button.addEventListener("click", () => {
                this.tabSwitcher(button.classList[1]);
            });
        }
    }

    homeButtonValue() {
        this.homeButton.value = this.homeButton.value === "1" ? "0" : "1";
    }

    menuButtonValue() {
        this.menuButton.value = this.menuButton.value === "1" ? "0" : "1";
    }

    contactButtonValue() {
        this.contactButton.value = this.contactButton.value === "1" ? "0" : "1";
    }

    tabSwitcher(target) {
        switch (target) {
            case "home":
                if (this.homeButton.value !== "1") {
                    this.homeButtonValue();
                    this.menuButton.value = "0";
                    this.contactButton.value = "0";
                }
                break;

            case "menu":
                if (this.menuButton.value !== "1") {
                    this.menuButtonValue();
                    this.homeButton.value = "0";
                    this.contactButton.value = "0";
                }
                break;

            case "contact":
                if (this.contactButton.value !== "1") {
                    this.contactButtonValue();
                    this.homeButton.value = "0";
                    this.menuButton.value = "0";
                }
                break;

            default:
                break;
        }
    }

    renderNav() {
        this.state = true;
        this.createNav();
        this.createNavButtons();
    }
}