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

            if(i==5){

            let newDiv = document.createElement("div");
            newDiv.innerHTML = `Meal id: ${allMeal[i-1].idMeal} <br> Meal Name: ${allMeal[i-1].strMeal} <br> <img src="${allMeal[i-1].strMealThumb}"> <br> Cooking Instruction: <br> ${allMeal[i-1].strInstructions} <br> <br> <button id="style2" onclick="show()">Show More Items</button> ` ;
            
    
    
            newDiv.classList.add("style");
            disArea.appendChild(newDiv);
        }
        else{
            let newDiv = document.createElement("div");
            newDiv.innerHTML = `Meal id: ${allMeal[i-1].idMeal} <br> Meal Name: ${allMeal[i-1].strMeal} <br> <img src="${allMeal[i-1].strMealThumb}"> <br> Cooking Instruction: <br> ${allMeal[i-1].strInstructions}  ` ;
    
    
            newDiv.classList.add("style");
            disArea.appendChild(newDiv);

        }
    }
       


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

    let name = document.getElementById("name").value ;

    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}` ;


    fetch(url)
    .then(res => res.json())
    .then(data =>show2(data));


}
function show2(data){

    let allMeal2 = data.meals;

    disArea = document.getElementById("dis");
    

    for(let i = 6; i<= allMeal2.length; i++){

        let newDiv3 = document.createElement("div");
        newDiv3.innerHTML = `Meal id: ${allMeal2[i-1].idMeal} <br> Meal Name: ${allMeal2[i-1].strMeal} <br> <img src="${allMeal2[i-1].strMealThumb}"> <br> Cooking Instruction: <br> ${allMeal2[i-1].strInstructions}` ;


        newDiv3.classList.add("style");
        disArea.appendChild(newDiv3);
    }

}