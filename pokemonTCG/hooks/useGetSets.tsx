import { useQuery } from "@tanstack/react-query";
import { ApiClient } from "../api";

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
    return useQuery<Response>({
        queryKey: ["sets"],
        queryFn: ApiClient.getSets,
    });
};