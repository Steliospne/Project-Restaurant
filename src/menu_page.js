export default class MenuPage {
    constructor() {
        this.state = false;
    }

    getMenuPage() {
        this.state = true;
        console.log("menu page");
    }
}