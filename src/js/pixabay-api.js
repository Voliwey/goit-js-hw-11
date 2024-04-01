const API_KEY = "43082908-d5bb253eb19cb17ad501330a7";
const baseURL = "https://pixabay.com/api/";

export async function fetchImages(searchQuery) {
    const url = `${baseURL}?key=${API_KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true`;
    const response = await fetch(url);
    const data = await response.json();
    return data.hits;
}





