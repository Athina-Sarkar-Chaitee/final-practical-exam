function find(){

    let name = document.getElementById("name").value ;

    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}` ;


    fetch(url)
    .then(res => res.json())
    .then(data => {find2(data); show(data)});


}

function find2(data){

    let allMeal = data.meals ;

    let disArea = document.getElementById("dis");
    disArea.textContent = "" ;

    if(allMeal.length > 5){
        for(let i = 1; i<= 5; i++){

            let newDiv = document.createElement("div");
            newDiv.innerHTML = `Meal id: ${allMeal[i-1].idMeal} <br> Meal Name: ${allMeal[i-1].strMeal} <br> <img src="${allMeal[i-1].strMealThumb}"> <br> Cooking Instruction: <br> ${allMeal[i-1].strInstructions} <br> <button onclick="show()">Show More</button> ` ;
    
    
            newDiv.classList.add("style");
            disArea.appendChild(newDiv);
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

// function show(data){

//     let allMeal = data.meals;

//     disArea = document.getElementById("dis");
//     disArea.textContent = "" ;

//     for(let i = 6; i<= allMeal.length; i++){

//         let newDiv3 = document.createElement("div");
//         newDiv3.innerHTML = `Meal id: ${allMeal[i-1].idMeal} <br> Meal Name: ${allMeal[i-1].strMeal} <br> <img src="${allMeal[i-1].strMealThumb}"> <br> Cooking Instruction: <br> ${allMeal[i-1].strInstructions}` ;


//         newDiv3.classList.add("style");
//         disArea.appendChild(newDiv3);
//     }

// }