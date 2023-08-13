import axios from "axios";

// live_prCyYOQDlVyRuTZijXmAy2PzxYbV6SrmfBEV6IgaEiqlonuoM0HtAxevM08LCAd9

axios.defaults.headers.common["x-api-key"] = "live_prCyYOQDlVyRuTZijXmAy2PzxYbV6SrmfBEV6IgaEiqlonuoM0HtAxevM08LCAd9";

const BASE_URL = 'https://api.thecatapi.com/v1/';

function fetchBreeds() {
  return axios.get(`${BASE_URL}breeds`).then(resp => resp.data);
}

function fetchCatByBreed(breedId) {
  return axios
    .get(`${BASE_URL}images/search?breed_ids=${breedId}`)
    .then(resp => resp.data);
}

export { fetchBreeds, fetchCatByBreed };