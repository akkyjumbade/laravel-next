import { useQuery } from '@tanstack/react-query';
import {
  Atom,
  Bird,
  Grid2X2Icon,
  LucideWalletCards,
  Paperclip,
  Settings2,
  Star,
  Turtle,
} from 'lucide-react';

export const useTeams = () =>
  useQuery({
    queryKey: ['teams'],
    queryFn: async (_) => {
      return Promise.resolve({
        data: [
          {
            name: 'Acme Inc',
            logo: Atom,
            plan: 'Enterprise',
          },
        ],
      });
    },
  });

export const useMenusQuery = () =>
  useQuery({
    queryKey: ['menus'],
    queryFn: async () => {
      return {
        data: [
          {
            title: 'Taxonomies',
            url: '#',
            icon: LucideWalletCards,
            isActive: false,
            items: [
              {
                title: 'Categories',
                url: '#',
                icon: History,
                description: 'View your recent prompts',
              },
              {
                title: 'Tags',
                url: '#',
                icon: Star,
                description: 'Browse your starred prompts',
              },
              {
                title: 'Topics',
                url: '/topics',
                icon: Settings2,
                description: 'Configure your playground',
              },
            ],
          },
          {
            title: 'Resources',
            url: '/cp/resources',
            icon: Grid2X2Icon,
            items: [
              {
                title: 'Posts',
                url: '/cp/posts',
                icon: Paperclip,
                description: 'Our fastest model for general use cases.',
              },
              {
                title: 'Explorer',
                url: '#',
                icon: Bird,
                description: 'Performance and speed for efficiency.',
              },
              {
                title: 'Quantum',
                url: '#',
                icon: Turtle,
                description:
                  'The most powerful model for complex computations.',
              },
            ],
          },
          {
            title: 'Settings',
            url: '/settings',
            icon: Settings2,
            items: [
              {
                title: 'General',
                url: '/settings/general',
              },
              {
                title: 'Users',
                url: '/settings/users',
              },
              {
                title: 'Teams',
                url: '/settings/teams',
              },
              {
                title: 'Notifications',
                url: '/settings/notifications',
              },
              {
                title: 'Storage',
                url: '/settings/storage',
              },
            ],
          },
        ],
      };
    },
  });
