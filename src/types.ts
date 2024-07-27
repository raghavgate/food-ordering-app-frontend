export type User = {
  //cant share id type between front end and backend since by the time the record has reached the frontend the type has been changed to string
  _id: string;
  email: string;
  name: string;
  city: string;
  country: string;
};

export type MenuItem = {
  _id: string;
  name: string;
  price: number;
};

export type Restaurant = {
  _id: string;
  user: string;
  restaurantName: string;
  city: string;
  country: string;
  deliveryPrice: number;
  estimatedDeliveryTime: number;
  cuisines: string[];
  menuItems: MenuItem[];
  imageUrl: string;
  lastUpdated: string;
};
