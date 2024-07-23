export type User = {
  //cant share id type between front end and backend since by the time the record has reached the frontend the type has been changed to string
  _id: string;
  email: string;
  name: string;
  city: string;
  country: string;
};
