// samenvatting afkortingen:

// General:                            Cards:                         Details:                            Top:

// OD = Original Div               CD = Card Div                   DT = Details Tekst                   TI = Top Image
// TD = Top Div                    CI = Card Image                 DI = Details Image
// BD = Bottom Div                 CT = Card Tekst
// LD = Left Div                   FB = Favorites Button
// RD = Right Div                  DB = Details button
// DD = Details Div                
//                                 

window.addEventListener('load', init);

let body;
let apiUrl = "http://localhost/prog3magazineVersion3/webservice/";
let LD;
let clickedButtonId;
let favorites;
let recipes = [];

function init() {
    body = document.getElementById("bodyDiv");

    createMagazine();
    fetchRequestHandler(apiUrl, getRecipe);
}

function createMagazine(){
    let OD = document.createElement("div");
    OD.classList.add("od");

    let TD = document.createElement("div");
    TD.classList.add("td");
    let TI = document.createElement("IMG");
    TI.classList.add("ti");
    TI.src = "webservice/includes/images/restaurantText.png";
    TD.appendChild(TI);

    let BD = document.createElement("div");
    BD.classList.add("bd");

    LD = document.createElement("div");
    LD.classList.add("ld");

    let RD = document.createElement("div");
    RD.classList.add("rd");

    BD.appendChild(LD);
    BD.appendChild(RD);

    OD.appendChild(TD);
    OD.appendChild(BD);
    body.appendChild(OD);

}

function fetchRequestHandler(url, succesHandler){
fetch(url)
    .then((response) => {
            if (!response.ok) {
                    throw new Error(response.statusText)
            }
            return response.json()
    })
    .then(succesHandler)
    .catch(errorHandler)
}

function errorHandler(error){
    console.error(error);
    let div = document.querySelector("#message");
    div.innerHTML = "Er gaat iets fout!";
}

function getRecipe(data){
    for (let recipe of data) {
        recipes.push(recipe)

        let CD = document.createElement("div");
        CD.classList.add("cd");
        CD.dataset.id = recipe.id;

        let CI = document.createElement("IMG");
        CI.classList.add("ci");
        CI.src = recipe.imgUrl;

        let CT = document.createElement("p");
        CT.classList.add("ct");
        CT.innerHTML = recipe.name;

        let DB = document.createElement("button");
        DB.classList.add("db");
        DB.innerHTML = "View Details";
        DB.addEventListener("click", detailsHandler);
        DB.dataset.id = recipe.id;

        let FB = document.createElement("button");
        FB.classList.add("fb");
        FB.innerHTML = "Add Favorite";
        FB.addEventListener("click", favoritesHandler);
        FB.dataset.id = recipe.id;

        CD.appendChild(CI);
        CD.appendChild(CT);
        CD.appendChild(DB);
        CD.appendChild(FB);

        LD.appendChild(CD);

    }
    applyFavoriteColors();
        
}

function applyFavoriteColors() {
  let key = "favorites";
  let favorites = [];

  if (localStorage.getItem(key)) {
    favorites = JSON.parse(localStorage.getItem(key));
  }

  let cards = document.querySelectorAll(".cd");

  cards.forEach((card) => {
    let cardId = card.dataset.id;
    let isFavorite = favorites.includes(cardId);

    if (isFavorite) {
      card.classList.add("details");
      card.classList.remove("cd");
      card.querySelector(".fb").textContent = "Remove Favorite";
    } else {
      card.classList.remove("details");
      card.classList.add("cd");
      card.querySelector(".fb").textContent = "Add Favorite";
    }
  });
}

function favoritesHandler(e){
  let clickedButton = e ? e.target : null;
  let card = clickedButton ? clickedButton.parentNode : null;
  let cardId = card ? card.getAttribute("data-id") : null;
  let key = "favorites";
  let favorites = [];
  
  if(localStorage.getItem(key)){
      favorites = JSON.parse(localStorage.getItem(key));
  }
  
  if(cardId){
      e.preventDefault();

      if(favorites.includes(cardId)){
          favorites = favorites.filter((id) => id !== cardId);
          card.classList.remove("details");
          card.classList.add("cd");
          card.querySelector(".fb").textContent = "Add Favorite";
      }else{
          favorites.push(cardId);

          card.classList.remove("cd");
          card.classList.add("details");
          card.querySelector(".fb").textContent = "Remove Favorite";

      }

      localStorage.setItem(key, JSON.stringify(favorites));
  }

}


function detailsHandler(data) {
  console.log("click")
    
    clickedButtonId = data.target.dataset.id;
    
    let DD = document.createElement("div");
    DD.classList.add("dd");
  
    let DI = document.createElement("IMG");
    DI.classList.add("di");
    DI.src = recipes[clickedButtonId-1].imgUrl;
  
    let DT1 = document.createElement("p");
    DT1.classList.add("dt");
    DT1.innerHTML = recipes[clickedButtonId-1].name;
  
    let DT2 = document.createElement("p");
    DT2.classList.add("dt");
    DT2.innerHTML = recipes[clickedButtonId-1].region;
  
    let DT3 = document.createElement("p");
    DT3.classList.add("dt");
    DT3.innerHTML = recipes[clickedButtonId-1].types;
  
    let DT4 = document.createElement("p");
    DT4.classList.add("dt");
    DT4.innerHTML = recipes[clickedButtonId-1].role;
  
  
    DD.appendChild(DI);
    DD.appendChild(DT1);  
    DD.appendChild(DT2);
    DD.appendChild(DT3);
    DD.appendChild(DT4);
  
    let RD = document.querySelector(".rd");
    RD.innerHTML = "";
    RD.appendChild(DD);
  }

