import { SafeArea } from "./safe-area";
import { AuthProvider } from "./auth-provider";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "app/api/queryClient";

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <SafeArea>{children}</SafeArea>
      </QueryClientProvider>
    </AuthProvider>
  );
}
