import React from 'react';
import CosmicLogo from './logos/CosmicLogo';
import Logo from './logos/Logo';

export default function Footer(): JSX.Element {
  return (
    <footer className="mx-auto mt-8 flex w-full max-w-3xl items-center justify-between px-4 py-4 text-xs md:text-sm lg:px-0 lg:text-base">
      <a
        href="https://www.cosmicjs.com"
        target="_blank"
        className="no-underline"
      >
        <div className="flex items-center space-x-2">
          <Logo className="h-8 w-8" />
          <span className="text-zinc-700 dark:text-zinc-300">
            Proud contributor of NoMadGang
          </span>
        </div>
      </a>
      <div className="text-zinc-700 dark:text-zinc-300">
        &copy;&nbsp;&nbsp;{new Date().getFullYear()} Cosmic
      </div>
    </footer>
  );
}
