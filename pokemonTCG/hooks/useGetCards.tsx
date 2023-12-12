import { useQuery } from "@tanstack/react-query";
import { PokemonTCG } from "pokemon-tcg-sdk-typescript";
import {POKEMONTCG_API_KEY} from "@env";

export const useGetCardById = (id: string) => {
    return useQuery<PokemonTCG.Card>({
        queryKey: ["cardById", id],
        queryFn: () => fetch(`https://api.pokemontcg.io/v2/cards?q=id:${id}`, { headers: new Headers({ 'x-api-key': POKEMONTCG_API_KEY }) })
          .then((res) => res.json())
          .then((res) => res.data?.[0]),
        enabled: id.length > 0
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
