async function toListVideos() {
  const connection = await fetch(
    "https://json-alura-geek.vercel.app/videos"
  );
  const convertedConnection = await connection.json();

  return convertedConnection;
}

async function toCreateVideo(title, description, url, image) {
  const connection = await fetch(
    "https://json-alura-geek.vercel.app/videos",
    {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        description: `${description} mil visualizacoes`,
        url: url,
        image: image,
      }),
    });
    if(!connection.ok){
      throw new Error("Posting video wasn't possible!")
    }
  const convertedConnection = await connection.json();

  console.log(convertedConnection);
  return convertedConnection;
}

async function searchForVideo(keyWord) {
  const connection = await fetch(
    `https://json-alura-geek.vercel.app/videos?q=${keyWord}`);
  const convertedConnection = connection.json();

  return convertedConnection;
}

export const connectionApi = {
  toListVideos,
  toCreateVideo,
  searchForVideo,
};
