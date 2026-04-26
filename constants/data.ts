import { Ionicons } from "@expo/vector-icons";

export type ServiceCategory = {
  id: string;
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "graphic-design",
    title: "Graphic Design",
    icon: "color-palette-outline",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    icon: "megaphone-outline",
  },
  {
    id: "video-animation",
    title: "Video & Animation",
    icon: "videocam-outline",
  },
  {
    id: "program-tech",
    title: "Program & Tech",
    icon: "code-slash-outline",
  },
  {
    id: "music-audio",
    title: "Music & Audio",
    icon: "musical-notes-outline",
  },
  {
    id: "product-photography",
    title: "Product Photography",
    icon: "camera-outline",
  },
  {
    id: "ui-ux",
    title: "UI/UX Design",
    icon: "brush-outline",
  },
  {
    id: "ai-services",
    title: "Build AI Services",
    icon: "hardware-chip-outline",
  },
];


// 🔥 ДОБАВИЛ НИЖЕ

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