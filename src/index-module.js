function createMainContent(){
    const mainDiv = document.querySelector(".content");
    
    const headlineDiv = document.createElement("div");
    headlineDiv.setAttribute("id", "headline-content");

    const headLineText = document.createElement("h1");
    headLineText.innerText = "La Equinita\' Restaurant";

    const headLineImg = document.createElement("img");

    const p = document.createElement("p");
    p.innerText = `La Equinita Restaurant is your best choice when it comes to dominican food. We got a wide variety of dishes that
    go from our excellent breakfast course of mangu or our famous yaroa La Grande`;

    headlineDiv.append(headLineText, headLineImg, p);

    const locationDiv = document.createElement("div");
    const p2 = document.createElement("p")
    p2.innerText = "We are located at XXXX XXXX, XXXX";
    locationDiv.appendChild(p2);

    const scheduleDiv = document.createElement("div");
    const p3 = document.createElement("p");
    p3.innerText = `Mon - Sat: 8:00 am - 10:00 pm
    Sun: 4:00 - 11:00 pm`;
    scheduleDiv.appendChild(p3);

    mainDiv.append(headlineDiv, scheduleDiv , locationDiv);
}

export default createMainContent;