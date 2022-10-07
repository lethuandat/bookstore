import {AppUser} from "./app-user";

export interface Customer {
  id?: number;
  name?: string;
  idCard?: string;
  email?: string;
  birthDay?: string;
  phone?: string;
  address?: string;
  image?: string;
  isDeleted?: boolean;
  userDto?: AppUser;
}
