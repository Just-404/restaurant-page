import "./styles.css";
import createMainContent from "./home";
import { createNodes } from "./menu";
import createContact from "./contact";

let i = 0;
const removeChildren = () => {
    const mainDiv = document.querySelector(".content");
    while(mainDiv.firstChild){
        mainDiv.removeChild(mainDiv.lastChild);
    }
}

const homeBtn = document.getElementById("homeBtn");
const menuBtn = document.getElementById("menuBtn");
const contactBtn = document.getElementById("contactBtn");

createMainContent();

homeBtn.addEventListener("click", () => {
    removeChildren();
    createMainContent();

});
menuBtn.addEventListener("click", () => {
    removeChildren();
    createNodes();
    
});
contactBtn.addEventListener("click", () => {
    removeChildren();
    createContact();
});
