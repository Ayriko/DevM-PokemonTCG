import { useQuery } from "@tanstack/react-query";
import { ApiClient } from "../api";
import { PokemonTCG } from "pokemon-tcg-sdk-typescript";
import {POKEMONTCG_API_KEY} from "@env";

export type ResponseItem = {
    id: string;
    name: string;
    supertype: string;
    types: string[];
    set: {
        id: string;
        name: string;
    }
    rarity: string;
    images: {
        small: string,
        large: string
    }
};

export type Response = ResponseItem[];

export const useGetCards = (param: PokemonTCG.Parameter = { page: 1, pageSize: 20 }) => {
    return useQuery<PokemonTCG.Card[]>({
        queryKey: ["cards"],
        queryFn: () => PokemonTCG.getAllCards(param),
    });
};

export const test = () => {
    return useQuery<Response>({
        queryKey: ["allCards"],
        queryFn: ApiClient.getCards,
    });
};

export const useGetCardById = (id: string) => {
    return useQuery<PokemonTCG.Card>({
        queryKey: ["cardById"],
        queryFn: () => PokemonTCG.findCardByID(id),
    })
}

export const useGetCardBySet = (id: string) => {
    return useQuery<PokemonTCG.Card[]>({
        queryKey: ["cardsBySet", id],
        queryFn: () => fetch(`https://api.pokemontcg.io/v2/cards?q=set.id:${id}`, { headers: new Headers({ 'x-api-key': POKEMONTCG_API_KEY }) })
          .then((res) => res.json())
          .then((res) => res.data),
        enabled: id.length > 0
    });
}
