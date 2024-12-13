import { useQuery } from '@tanstack/react-query';
import { Star } from 'lucide-react';

const useTeams = () =>
  useQuery({
    queryKey: ['teams'],
    queryFn: async () => ({
      data: [
        {
          name: 'Laravel',
          logo: Star,
          plan: 'Gold',
        },
        {
          name: 'Laravel',
          logo: Star,
          plan: 'Gold',
        },
      ],
    }),
  });

export default useTeams;
