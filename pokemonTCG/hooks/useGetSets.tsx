import { useQuery } from "@tanstack/react-query";
import { PokemonTCG } from "pokemon-tcg-sdk-typescript";

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
        queryFn: PokemonTCG.getAllSets,
    });
};

export const useGetSetsBySerieName = (search: string) => {
    return useQuery<PokemonTCG.Set[]>({
        queryKey: ["setsBySerie"],
        queryFn: () => PokemonTCG.findSetsByQueries({
            q: `series: ${search}`
        }),
        enabled: search.length > 0
    });
};