const input = document.querySelector("input");
const query = input.value.trim();
const encodedQuery = encodeURIComponent(query);

export function fetchImages(query) {
    const searchParams = new URLSearchParams({
        key: "43082908-d5bb253eb19cb17ad501330a7",
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: "true",

    });

    const url = `https://pixabay.com/api/?${searchParams}`;

    return fetch(url).then(response => {
        if (!response.ok) {
            throw new Error(response.status);
        }
        return response.json();
    });
}



