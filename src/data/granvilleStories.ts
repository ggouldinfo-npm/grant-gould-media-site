export type GranvilleStory = {
  title: string;
  category: string;
  description: string;
  status?: string;
  href?: string;
};

export const granvilleStories: GranvilleStory[] = [
  {
    title: "First Interview",
    category: "Featured Story",
    description:
      "The first long-form Granville Stories interview will live here once published.",
    status: "Coming soon",
  },
  {
    title: "Community Voices",
    category: "Oral History",
    description:
      "A growing archive of stories, memories, and lived experiences from around the community.",
    status: "In development",
  },
  {
    title: "Local History",
    category: "Archive",
    description:
      "Stories connected to Granville’s people, identity, places, and historical legacy.",
    status: "In development",
  },
];