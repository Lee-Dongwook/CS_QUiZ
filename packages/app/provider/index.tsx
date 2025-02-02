import { SafeArea } from "./safe-area";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "app/api/queryClient";

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeArea>{children}</SafeArea>
    </QueryClientProvider>
  );
}
