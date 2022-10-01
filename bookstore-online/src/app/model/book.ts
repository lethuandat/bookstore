import {Company} from "./company";
import {Category} from "./category";
import {Author} from "./author";

export interface Book {
  id?: number;
  name?: string;
  description?: string;
  image?: string;
  price?: number;
  numberOfPage?: number;
  authors?: Author;
  categories?: Category;
  companies?: Company;
}
