import { View, Text } from 'react-native'
import React from 'react'
import { useGetSets } from '../hooks/useGetSets'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// Create a client
const queryClient = new QueryClient()

export default function App() {

  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <Sets />
    </QueryClientProvider>
  )
}

function Sets() {

  // Query
  const { data } = useGetSets();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#7c91bd",
      }}
    >
      <Text>{"Sets"}</Text>
      {data?.map((item) => (
        <Text key={item.id}>{item.name}</Text>
      ))}
    </View>
  )
}