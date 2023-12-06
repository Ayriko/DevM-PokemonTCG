import {View} from "react-native";
import {SetsComponent} from "../../components/sets";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {CardDetailComponent} from "../../components/cardDetailComponent";

const queryClient = new QueryClient()

export default function CardDetail() {
  return (
    <QueryClientProvider client={queryClient}>
      <CardDetailComponent />
    </QueryClientProvider>
  );
};