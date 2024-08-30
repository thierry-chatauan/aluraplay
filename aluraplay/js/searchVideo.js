import { connectionApi } from "./connectionApi.js";
import createCard from "./showVideos.js";

async function toSearchVideo(event){
    event.preventDefault()

    const searchData = document.querySelector("[data-search]").value
    const search = await connectionApi.searchForVideo(searchData)

    console.log(search)

    const list = document.querySelector("[data-list]")

    while(list.firstChild){
        list.removeChild(list.firstChild)
    }

    search.forEach(element => list.appendChild(
        createCard(element.title, 
            element.description, 
            element.url, 
            element.image)))

    if(search.length==0){
        list.innerHTML= `<h2 class="message__title">Doesn't exist any video with this term</h2>`
    }

}

const searchButton = document.querySelector("[data-button-search]")
searchButton.addEventListener("click", event => toSearchVideo(event))