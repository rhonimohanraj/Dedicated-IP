'use client';

import type {ReactNode} from 'react';

import React, { useEffect} from 'react';
import {initializeAppCheck, ReCaptchaEnterpriseProvider} from "firebase/app-check";

import {firebaseApp} from "../firebase";
import {CONFIG} from "../../../config-global";

function AppCheck(): ReactNode {
  useEffect(() => {
    initializeAppCheck(firebaseApp,{
      provider: new ReCaptchaEnterpriseProvider(CONFIG.firebase.appCheckSiteKey),
      isTokenAutoRefreshEnabled: true,
    })
  });
  return <></>;
}

export default AppCheck;
