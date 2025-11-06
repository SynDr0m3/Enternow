export interface IStaff {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IAddress;
  phone: string;
  website: string;
  company: ICompany;
  signInCount: number;
  latenessCount: number;
  deductions: number;
  signInHistory: ISignInRecord[];
}

export interface ISignInRecord {
  date: string;
  timeIn: string;
  timeOut: string;
  isLate: boolean;
}

export interface IAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: IGeo;
}
export interface IGeo {
  lat: string;
  lng: string;
}
export interface ICompany {
  name: string;
  catchPhrase: string;
  bs: string;
}
