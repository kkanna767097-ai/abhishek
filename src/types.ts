export type MenuCategory = 
  | 'all'
  | 'biryani'
  | 'haleem'
  | 'starters'
  | 'curries'
  | 'breads'
  | 'chai-bakery'
  | 'desserts'
  | 'handi-bulk';

export interface MenuItem {
  id: string;
  name: string;
  urduName?: string;
  category: MenuCategory;
  price: number;
  description: string;
  isVeg: boolean;
  isSpicy?: boolean;
  spiceLevel?: 1 | 2 | 3;
  isSpecial?: boolean;
  isBestSeller?: boolean;
  serves?: string;
  portionSize?: string;
  imageUrl: string;
  prepTimeMinutes?: number;
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
  portionNotes?: string;
}

export interface TableReservation {
  name: string;
  phone: string;
  email?: string;
  guests: number;
  date: string;
  timeSlot: string;
  section: 'Family AC Dining' | 'Main AC Dining' | 'General Hall' | 'Banquet Hall Inquiry';
  specialRequests?: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  date: string;
  platform: 'Google' | 'Justdial' | 'Zomato' | 'Swiggy';
  comment: string;
  favoriteDish: string;
}
