import {POKEMONTCG_API_KEY } from '@env'
import {PokemonTCG} from "pokemon-tcg-sdk-typescript";

const BASE_URL = "https://api.pokemontcg.io/v2";

export class ApiClient {
  static getSets = async () => {
    return fetch(`${BASE_URL}/sets`, { headers: new Headers({ 'x-api-key': POKEMONTCG_API_KEY }) })
      .then((res) => res.json())
      .then((res) => res.data)
  };

  static getSetsBySerie = async (serieName: string) : Promise<PokemonTCG.Set[]> => {
    return fetch(`${BASE_URL}/sets?q=series:${serieName}`, { headers: new Headers({ 'x-api-key': POKEMONTCG_API_KEY }) })
      .then((res) => res.json())
      .then((res) => res.data)
  }

  static getCards = async () => {
    return fetch(`${BASE_URL}/cards`, { headers: new Headers({ 'x-api-key': POKEMONTCG_API_KEY }) })
      .then((res) => res.json())
      .then((res) => res.data)
  };

  static getTypes = async () => {
    return fetch(`${BASE_URL}/types`, { headers: new Headers({ 'x-api-key': POKEMONTCG_API_KEY }) })
      .then((res) => res.json())
      .then((res) => res.data)
  };

  static getSuperTypes = async () => {
    return fetch(`${BASE_URL}/supertypes`, { headers: new Headers({ 'x-api-key': POKEMONTCG_API_KEY }) })
      .then((res) => res.json())
      .then((res) => res.data)
  };

  static getRarities = async () => {
    return fetch(`${BASE_URL}/rarities`, { headers: new Headers({ 'x-api-key': POKEMONTCG_API_KEY }) })
      .then((res) => res.json())
      .then((res) => res.data)
  };
}