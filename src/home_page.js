export default class HomePage {
    constructor() {
        this.state = false;
    }

    getHomePage() {
        this.state = true;
        console.log("home page");
    }
}
