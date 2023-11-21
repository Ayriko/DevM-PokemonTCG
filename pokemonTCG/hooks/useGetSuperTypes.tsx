import { useQuery } from "@tanstack/react-query";
import { ApiClient } from "../api";

export type ResponseItem = {
    data: string[];
};

export type Response = ResponseItem[];

export const useGetSuperTypes = () => {
    return useQuery<Response>({
        queryKey: ["supertypes"],
        queryFn: ApiClient.getSuperTypes,
    });
};