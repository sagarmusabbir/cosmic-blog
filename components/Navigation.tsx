'use client';

import Link from 'next/link';
import { Button, DarkThemeToggle, Navbar } from 'flowbite-react';
import { GlobalData } from '../lib/types';

import { usePathname } from 'next/navigation';

export default function Navigation({
  siteData,
}: {
  siteData: GlobalData;
}): JSX.Element {
  const pathname = usePathname();
  return (
    <Navbar sticky-top fluid className="bg-white dark:bg-gray-900 ">
      <Navbar.Brand as={Link} href="./">
        {/* <M className="mr-3" /> */}
        {/* {siteData.metadata.site_title} */}
        <span className="self-center whitespace-nowrap text-xl  dark:text-white">
          {siteData.metadata.site_title}
        </span>
      </Navbar.Brand>
      <div className="flex items-center gap-3 md:order-2 md:gap-2 lg:order-2">
        <DarkThemeToggle />
        <Button color="blue" href="#">
          Get started
        </Button>

        <Navbar.Toggle
          theme={{
            // icon: "h-5 w-5 shrink-0",
            base: 'inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden',
          }}
        />
      </div>
      <Navbar.Collapse
        theme={{
          list: 'mt-4 flex flex-col lg:mt-0 lg:flex-row md:flex-row md:mt-0 md:space-x-4 lg:space-x-8 lg:text-base lg:font-medium md:text-[14px] md:font-normal',
          // base: "w-full md:block md:w-auto ",
        }}
        className="md:order-1 lg:order-1"
      >
        <Navbar.Link
          className={`link ${pathname === '/' ? 'active' : ''}`}
          href="/"
        >
          Home
        </Navbar.Link>
        <Navbar.Link
          as={Link}
          className={`link ${pathname === '/about' ? 'active' : ''}`}
          href="/about"
        >
          About
        </Navbar.Link>
        <Navbar.Link
          as={Link}
          className={`link ${pathname === '/posts' ? 'active' : ''}`}
          href="/posts"
        >
          Blog
        </Navbar.Link>
        <Navbar.Link
          as={Link}
          className={`link ${pathname === '/projects' ? 'active' : ''}`}
          href="/projects"
        >
          Projects
        </Navbar.Link>
        <Navbar.Link
          as={Link}
          className={`link ${pathname === '/contact' ? 'active' : ''}`}
          href="/contact"
        >
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
