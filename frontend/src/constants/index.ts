export interface Companion {
  id: string;
  name: string;
  age: number;
  city: string;
  country: string;
  avatar: string;
  coverPhoto: string;
  rating: number;
  reviewCount: number;
  hourlyRate: number;
  languages: string[];
  interests: string[];
  bio: string;
  verified: boolean;
  womenOnly: boolean;
  responseTime: string;
  completedTours: number;
  availability: string[];
}

export interface Event {
  id: string;
  title: string;
  city: string;
  date: string;
  image: string;
  category: string;
  postedBy: string;
  description: string;
  attendees: number;
}

export interface Review {
  id: string;
  author: string;
  avatar: string;
  rating: number;
  date: string;
  comment: string;
  tripType: string;
  localFriendId: string;
}

export const LOCAL_FRIENDS: Companion[] = [
  {
    id: "lf1",
    name: "Priya Sharma",
    age: 26,
    city: "Mumbai",
    country: "India",
    avatar: "https://images.unsplash.com/photo-1534777367038-9404f45b869a?w=200&h=200&fit=crop&auto=format",
    coverPhoto: "https://images.unsplash.com/photo-1774223146898-04bbc014a444?w=600&h=300&fit=crop&auto=format",
    rating: 4.96,
    reviewCount: 142,
    hourlyRate: 12,
    languages: ["English", "Hindi", "Marathi"],
    interests: ["Street Food", "Hidden Gems", "Cultural Walks", "Photography"],
    bio: "Born and raised in Mumbai, I know every chai stall and secret viewpoint this city has. I specialize in showing the real Mumbai — the one tourists never see.",
    verified: true,
    womenOnly: true,
    responseTime: "< 1 hr",
    completedTours: 189,
    availability: ["Mon", "Tue", "Thu", "Sat", "Sun"],
  },
  {
    id: "lf2",
    name: "Carlos Mendez",
    age: 30,
    city: "Barcelona",
    country: "Spain",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&auto=format",
    coverPhoto: "https://images.unsplash.com/photo-1780241925740-23c28c23faef?w=600&h=300&fit=crop&auto=format",
    rating: 4.91,
    reviewCount: 98,
    hourlyRate: 18,
    languages: ["English", "Spanish", "Catalan"],
    interests: ["Food Tours", "Architecture", "Nightlife", "Photography"],
    bio: "Third-generation Barcelonan. I'll take you to the tapas bars my grandfather built, and the rooftops no guidebook knows about.",
    verified: true,
    womenOnly: false,
    responseTime: "< 2 hrs",
    completedTours: 127,
    availability: ["Wed", "Fri", "Sat", "Sun"],
  },
  {
    id: "lf3",
    name: "Yuki Tanaka",
    age: 24,
    city: "Tokyo",
    country: "Japan",
    avatar: "https://images.unsplash.com/photo-1520466809213-7b9a56adcd45?w=200&h=200&fit=crop&auto=format",
    coverPhoto: "https://images.unsplash.com/photo-1778532747860-c730f283fc7a?w=600&h=300&fit=crop&auto=format",
    rating: 5.0,
    reviewCount: 67,
    hourlyRate: 22,
    languages: ["English", "Japanese", "Korean"],
    interests: ["Anime Culture", "Hidden Cafés", "Shopping", "Cultural Walks"],
    bio: "Tokyo is a city of layers. I'll help you peel back each one — from Shibuya's chaos to Yanaka's quiet alleyways.",
    verified: true,
    womenOnly: true,
    responseTime: "< 30 min",
    completedTours: 84,
    availability: ["Tue", "Thu", "Fri", "Sat"],
  },
  {
    id: "lf4",
    name: "Amara Diallo",
    age: 28,
    city: "Accra",
    country: "Ghana",
    avatar: "https://images.unsplash.com/photo-1583635658408-1f93b11d7941?w=200&h=200&fit=crop&auto=format",
    coverPhoto: "https://images.unsplash.com/photo-1670852453934-4ff54fbe77be?w=600&h=300&fit=crop&auto=format",
    rating: 4.88,
    reviewCount: 53,
    hourlyRate: 8,
    languages: ["English", "Twi", "French"],
    interests: ["Music & Art", "Markets", "Food Tours", "History"],
    bio: "Accra has the most vibrant energy you'll ever experience. Let me take you through the kente markets, jazz bars, and local chop houses.",
    verified: true,
    womenOnly: false,
    responseTime: "< 3 hrs",
    completedTours: 71,
    availability: ["Mon", "Wed", "Fri", "Sat", "Sun"],
  },
  {
    id: "lf5",
    name: "Sofia Rossi",
    age: 32,
    city: "Rome",
    country: "Italy",
    avatar: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=200&h=200&fit=crop&auto=format",
    coverPhoto: "https://images.unsplash.com/photo-1599033183537-54ff77f58f75?w=600&h=300&fit=crop&auto=format",
    rating: 4.94,
    reviewCount: 211,
    hourlyRate: 20,
    languages: ["English", "Italian", "French"],
    interests: ["Food Tours", "History", "Hidden Gems", "Shopping"],
    bio: "A Roman by birth, a storyteller by nature. I'll show you the trattoria where Fellini ate and the fountain no tourist ever visits.",
    verified: true,
    womenOnly: false,
    responseTime: "< 1 hr",
    completedTours: 256,
    availability: ["Mon", "Tue", "Wed", "Thu", "Fri"],
  },
  {
    id: "lf6",
    name: "Fatima Al-Rashid",
    age: 27,
    city: "Istanbul",
    country: "Turkey",
    avatar: "https://images.unsplash.com/photo-1762331653506-ce47db22df53?w=200&h=200&fit=crop&auto=format",
    coverPhoto: "https://images.unsplash.com/photo-1551883709-2516220df0bc?w=600&h=300&fit=crop&auto=format",
    rating: 4.97,
    reviewCount: 88,
    hourlyRate: 14,
    languages: ["English", "Turkish", "Arabic"],
    interests: ["Cultural Walks", "Food Tours", "Photography", "Bazaars"],
    bio: "Istanbul sits between two worlds — and I know both. From the Grand Bazaar's secrets to the Bosphorus at dawn, I'll make this city unforgettable.",
    verified: true,
    womenOnly: true,
    responseTime: "< 1 hr",
    completedTours: 112,
    availability: ["Tue", "Wed", "Fri", "Sat", "Sun"],
  },
];

