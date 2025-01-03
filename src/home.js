import header from "./header";
import domRepFlag from "./assets/domRepFlag.jpg";

function createMainContent(){
    const mainDiv = document.querySelector(".content");
    const text = `La Equinita Restaurant is your best choice when it comes to dominican food. We got a wide variety of dishes that go from our excellent breakfast course of mangu or our famous yaroa La Grande`;

    const headerDiv = header("La Equinita\' Restaurant", text, true);
    
    const locationDiv = document.createElement("div");
    const p2 = document.createElement("p")
    p2.innerText = "We are located at XXXX XXXX, XXXX";
    locationDiv.appendChild(p2);

    const scheduleDiv = document.createElement("div");
    const p3 = document.createElement("p");
    p3.innerText = `Mon - Sat: 8:00 am - 10:00 pm
    Sun: 4:00 - 11:00 pm`;
    scheduleDiv.appendChild(p3);

    mainDiv.append(headerDiv, scheduleDiv , locationDiv);

    const headerImg = document.getElementsByTagName("img")[0];
    headerImg.src = domRepFlag;
    headerImg.title = "Image by David from Pixabay";
}

export default createMainContent;