import header from "./header";
import locationImage from "./assets/location.jpg";

export default function createContact(){
    const mainDiv = document.querySelector(".content");
    
    const headerDiv = header("Contact us:");
    mainDiv.appendChild(headerDiv);

    const div = document.createElement("div");
    div.setAttribute("class", "contact-box");

    const frontDesk = document.createElement("h2");
    frontDesk.innerText = "Front-Desk";

    const telephoneNumber = document.createElement("p");
    telephoneNumber.innerText = "XXX-XXXX-XXX";

    const email = document.createElement("p");
    email.innerText = "makeYourReservation@notFake.com";

    div.append(frontDesk, telephoneNumber, email);

    const locationHeadline = document.createElement("h2");
    locationHeadline.innerText = "Visit us on site for more info!";

    const locationImg = document.createElement("img");
    locationImg.src = locationImage;
    locationImg.title = "From Posters.es";

    mainDiv.append(div, locationHeadline, locationImg);

}
