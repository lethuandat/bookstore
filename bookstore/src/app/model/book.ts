import {Category} from "./category";

export interface Book {
  id?: number;
  name?: string;
  description?: string;
  image?: string;
  size?: string;
  price?: number;
  numberOfPage?: number;
  quantity?: number;
  date?: string;
  author?: string;
  categories?: Category;
  company?: string;
  isDeleted?: boolean;
}
