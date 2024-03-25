export default class LandingPage {
    body = document.querySelector('body') 
    constructor() {
        this.state = true;
    }

    createLandingPage() {
        this.landingPage = document.createElement("div");
        this.landingPage.className = "landing-container";
        this.body.appendChild(this.landingPage);
        this.landingPage.textContent = 'My Restaurant'
    }

    removeLandingPage() {
        this.body.removeChild(this.landingPage);
        this.state = false;
    }
}