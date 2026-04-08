export enum Category {
  ALL = 'All',
  KIDS = 'Kids Art Activities',
  RESIN = 'Resin Art',
  HAMPERS = 'Gift Hampers',
  CORPORATE_ADULT = 'Corporate / Adults Art Activities',
  RETURN_GIFTS = 'Return Gift Options',
}

export interface Workshop {
  id: string;
  title: string;
  description: string;
  image: string;
  categories: Category[]; // Can belong to multiple
  isNew?: boolean;
}

export interface LiveStall {
  id: string;
  title: string;
  category: 'Entertainment' | 'Craft' | 'Food/Gift';
}

export type ViewState = 'home' | 'about' | Category;
