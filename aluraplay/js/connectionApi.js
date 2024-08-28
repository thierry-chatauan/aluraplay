async function toListVideos() {
  const connection = await fetch("https://json-alura-geek.vercel.app/videos");
  const convertedConnection = await connection.json();
  return convertedConnection;
}

export const connectionApi = {
  toListVideos,
};
