//@ts-nocheck
import { createInertiaApp } from '@inertiajs/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot, hydrateRoot } from 'react-dom/client';
import '../css/app.css';
import './bootstrap';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

// import { getTodos, postTodo } from '../my-api'
const headers = new Headers({
    Accept: 'application/json',
});
// Create a client
export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            async queryFn({ queryKey, signal }) {
                let res = await fetch(
                    new Request(queryKey[0], {
                        headers,
                        signal,
                    }),
                );
                if (!res.ok) {
                    let err = await res.json();
                    throw new Error(err);
                }
                res = await res.json();
                return res;
            },
        },
    },
});

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.tsx`,
            import.meta.glob('./Pages/**/*.tsx'),
        ),
    setup({ el, App, props }) {
        if (import.meta.env.SSR) {
            hydrateRoot(el, <App {...props} />);
            return;
        }

        createRoot(el).render(
            <QueryClientProvider client={queryClient}>
                <App {...props} />
            </QueryClientProvider>,
        );
    },
    progress: {
        color: '#4B5563',
    },
});
