import { useQuery } from "@tanstack/react-query";
import { PokemonTCG } from "pokemon-tcg-sdk-typescript";
import { POKEMONTCG_API_KEY } from "@env";

export type ResponseItem = {
    id: string;
    name: string;
    releaseDate: string;
    series: string;
    images: {
        symbol: string,
        logo: string
    }
};

export type Response = ResponseItem[];

export const useGetSets = () => {
    return useQuery<PokemonTCG.Set[]>({
        queryKey: ["sets"],
        queryFn: () => fetch('https://api.pokemontcg.io/v2/sets', { headers: new Headers({ 'x-api-key': POKEMONTCG_API_KEY }) })
            .then((res) => res.json())
            .then((res) => res.data),
    });
};

export const useGetSetsBySerieName = (search: string) => {
    return useQuery<PokemonTCG.Set[]>({
        queryKey: ["setsBySerie", search],
        queryFn: () => fetch(`https://api.pokemontcg.io/v2/sets?q=series:${search}`, { headers: new Headers({ 'x-api-key': POKEMONTCG_API_KEY }) })
            .then((res) => res.json())
            .then((res) => res.data),
        enabled: search.length > 0
    });
};