import {UserRole} from "./user-role";
import {Customer} from "./customer";

export interface AppUser {
  id?: number;
  username?: string;
  password?: string;
  creationDate?: string;
  isDeleted?: boolean;
  customer?: Customer;
  userRoles?: UserRole;
}
