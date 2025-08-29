import { User } from "../user/user";
import { ProductCategory } from "./category/category";

export class Product {
  id!: number;
  name!: string;
  description!: string;
  unitPrice!: number;
  imageUrl!: string;
  active!: boolean;
  unitsInStock!: number;
  dateCreated!: Date;
  lastUpdated!: Date;

  productStatus?: any;
  category?: ProductCategory;
  wishList?: any;
  provider?: User;
}