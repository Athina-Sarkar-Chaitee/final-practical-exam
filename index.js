function find(){

    let name = document.getElementById("name").value ;

    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}` ;


    fetch(url)
    .then(res => res.json())
    .then(data => find2(data));

}

function find2(data){

    let allMeal = data.meals ;

    let disArea = document.getElementById("dis");
    disArea.textContent = "" ;

    if(allMeal.length > 5){
        for(let i = 1; i<= 5; i++){

            let newDiv = document.createElement("div");
            newDiv.innerHTML = `Meal id: ${allMeal[i-1].idMeal} <br> Meal Name: ${allMeal[i-1].strMeal} <br> <img src="${allMeal[i-1].strMealThumb}"> <br> Cooking Instruction: <br> ${allMeal[i-1].strInstructions} ` ;
    
    
            newDiv.classList.add("style");
            disArea.appendChild(newDiv);
        }
        let newDiv2 = document.createElement("div");
        newDiv2.innerHTML = `<button onclick="show()">Show More</button>` ; 

        newDiv2.classList.add("style2");
        disArea.appendChild(newDiv2);

    }

    else{


    

    for(let i = 1; i<= 5; i++){

        let newDiv = document.createElement("div");
        newDiv.innerHTML = `Meal id: ${allMeal[i-1].idMeal} <br> Meal Name: ${allMeal[i-1].strMeal} <br> <img src="${allMeal[i-1].strMealThumb}"> <br> Cooking Instruction: <br> ${allMeal[i-1].strInstructions}` ;


        newDiv.classList.add("style");
        disArea.appendChild(newDiv);
    }




}
}

function show(){
    
}