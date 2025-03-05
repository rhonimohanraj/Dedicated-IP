export interface ServerCreateDto {
  countryCode: string;
  location: string;
  server: string;
  datacenter: string;
  datacenterProvider: string;
  name: string;
  username: string;
  password: string;
  status: string;
  createdAt: FirebaseFirestore.Timestamp;
  subscription: string;
}

export interface ServerPrivateDto{
  api_key: string
}

export interface ServerUpdateDto {
  status?: string;
}
