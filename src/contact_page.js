export default class ContactPage {
    constructor() {
        this.state = false;
    }

    loadPage() {
        this.createElement();
        this.contentWrapper.classList.add("contact");
        this.state = true;
    }

    unloadPage() {
        if (this.contentContainer !== undefined) {
            this.state = false;
            this.contentContainer.remove();
            this.contentWrapper.classList.remove("contact");
        }
    }

    createElement() {
        this.state = true;

        this.contentWrapper = document.querySelector(".content-wrapper");

        this.contentContainer = document.createElement("div");
        this.contentContainer.className = "content contact";
        this.contentWrapper.appendChild(this.contentContainer);
        this.contentContainer.textContent = "";
    }
}
