import axios from 'axios';

const BASE_URL = 'https://api.thecatapi.com/v1';
const API_KEY =
  'live_buNPOUvrSFnbHmWMHbKKyTFK6Z5vmkgojVgP35PPtyfBbxDcEShhsDG9yaYGmrIK';
const END_POINT = '/breeds';
const SEARCH_URL = `https://api.thecatapi.com/v1/images/search`;

axios.defaults.headers.common['x-api-key'] = API_KEY;

export async function fetchBreeds() {
  return await fetch(`${BASE_URL}${END_POINT}`).then(response =>
    response.json()
  );
}

export async function fetchCatByBreed(breedId) {
  return await fetch(`${SEARCH_URL}?breed_ids=${breedId}`).then(response =>
    response.json()
  );
}
