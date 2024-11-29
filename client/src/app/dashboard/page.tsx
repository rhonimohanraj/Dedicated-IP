'use client';

import { BlankView } from 'src/sections/blank/view';
import {useProducts} from "../../hooks/use-product";

// ----------------------------------------------------------------------

export default function Page() {
  const { isPending } = useProducts();

  if(isPending) return (
    <div>Loading...</div>
  )

  return <BlankView title="Page one" />;
}
