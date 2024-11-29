import { useQuery } from '@tanstack/react-query';
// eslint-disable-next-line import/no-extraneous-dependencies
import {fetchAndActivate, getValue} from '@firebase/remote-config';
import { REMOTE_CONFIG } from '../libs/firebase/firebase';

type Product = {
  title: string;
  description: string;
  price: number;
  discount_price: number;
  server: number;
  country: string;
  city: string;
  datacenter: string;
};

const fetchProducts = async (): Promise<Array<Product>> => {
  await fetchAndActivate(REMOTE_CONFIG)
  const val = getValue(REMOTE_CONFIG, 'Products').asString();
  return JSON.parse(val);
};

const useProducts = () =>
  useQuery({
    queryKey: ['products'],
    queryFn: () => fetchProducts(),
  });

export { useProducts, fetchProducts };
