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

    


}