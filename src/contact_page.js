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
        this.contactInfoHeader = document.createElement("h1");
        this.locationHeader = document.createElement("h2");
        this.location = document.createElement("p");
        this.emailHeader = document.createElement("h2");
        this.email = document.createElement("p");
        this.phoneHeader = document.createElement("h2");
        this.phone = document.createElement("p");
        this.operatingHoursHeader = document.createElement("h2");
        this.operatingHours = document.createElement("p");
        this.reservations = document.createElement("p");

        this.contentContainer.textContent = "";
        
        this.contentContainer.className = "content contact";
        this.contactInfoHeader.className = "contactInfoHeader";
        this.locationHeader.className = "locationHeader";
        this.location.className = "location";
        this.emailHeader.className = "emailHeader";
        this.email.className = "email";
        this.phoneHeader.className = "phone";
        this.operatingHoursHeader.className = "operatingHoursHeader";
        this.operatingHours.className = "operatingHours";
        this.reservations.className = "";

        this.contactInfoHeader.textContent = "Contact Info";
        this.locationHeader.textContent = "Location:";
        this.location.textContent = "Aegean Breeze Seaside Promenade, Chania, Crete Greece";
        this.emailHeader.textContent = "Email:";
        this.email.textContent = "info@aegeanbreeze.com";
        this.phoneHeader.textContent = "Phone:";
        this.phone.textContent = "+30 28210 XXXXX";
        this.operatingHoursHeader.textContent = "Opening Hours:";
        this.operatingHours.textContent = "Monday - Sunday: 12:00 PM - 11:00 PM"
        this.reservations.textContent = "For reservations, inquiries, or feedback, please feel free to contact us via phone or email. We look forward to hearing from you!";

        this.contentContainer.append(
            this.contactInfoHeader,
            this.locationHeader,
            this.location,
            this.phoneHeader,
            this.phone,
            this.emailHeader,
            this.email,
            this.operatingHoursHeader,
            this.operatingHours,
            this.reservations
        )
        this.contentWrapper.appendChild(this.contentContainer);
        
    }
}
