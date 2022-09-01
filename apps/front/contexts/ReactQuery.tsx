import { ReactNode } from "react"
import { QueryClient, QueryClientProvider } from "react-query"

const client = new QueryClient()

export const ReactQueryContext = ({ children }: { children?: ReactNode }) => {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>
}
