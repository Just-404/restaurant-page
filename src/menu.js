import header from "./header";

function createFood(type, name, price, img, text){
    const div = document.createElement("div");
    div.setAttribute("class", type);

    const foodName = document.createElement("h2");
    foodName.innerText = name;

    const foodPrice = document.createElement("h3");
    foodPrice.innerText = price;

    const foodImg = document.createElement("img");
    foodImg.setAttribute("src", img);
   
    const foodDescrip = document.createElement("p");
    foodDescrip.innerText = text;

    div.append(foodName, foodPrice, foodImg, foodDescrip);

    return div;

}
const createNodes = function(){
    const mainDiv = document.querySelector(".content");
    
    const headerDiv = header("Menu");
    mainDiv.appendChild(headerDiv);

    const drinksTitle = document.createElement("h1");
    drinksTitle.innerText = "Beverages";

    const presidenteBeer = createFood("drink", "Presidente Beer", "$ 2.5", "", 
        `One of the most popular beverages in the Dominican Republic. Beer Presidente will let you experience
        the tropical and refreshing experience you would expect from the Caribbean Island.`
    );
    
        
    const water = createFood("drink", "Water", "$ 1.0", "", 
        `Nothing like good ol' water.`
    );

        
    const pinaColada = createFood("drink", "Pina Colada", "$ 6.0", "", 
        `A refreshing drink made using our special pineapples fruits mixes with ron Brugal.`
    );

    mainDiv.append(drinksTitle, presidenteBeer, water, pinaColada);

    const foodTitle = document.createElement("h1");
    foodTitle.innerText = "Dishes";

    const theFlag = createFood("food", "The dominican flag", "$ 20.0", "", 
        `The representative dish of the Dominican Republic, the flag, brings the most typical ingredients of the dominican cuisine
         to make this delicious dish.`
    );
    
    const yaroa = createFood("food", "Yaroa", "$ 25.0", "", 
        `Wanna taste the joy of night? Then Yaroa must be your choice. This dish is made with fries, grinded chicken, cheese 
        mixed in a sauce of ketchup and mayonnaise.`
    );

    const friedChicken = createFood("food", "Fried Chicken", "$ 22.00", "", 
        `For those who want to taste a good fried chicken.`
    )
     mainDiv.append(foodTitle, theFlag, yaroa, friedChicken);
}

export {createNodes}
