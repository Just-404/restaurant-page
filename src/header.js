const header = function(title, text, value){
        
    const headlineDiv = document.createElement("div");
    headlineDiv.setAttribute("id", "headline-content");

    const headLineText = document.createElement("h1");
    headLineText.innerText = title;

    if(value){
        const headLineImg = document.createElement("img");
        headlineDiv.appendChild(headLineImg);

        const p = document.createElement("p");
        p.innerText = text;
        headlineDiv.append(headLineText, p, headLineImg);
        
        return headlineDiv;
    }

    headlineDiv.append(headLineText);
    return headlineDiv;
}

export default header;