import {View} from "react-native";
import {SetsComponent} from "../components/sets";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient()

export default function Sets() {
    return (
      <QueryClientProvider client={queryClient}>
          <SetsComponent />
      </QueryClientProvider>
    );
};