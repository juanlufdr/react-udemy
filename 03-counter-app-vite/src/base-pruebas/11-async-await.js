export const getImagen = async () => {
  try {
    const apiKey = "3U5uVkrpOIKgfWQqJBuTu89NMCshglvB";

    const resp = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );

    const { data } = await resp.json();
    const img = document.createElement("img");

    const { url } = data.images.original;
    return url;
  } catch (error) {
    // manejo del error
    return "No se encontro la imagen";
  }
};
