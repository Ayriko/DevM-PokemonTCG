import { useQuery } from "@tanstack/react-query";
import { ApiClient } from "../api";

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

export const useGetCards = () => {
    return useQuery<Response>({
        queryKey: ["cards"],
        queryFn: ApiClient.getCards,
    });
};