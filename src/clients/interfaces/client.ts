export interface Client {
  clients: ClientElement[];
}

export interface ClientElement {
  id:       number;
  isActive: boolean;
  picture:  string;
  age:      number;
  eyeColor: string;
  name:     string;
  gender:   Gender;
  company:  string;
  email:    string;
  phone:    string;
  address:  string;
}

export enum Gender {
  Female = "female",
  Male = "male",
}
