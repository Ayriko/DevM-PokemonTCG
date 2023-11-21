import { useQuery } from "@tanstack/react-query";
import { ApiClient } from "../api";

export type ResponseItem = {
    data: string[];
};

export type Response = ResponseItem[];

export const useGetRarities = () => {
    return useQuery<Response>({
        queryKey: ["rarities"],
        queryFn: ApiClient.getRarities,
    });
};