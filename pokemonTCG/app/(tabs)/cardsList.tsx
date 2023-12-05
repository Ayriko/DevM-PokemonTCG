import {View} from "react-native";
import {SetsComponent} from "../../components/sets";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {CardsListComponent} from "../../components/cardsListComponent";

const queryClient = new QueryClient()

export default function CardsList() {
  return (
    <QueryClientProvider client={queryClient}>
      <CardsListComponent />
    </QueryClientProvider>
  );
};