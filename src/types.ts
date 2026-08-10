export interface Business {
  id: string;
  title: string;
  description: string;
  iconName: string;
  image: string;
  details: string[];
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface NewsItem {
  id: string;
  title: string;
  category: string;
  date: string;
  image: string;
  summary: string;
}

export interface CareerOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  logoText: string;
}
