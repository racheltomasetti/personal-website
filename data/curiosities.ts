export type Curiosity = {
  id: string;
  title: string;
  description: string;
};

export const curiosities: Curiosity[] = [
  {
    id: 'tech',
    title: 'technology',
    description: 'how can technology be utilized for good?',
  },
  {
    id: 'women',
    title: 'women\'s health',
    description: '\"While many of the world\'s natural resources are being depleted, one is waiting to be unleashed—women.\" -Sara Blakely',
  },
  {
    id: 'mind-body',
    title: 'mind-body connection',
    description: 'learning to live in the present moment',
  },
  // Add more curiosities here
];
