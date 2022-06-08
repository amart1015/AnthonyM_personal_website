const tBox= document.querySelector("#textbox")
const mBox= document.querySelector("#Button");
const submbutton= document.querySelector("#submitButton")
const gResults= document.querySelector("#giphyResults")
const apiKey= "z9qEJKCAcrrMCA7q77qHJXLDkv111Kra"
const limit = 9
const rating = "G"


let giphyForm= document.querySelector("form");
let giphyArea= document.querySelector("#giphy-results");


giphyForm.addEventListener("submit", (evt) =>{
    giphyArea.innerHTML = ``;
    evt.preventDefault();
    console.log("evt.target.gif.value -", evt.target.gif.value);
    let apiUrl= "http://api.giphy.com/v1/gifs/search?api_key=" + apiKey + "&limit=" + limit + "&rating=" + rating+ "&q=" + evt.target.gif.value ;
    console.log(apiUrl);
    console.log(getResults(apiUrl));
})

async function getResults(apiUrl){
    let response= await fetch(apiUrl);
    console.log("response is ", response);
    let responseData= await response.json();
    displayResults(responseData);
    tBox.innerHTML = `
    <input type="text" name="gif" id="name" placeholder="Enter a search term" required>
    `
    mBox.innerHTML = `
    <input type="button" value="Show me more GIFs!">
    `
    return responseData;
    
}

function displayResults(gifData){
    gifData.data.forEach((gif) => {
        giphyArea.innerHTML += `
        <img src="${gif.images.original.url}">

        `});

    }
