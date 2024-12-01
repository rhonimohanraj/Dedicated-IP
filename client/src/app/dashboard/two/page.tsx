'use client';

import { BlankView } from 'src/sections/blank/view';
import {collection, doc, setDoc} from "firebase/firestore";
import {useEffect} from "react";
import {FIRESTORE} from "../../../libs/firebase/firebase";

// ----------------------------------------------------------------------

export default function Page() {
  const server = doc(collection(FIRESTORE, 'servers'), '1234567890');

  useEffect(() => {
    setDoc(server, {
      ip: '5.10.15.20',
      location: 'nuremberg',
      status: 'online',
    });
  }, [server]);

  return <BlankView title="Page two" />;
}
