import axios from "axios";
const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "52835014-1fa6accc1c58d324fc268a772";

export function getImagesByQuery(query) {
    const params = new URLSearchParams({
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: "true"
    });
    return axios.get(`${BASE_URL}?${params}`)
        .then(resp => resp.data)
        .catch(error => {
            console.log(error); 
    })
};



