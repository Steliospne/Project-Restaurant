import "./style.css";
import LandingPage from "./landing_page";
import Nav from "./domElemets";
import HomePage from "./home_page";
import MenuPage from "./menu_page";
import ContactPage from "./contact_page";

const body = document.querySelector("body");
const nav = new Nav();
const landingPage = new LandingPage();
const homePage = new HomePage();
const menuPage = new MenuPage();
const contactPage = new ContactPage();
landingPage.createLandingPage();

body.addEventListener("click", () => {
    if (landingPage.state === true) {
        landingPage.removeLandingPage();
        nav.renderNav();
        homePage.loadPage();
    }

    if (nav.homeButton.value === "1" && homePage.state === false) {
        homePage.loadPage();
        menuPage.unloadPage();
        contactPage.unloadPage();
    }
    if (nav.menuButton.value === "1" && menuPage.state === false) {
        menuPage.loadPage();
        homePage.unloadPage();
        contactPage.unloadPage();
    }
    if (nav.contactButton.value === "1" && contactPage.state === false) {
        contactPage.loadPage();
        homePage.unloadPage();
        menuPage.unloadPage();
    }
});
