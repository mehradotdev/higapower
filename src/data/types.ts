export type MediaType = 'image' | 'gif' | 'video';

export interface Testimonial {
  name: string;
  image: string;
  quote: string;
  link: string;
}

export interface GalleryItem {
  thumb: string;
  full: string;
  alt: string;
  type?: MediaType;
  videoSrc?: string;
}

export interface EventItem {
  title: string;
  description: string;
  image: string;
  date: string;
  location: string;
  status: 'Completed' | 'Upcoming' | 'Active';
  link?: string;
  isFeatured?: boolean;
}

export interface JourneyStep {
  step: string;
  title: string;
  description: string;
}