export const EVENTS: Event[] = [
  {
    id: "e1",
    title: "Navratri Night Celebration",
    city: "Ahmedabad, India",
    date: "Oct 3–12, 2025",
    image: "https://images.unsplash.com/photo-1551883709-2516220df0bc?w=600&h=400&fit=crop&auto=format",
    category: "Festival",
    postedBy: "Priya Sharma",
    description: "Nine nights of music, dance, and color. Join us for the world's largest folk dance celebration with 10,000 participants.",
    attendees: 234,
  },
  {
    id: "e2",
    title: "Barcelona Night Market",
    city: "Barcelona, Spain",
    date: "Every Friday",
    image: "https://images.unsplash.com/photo-1670852453934-4ff54fbe77be?w=600&h=400&fit=crop&auto=format",
    category: "Market",
    postedBy: "Carlos Mendez",
    description: "Street food, local artisans, and live flamenco in the heart of El Born neighborhood.",
    attendees: 89,
  },
  {
    id: "e3",
    title: "Tokyo Lantern Festival",
    city: "Tokyo, Japan",
    date: "Aug 15, 2025",
    image: "https://images.unsplash.com/photo-1778532747860-c730f283fc7a?w=600&h=400&fit=crop&auto=format",
    category: "Cultural",
    postedBy: "Yuki Tanaka",
    description: "Float paper lanterns on the Sumida River as locals do. A meditative, beautiful experience.",
    attendees: 156,
  },
  {
    id: "e4",
    title: "Accra Chale Wote Art Festival",
    city: "Accra, Ghana",
    date: "Aug 22–25, 2025",
    image: "https://images.unsplash.com/photo-1599033183537-54ff77f58f75?w=600&h=400&fit=crop&auto=format",
    category: "Art & Music",
    postedBy: "Amara Diallo",
    description: "West Africa's biggest street art festival transforms James Town into a living gallery.",
    attendees: 312,
  },
  {
    id: "e5",
    title: "Istanbul Spice Bazaar Tour",
    city: "Istanbul, Turkey",
    date: "Every Saturday",
    image: "https://images.unsplash.com/photo-1774223146898-04bbc014a444?w=600&h=400&fit=crop&auto=format",
    category: "Food",
    postedBy: "Fatima Al-Rashid",
    description: "Navigate 4,000 stalls with a local guide. Taste, smell, and haggle your way through history.",
    attendees: 47,
  },
];

export const REVIEWS: Review[] = [
  {
    id: "r1",
    author: "Jessica M.",
    avatar: "https://images.unsplash.com/photo-1534777367038-9404f45b869a?w=100&h=100&fit=crop&auto=format",
    rating: 5,
    date: "June 2025",
    comment: "Priya showed me a Mumbai I never would have found on my own. We ate vada pav at a stall that's been there since 1952, watched the Dhobi Ghat workers, and ended with sunset at a rooftop I'd never find in any guide. Absolutely magical.",
    tripType: "Solo Travel",
    localFriendId: "lf1",
  },
  {
    id: "r2",
    author: "Aiko T.",
    avatar: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=100&h=100&fit=crop&auto=format",
    rating: 5,
    date: "May 2025",
    comment: "As a solo female traveler, I was nervous. Yuki made me feel completely safe and welcomed. Her knowledge of Tokyo's subcultures is encyclopedic. I saw a different city.",
    tripType: "Women Solo",
    localFriendId: "lf3",
  },
  {
    id: "r3",
    author: "Marcus R.",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&auto=format",
    rating: 5,
    date: "April 2025",
    comment: "Carlos took us to his grandmother's favorite market and a rooftop bar that isn't on Google Maps. The best €54 I've ever spent.",
    tripType: "Couple",
    localFriendId: "lf2",
  },
  {
    id: "r4",
    author: "Lena W.",
    avatar: "https://images.unsplash.com/photo-1762331653506-ce47db22df53?w=100&h=100&fit=crop&auto=format",
    rating: 5,
    date: "March 2025",
    comment: "Sofia is a genuine treasure. Four hours with her taught me more about Rome than four days of solo wandering. Lunch at her cousin's trattoria was the highlight of my trip.",
    tripType: "Solo Travel",
    localFriendId: "lf5",
  },
];
