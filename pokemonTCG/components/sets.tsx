import {useGetSetsBySerieName} from "../hooks/useGetSets";

export const useSets = (serieName: string) => {
  console.log(serieName)
  return useGetSetsBySerieName(serieName)
}