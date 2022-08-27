let photo = document.getElementById('photo');
let title = document.getElementById('title');
const btn = document.getElementById('generate');
console.log(btn);

btn.addEventListener('click', ()=>{
    getRandomCocktail();
});

// function onLoad() {
   
//     getRandomCocktail();
// }
getRandomCocktail()

async function getRandomCocktail() {
    let res = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
    let json = await res.json();
    let data = json.drinks[0];
    title.textContent = data.strDrink;
    photo.src = `${data.strDrinkThumb}/preview`;

    const list = document.getElementById('list');
    list.innerHTML = '';


    for(let i=1; i < 16; i++ ) {
        let ingredient = data[`strIngredient${i}`];
        let quantity = data[`strMeasure${i}`];
        if(ingredient){
        let li = document.createElement('li');
        li.textContent = ingredient + (quantity?` - ${quantity}`:'' );
        list.appendChild(li);
        }else{
            break;
        }
    }
    
    document.getElementById('instructions').textContent = data.strInstructions
    
}

