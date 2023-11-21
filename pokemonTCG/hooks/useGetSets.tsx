import { useQuery } from "@tanstack/react-query";
import { ApiClient } from "../api";
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