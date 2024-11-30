'use client';

import { useQuery } from '@tanstack/react-query';
// eslint-disable-next-line import/no-extraneous-dependencies
import {fetchAndActivate, getValue} from '@firebase/remote-config';
import {getRemoteConfig} from "firebase/remote-config";
import {firebaseApp} from "../libs/firebase/firebase";

export type ProductCatalog = {
  Products: Array<Product>;
}

export type Product = {
  title: string;
  description: string;
  price: number;
  discount_price: number;
  server: number;
  country: string;
  country_code: string;
  city: string;
  datacenter: string;
  stripe_link: string;
  features: string[];
};

const fetchProducts = async (): Promise<ProductCatalog> => {
  const REMOTE_CONFIG = getRemoteConfig(firebaseApp);
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
