const action = document.querySelector(".cityInput");
const city = document.querySelector(".city");
const maindiv = document.querySelector(".maindiv");
const apiKey = "cd9b84fc506f8603724b1c9b71bf23a0";

action.addEventListener("submit",event =>{
    event.preventDefault();
    const cityname = city.value;
    if(cityname){

    }
    else
    displayError("Please Enter a City");
})
async function weatherDAta(cityName) {
    
}
function displayWeather(data){

}
function displayError(message){
    const errorMsg = document.createElement("p");
    errorMsg.textContent = message;
    errorMsg.classList.add("error");

    maindiv.textContent = "";
    maindiv.style.display = "flex";
    maindiv.appendChild(errorMsg);
}