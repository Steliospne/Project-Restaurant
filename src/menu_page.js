export default class MenuPage {
    constructor() {
        this.state = false;
    }

    loadPage() {
        this.createElement();
        this.contentWrapper.classList.add("menu");
        this.state = true;
    }

    unloadPage() {
        if (this.contentContainer !== undefined) {
            this.state = false;
            this.contentContainer.remove();
            this.contentWrapper.classList.remove("menu");
        }
    }

    createElement() {
        this.state = true;

        this.contentWrapper = document.querySelector(".content-wrapper");
        this.contentContainer = document.createElement("div");
        this.menuHeader = document.createElement("h1");
        this.imagePlaceHolder_1 = document.createElement("div");
        this.imagePlaceHolder_2 = document.createElement("div");
        this.imagePlaceHolder_3 = document.createElement("div");
        this.imagePlaceHolder_4 = document.createElement("div");
        this.imagePlaceHolder_5 = document.createElement("div");
        this.imagePlaceHolder_6 = document.createElement("div");
        this.imagePlaceHolder_7 = document.createElement("div");
        this.imagePlaceHolder_8 = document.createElement("div");
        this.imagePlaceHolder_9 = document.createElement("div");

        this.imagePlaceHolder_1.className = "image-placeholder dako";
        this.imagePlaceHolder_2.className = "image-placeholder saganaki";
        this.imagePlaceHolder_3.className = "image-placeholder octopus";
        this.imagePlaceHolder_4.className = "image-placeholder lamb";
        this.imagePlaceHolder_5.className = "image-placeholder seafood";
        this.imagePlaceHolder_6.className = "image-placeholder stifado";
        this.imagePlaceHolder_7.className = "image-placeholder moussaka";
        this.imagePlaceHolder_8.className = "image-placeholder galakt";
        this.imagePlaceHolder_9.className = "image-placeholder loukouomades";

        this.contentContainer.textContent = "";

        // Appetizers
        this.appetizersHeader = document.createElement("h2");
        this.appetizersList = document.createElement("ol");
        this.appetizer_1 = document.createElement("li");
        this.appetizer_2 = document.createElement("li");
        this.appetizer_3 = document.createElement("li");
        this.dakosSalad = document.createElement("h3");
        this.dakosSaladDesc = document.createElement("p");
        this.saganaki = document.createElement("h3");
        this.saganakiDesc = document.createElement("p");
        this.octopusCarpaccio = document.createElement("h3");
        this.octopusCarpaccioDesc = document.createElement("p");

        //Main Course
        this.mainCourseHeader = document.createElement("h2");
        this.mainCourseList = document.createElement("ol");
        this.mainCourse_1 = document.createElement("li");
        this.mainCourse_2 = document.createElement("li");
        this.mainCourse_3 = document.createElement("li");
        this.mainCourse_4 = document.createElement("li");
        this.lambKleftiko = document.createElement("h3");
        this.lambKleftikoDesc = document.createElement("p");
        this.seafoodOrzo = document.createElement("h3");
        this.seafoodOrzoDesc = document.createElement("p");
        this.stifado = document.createElement("h3");
        this.stifadoDesc = document.createElement("p");
        this.vegetarianMoussaka = document.createElement("h3");
        this.vegetarianMoussakaDesc = document.createElement("p");

        // Desserts
        this.dessertsHeader = document.createElement("h2");
        this.dessertsList = document.createElement("ol");
        this.dessert_1 = document.createElement("li");
        this.dessert_2 = document.createElement("li");
        this.galaktoboureko = document.createElement("h3");
        this.galaktobourekoDesc = document.createElement("p");
        this.loukouomades = document.createElement("h3");
        this.loukouomadesDesc = document.createElement("p");

        this.contentContainer.className = "content menu";
        this.menuHeader.className = "menu-header";
        this.appetizersList.className = "appetizer-list";
        this.mainCourseList.className = "main-course-list";
        this.dessertsList.className = "dessert-list";

        this.menuHeader.textContent = "Menu";
        this.appetizersHeader.textContent = "Appetizers";
        this.dakosSalad.textContent = "Dakos Salad";
        this.saganaki.textContent = "Saganaki";
        this.octopusCarpaccio.textContent = "Octopus Carpaccio";
        this.dakosSaladDesc.textContent =
            "A traditional Cretan dish featuring barley rusks topped with ripe tomatoes, tangy feta cheese, Kalamata olives, and a drizzle of extra virgin olive oil, finished with fragrant oregano.";
        this.saganakiDesc.textContent =
            "Crispy and golden pan-seared kefalograviera cheese, served with a zesty citrus-infused honey and a sprinkle of sesame seeds for a delightful crunch.";
        this.octopusCarpaccioDesc.textContent =
            "Tender slices of marinated octopus delicately arranged and served with fresh lemon, capers, red onions, and microgreens, capturing the essence of the Mediterranean sea.";

        this.mainCourseHeader.textContent = "Main Courses";
        this.lambKleftiko.textContent = "Lamb Kleftiko";
        this.seafoodOrzo.textContent = "Seafood Orzo";
        this.stifado.textContent = "Stifado";
        this.vegetarianMoussaka.textContent = "Vegetarian Moussaka";
        this.lambKleftikoDesc.textContent =
            "Slow-cooked lamb shoulder marinated in Cretan herbs and spices, enveloped in parchment paper to seal in the flavors, served with roasted seasonal vegetables and creamy lemon potatoes.";
        this.seafoodOrzoDesc.textContent =
            "A hearty dish of orzo pasta cooked in a rich tomato broth with an assortment of fresh seafood including shrimp, mussels, and calamari, finished with a hint of aromatic saffron.";
        this.stifadoDesc.textContent =
            "A comforting stew of tender beef slow-cooked with pearl onions, aromatic spices, and sweet Cretan wine, served atop a bed of creamy mashed potatoes.";
        this.vegetarianMoussakaDesc.textContent =
            "Layers of roasted eggplant, zucchini, and potatoes, topped with a savory tomato and lentil ragout, creamy béchamel sauce, and a sprinkle of grated kefalotyri cheese, baked to golden perfection.";

        this.dessertsHeader.textContent = "Desserts";
        this.galaktoboureko.textContent = "Galaktoboureko";
        this.loukouomades.textContent = "Loukoumades";
        this.galaktobourekoDesc.textContent =
            "A classic Greek dessert featuring layers of crispy phyllo pastry filled with creamy semolina custard, bathed in a fragrant honey syrup infused with cinnamon and citrus.";
        this.loukouomadesDesc.textContent =
            " Irresistible Greek-style donut holes, deep-fried to golden perfection and drizzled with honey, sprinkled with chopped walnuts, and dusted with powdered sugar, served warm for a delightful sweet treat.";

        this.dessert_1.append(this.galaktoboureko, this.galaktobourekoDesc);
        this.dessert_2.append(this.loukouomades, this.loukouomadesDesc);
        this.dessertsList.append(
            this.dessert_1,
            this.imagePlaceHolder_8,
            this.dessert_2,
            this.imagePlaceHolder_9
        );

        this.appetizer_1.append(this.dakosSalad, this.dakosSaladDesc);
        this.appetizer_2.append(this.saganaki, this.saganakiDesc);
        this.appetizer_3.append(
            this.octopusCarpaccio,
            this.octopusCarpaccioDesc
        );
        this.appetizersList.append(
            this.appetizer_1,
            this.imagePlaceHolder_1,
            this.appetizer_2,
            this.imagePlaceHolder_2,
            this.appetizer_3,
            this.imagePlaceHolder_3
        );

        this.mainCourse_1.append(this.lambKleftiko, this.lambKleftikoDesc);
        this.mainCourse_2.append(this.seafoodOrzo, this.seafoodOrzoDesc);
        this.mainCourse_3.append(this.stifado, this.stifadoDesc);
        this.mainCourse_4.append(
            this.vegetarianMoussaka,
            this.vegetarianMoussakaDesc
        );
        this.mainCourseList.append(
            this.mainCourse_1,
            this.imagePlaceHolder_4,
            this.mainCourse_2,
            this.imagePlaceHolder_5,
            this.mainCourse_3,
            this.imagePlaceHolder_6,
            this.mainCourse_4,
            this.imagePlaceHolder_7
        );

        this.contentContainer.append(
            this.menuHeader,
            this.appetizersHeader,
            this.appetizersList,
            this.mainCourseHeader,
            this.mainCourseList,
            this.dessertsHeader,
            this.dessertsList
        );
        this.contentWrapper.appendChild(this.contentContainer);
    }
}
