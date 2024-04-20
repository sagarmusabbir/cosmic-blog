import Link from 'next/link';
import OBMLogo from './OBMLogo';
import Logo from './Logo';
import { GlobalData } from '../../lib/types';
import Image from 'next/image';

export default function SiteLogo({
  siteData,
}: {
  siteData: GlobalData;
}): JSX.Element {
  return (
    <div className="mx-auto flex w-full max-w-screen-xl flex-col items-center justify-between px-4 py-4 md:flex-row lg:px-0">
      <h1 className="flex justify-center space-x-2">
        {/* <Image src="/kkk.svg" alt="My SVG" width={200} height={200}/> */}
        <Logo className="h-10 w-10" />
        <Link
          href="/"
          className="bg-gradient-to-r from-cyan-700 to-teal-600 bg-clip-text text-4xl font-bold tracking-tighter text-transparent dark:from-cyan-300 dark:to-teal-200"
        >
          {siteData.metadata.site_title}
        </Link>
      </h1>

      <span className="relative hidden text-lg tracking-wide text-zinc-500 dark:text-zinc-200 md:flex">
        {siteData.metadata.site_tag}
      </span>
    </div>
  );
}
