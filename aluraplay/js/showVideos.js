import { connectionApi } from "./connectionApi.js";

const list = document.querySelector("[data-list]");

export default function createCard(title, description, url, image) {
  const video = document.createElement("li");
  video.className = "videos__item";
  video.innerHTML = ` <iframe width="100%" height="72%" src="${url}"
                title="${title}" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
            <div class="description-video">
                <img src="${image}" alt="logo canal alura">
                <h3>${title}</h3>
                <p>${description}</p>
            </div>`;

  return video;
}

async function toListVideos() {
  try{
  const listApi = await connectionApi.toListVideos();
  listApi.forEach(element => list.appendChild(
    createCard(element.title, element.description, element.url, element.image)));
  }catch{
    list.innerHTML = `<h2 class= "message__title">
    it was not possible to load your content
    </h2>`
  }
}

toListVideos()
