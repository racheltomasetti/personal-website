export type Curiosity = {
  id: string;
  title: string;
  description: string;
};

export const curiosities: Curiosity[] = [
  {
    id: 'ai',
    title: 'Artificial Intelligence',
    description: 'Exploring the intersection of human cognition and machine learning, particularly in creative and ethical domains.',
  },
  {
    id: 'design',
    title: 'Design Systems',
    description: 'Crafting cohesive and intuitive digital experiences through systematic design approaches.',
  },
  {
    id: 'philosophy',
    title: 'Philosophy of Technology',
    description: 'Understanding the profound ways technology shapes human experience and society.',
  },
  // Add more curiosities here
];
