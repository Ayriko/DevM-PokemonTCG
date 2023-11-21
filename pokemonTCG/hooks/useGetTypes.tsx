import { useQuery } from "@tanstack/react-query";
import { ApiClient } from "../api";

export type ResponseItem = {
    data: string[];
};

export type Response = ResponseItem[];

export const useGetTypes = () => {
    return useQuery<Response>({
        queryKey: ["types"],
        queryFn: ApiClient.getTypes,
    });
};