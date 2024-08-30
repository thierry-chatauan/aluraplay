import { connectionApi } from "./connectionApi.js";

const form = document.querySelector("[data-form]");

async function createvideo(event) {
  event.preventDefault();

  const image = document.querySelector("[data-image]").value;
  const url = document.querySelector("[data-url]").value;
  const title = document.querySelector("[data-title]").value;
  const description = Math.floor(Math.random() * 10).toString();
try{
  await connectionApi.toCreateVideo(title, description, url, image);

  window.location.href = "../pages/envio-concluido.html";
}catch(e){
  alert(e)
}
}

form.addEventListener("submit", (event) => createvideo(event));
