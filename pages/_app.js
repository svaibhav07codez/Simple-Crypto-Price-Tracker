import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "../styles/globals.css"; // Ensure this file exists

const queryClient = new QueryClient();

export default function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
