export interface Rows {
  id: number;
  name: string;
  age: number;
  country: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    city: string;
  };
}
