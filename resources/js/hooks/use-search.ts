import { useQuery } from '@tanstack/react-query';

export const useSearch = () =>
  useQuery({
    queryKey: ['search'],
    queryFn: async () => {
      return {
        data: [
          {
            title: 'Routing Fundamentals',
            teaser:
              'The skeleton of every application is routing. This page will introduce you to the fundamental concepts of routing for the web and how to handle routing in Next.js.',
            url: '#',
          },
          {
            title: 'Layouts and Templates',
            teaser:
              'The special files layout.js and template.js allow you to create UI that is shared between routes. This page will guide you through how and when to use these special files.',
            url: '#',
          },
          {
            title: 'Data Fetching, Caching, and Revalidating',
            teaser:
              'Data fetching is a core part of any application. This page goes through how you can fetch, cache, and revalidate data in React and Next.js.',
            url: '#',
          },
          {
            title: 'Server and Client Composition Patterns',
            teaser:
              'When building React applications, you will need to consider what parts of your application should be rendered on the server or the client. ',
            url: '#',
          },
          {
            title: 'Server Actions and Mutations',
            teaser:
              'Server Actions are asynchronous functions that are executed on the server. They can be used in Server and Client Components to handle form submissions and data mutations in Next.js applications.',
            url: '#',
          },
        ],
      };
    },
  });
