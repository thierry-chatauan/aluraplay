async function toListVideos() {
  const connection = await fetch("https://66870af283c983911b0467df.mockapi.io/api/users");
  const convertedConnection = await connection.json();

  console.log(convertedConnection)

  return convertedConnection;
}


async function toCreateVideo(title, description, url, image) {
  const connection = await fetch("https://66870af283c983911b0467df.mockapi.io/api/users", {
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
  const convertedConnection = await connection.json();

  console.log(convertedConnection)
  return convertedConnection;
}

export const connectionApi = {
  toListVideos,
  toCreateVideo,
};
