export default class Nav {
    body = document.querySelector("body");
    constructor() {
        this.state = false;
    }

    createWrapper() {
        this.wrapper = document.createElement('div');
        this.wrapper.className = "wrapper";
        this.body.appendChild(this.wrapper);
    }

    createNav() {
        this.nav = document.createElement("nav");
        this.nav.className = "nav";
        this.wrapper.appendChild(this.nav);
    }
    createNavButtons() {
        this.homeButton = document.createElement("button");
        this.menuButton = document.createElement("button");
        this.contactButton = document.createElement("button");

        this.homeButton.className = "nav-button home";
        this.menuButton.className = "nav-button menu";
        this.contactButton.className = "nav-button contact";

        this.homeButton.classList.add('active')

        this.homeButton.textContent = "Home";
        this.menuButton.textContent = "Menu";
        this.contactButton.textContent = "Contact";

        this.homeButton.value = 1;
        this.menuButton.value = 0;
        this.contactButton.value = 0;

        this.nav.append(this.homeButton, this.menuButton, this.contactButton);

        const navButtons = document.getElementsByClassName("nav-button");

        for (let button of navButtons) {
            button.addEventListener("click", () => {
                this.tabSwitcher(button.classList[1]);
            });
        }
    }

    createContentContainer() {
        this.contentContainer = document.createElement("div");
        this.contentContainer.className = "content";
        this.wrapper.appendChild(this.contentContainer);
    }



    homeButtonState() {
        this.homeButton.value =  '1';
        this.menuButton.value = "0";
        this.contactButton.value = "0";
        this.homeButton.classList.add('active')
        this.menuButton.classList.remove('active')
        this.contactButton.classList.remove('active')
    }

    menuButtonState() {
        this.menuButton.value = '1'
        this.homeButton.value = "0";
        this.contactButton.value = "0";
        this.menuButton.classList.add('active');
        this.homeButton.classList.remove('active');
        this.contactButton.classList.remove('active');
    }

    contactButtonState() {
        this.contactButton.value = '1';
        this.homeButton.value = "0";
        this.menuButton.value = "0";
        this.contactButton.classList.add('active');
        this.homeButton.classList.remove('active');
        this.menuButton.classList.remove('active');
    }

    tabSwitcher(target) {
        switch (target) {
            case "home":
                if (this.homeButton.value !== "1") {
                    this.homeButtonState();
                }
                break;

            case "menu":
                if (this.menuButton.value !== "1") {
                    this.menuButtonState();
                    
                }
                break;

            case "contact":
                if (this.contactButton.value !== "1") {
                    this.contactButtonState();
                }
                break;

            default:
                break;
        }
    }

    renderNav() {
        this.state = true;
        this.createWrapper();
        this.createNav();
        this.createNavButtons();
        this.createContentContainer();
    }
}