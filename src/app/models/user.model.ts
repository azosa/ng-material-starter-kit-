export interface UserModel {
  readonly email: string;
  readonly username: string;
  readonly password: string;
  readonly name: Array<Name>;
  readonly address: Array<Address>;
  readonly phone: string;
}
interface Name {
  readonly firstname: string;
  readonly lastname: string;
}

interface Address {
  readonly city: string,
  readonly street: string,
  readonly number: number,
  readonly zipcode: string,
  readonly geolocation: Array<Geolocation>;
}

interface Geolocation {
  readonly lat: string;
  readonly long: string;
}
