import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
// import { getTodos, postTodo } from '../my-api'

// Create a client
export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            // queryFn: (query: string) => {}
        }
    }
})
