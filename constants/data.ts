import { Ionicons } from "@expo/vector-icons";

export type ServiceCategory = {
  id: string;
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
  description: string;
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "graphic-design",
    title: "Graphic Design",
    icon: "color-palette-outline",
    description: "Logos, branding",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    icon: "megaphone-outline",
    description: "Social media SEO",
  },
  {
    id: "video-animation",
    title: "Video & Animation",
    icon: "videocam-outline",
    description: "Explainer videos",
  },
  {
    id: "program-tech",
    title: "Program & Tech",
    icon: "code-slash-outline",
    description: "Web / App dev",
  },
  {
    id: "music-audio",
    title: "Music & Audio",
    icon: "musical-notes-outline",
    description: "Mixing, mastering",
  },
  {
    id: "product-photography",
    title: "Product Photography",
    icon: "camera-outline",
    description: "Studio, e-commerce",
  },
  {
    id: "ui-ux",
    title: "UI/UX Design",
    icon: "brush-outline",
    description: "User interface",
  },
  {
    id: "ai-services",
    title: "Build AI Services",
    icon: "hardware-chip-outline",
    description: "Chatbots, models",
  }, {
    id: "writing-translation",
    title: "Writing & Translation",
    icon: "document-text-outline",
    description: "Copywriting, translation",
  },
  {
    id: "translation",
    title: "Translation",
    icon: "language-outline",
    description: "Language translation services",
  }, {
    id: "voice-over",
    title: "Voice Over",
    icon: "mic-outline",
    description: "Voice recording services",
  },
  {
    id: "content-writing",
    title: "Content Writing",
    icon: "document-text-outline",
    description: "Blog posts, articles, copywriting",
  },{
    id: "social-media-management",
    title: "Social Media Management",
    icon: "share-social-outline",
    description: "Managing social media accounts and content creation",
  }
];

export type PopularService = {
  id: string;
  title: string;
  author: string;
  level: string;
  rating: number;
  priceFrom: number;
  image: string;
  avatar: string;
};

export const POPULAR_SERVICES: PopularService[] = [
  {
    id: "mobile-uiux",
    title: "Mobile App UI/UX design for your business",
    author: "Smith Duo",
    level: "Level 3 Seller",
    rating: 5.0,
    priceFrom: 120,
    image: "https://indianmediastudies.com/wp-content/uploads/2023/11/what-is-advertising-copy.jpeg",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROdxGHGI80UZ-3LIu6sHyLk1TYPl2hvoIGfw&s",
  },
  {
    id: "website-uiux",
    title: "Website UI/UX design for your business",
    author: "Alexa Perry",
    level: "Level 2 Seller",
    rating: 5.0,
    priceFrom: 180,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlUBmWPH2_suWQoJTgRymst2BUwwTgFft2vw&s",
    avatar: "https://img.freepik.com/vektoren-premium/laechelnde-frau-avatar_937492-6135.jpg?semt=ais_hybrid&w=740&q=80",
  },
];