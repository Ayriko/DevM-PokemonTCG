import { API_KEY } from '@env'

const BASE_URL = "https://api.pokemontcg.io/v2";

export class ApiClient {
  static getSets = async () => {
    return fetch(`${BASE_URL}/sets`, { headers: new Headers({ 'x-api-key': API_KEY }) })
      .then((res) => res.json())
      .then((res) => res.data)
  };
}