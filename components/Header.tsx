import React from 'react';

import { GlobalData } from '../lib/types';

import Navigation from './Navigation';
import SiteLogo from './logos/Sitelogo';

export default function Header({ name }: { name: GlobalData }): JSX.Element {
  return (
    <>
      {/* <Navigation siteData={name} /> */}
      <SiteLogo siteData={name} />
    </>
  );
}
