export type Project = {
  title: string;
  category: string;
  description: string;
  href?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    title: "Client Work",
    category: "Business / Services",
    description:
      "Visual content designed to help businesses, organizations, and communities communicate clearly and grow with purpose.",
    href: "/services",
    image: "/images/business-storytelling.jpg",
  },
  {
    title: "Granville Stories",
    category: "Community / Storytelling",
    description:
      "A long-term storytelling initiative focused on preserving the voices, stories, and history of Granville through interviews and visual storytelling.",
    href: "/granville-stories",
    image: "/images/granville-stories.jpg",
  },
  {
    title: "Grant You a Story",
    category: "Behind the Scenes / Personal",
    description:
      "A storytelling platform built around behind the scenes moments, real adventures, travel, and the process behind the work.",
    href: "/grantyouastory",
    image: "/images/grant-you-a-story.jpg",
  },
];