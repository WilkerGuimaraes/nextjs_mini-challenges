export interface Root {
  first: number;
  prev: number | null;
  next: number | null;
  last: number;
  pages: number;
  items: number;
  data: User[];
}

export interface User {
  id: string;
  name: string;
  age: number;
  isActive: boolean;
  hobbies: string[];
  address: Address;
}

export interface Address {
  street: string;
  city: string;
  postalCode: string;
}
