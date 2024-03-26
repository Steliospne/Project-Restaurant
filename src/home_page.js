export default class HomePage {
    constructor() {
        this.state = false;
    }

    loadPage() {
        this.createElement();
        this.contentWrapper.classList.add('home');
        this.state = true;
    }

    unloadPage() {
        if(this.contentContainer!==undefined) {
            this.state = false;
            this.contentContainer.remove();
            this.contentWrapper.classList.remove('home');
        }
    }

    createElement() {
        this.contentWrapper = document.querySelector(".content-wrapper");

        this.contentContainer = document.createElement("div");
        this.contentContainer.className = "content home";
        this.contentWrapper.appendChild(this.contentContainer);
        this.contentContainer.textContent = "";

        this.title = document.createElement("h1");
        this.subTitle = document.createElement("p");
        this.generalDescription = document.createElement("p");
        this.ourMissionHeader = document.createElement("h2");
        this.ourMission = document.createElement("p");
        this.ourCuisineHeader = document.createElement("h2");
        this.ourCuisine = document.createElement("p");

        this.title.className = "title";
        this.subTitle.className = "sub-title";
        this.generalDescription.className = "general-description";
        this.ourMissionHeader.className = "our-mission-header";
        this.ourMission.className = "our-mission";
        this.ourCuisineHeader.className = "our-cuisine-header";
        this.ourCuisine.className = "our-cuisine";

        this.title.textContent = "Welcome";
        this.subTitle.textContent = "at Aegean Breeze";

        this.ourMissionHeader.textContent = "Our Mission:";
        this.ourMission.textContent =
            "At Aegean Breeze, we are committed to preserving and promoting the local ecosystem of Crete. Our mission is to empower local farmers, hunters, and fishermen by exclusively sourcing ingredients from their sustainable practices. By supporting our community, we not only ensure the freshness and quality of our dishes but also contribute to the preservation of Crete's natural heritage.";
        this.ourCuisineHeader.textContent = "Our Cuisine:";
        this.ourCuisine.textContent =
            "Indulge in a symphony of flavors that pay homage to Crete's culinary heritage. From freshly caught seafood to organic produce cultivated in the island's fertile soil, each dish at Aegean Breeze is a masterpiece crafted with passion and reverence for tradition. Our menu showcases authentic Cretan recipes infused with modern flair, promising a dining experience that is both nostalgic and innovative.";

        this.contentContainer.append(
            this.title,
            this.subTitle,
            this.ourMissionHeader,
            this.ourMission,
            this.ourCuisineHeader,
            this.ourCuisine
        );
    }
}
