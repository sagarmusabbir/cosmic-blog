'use client';
import {
  Navbar,
  TextInput,
  Label,
  Dropdown,
  Button,
  DarkThemeToggle,
} from 'flowbite-react';
import { HiSearch } from 'react-icons/hi';
import type { FC } from 'react';
import Link from 'next/link';
import Logo from './logos/Logo';
import { Kbd } from 'flowbite-react';

const HeaderWithSearchBar: FC = function () {
  return (
    <Navbar className="bg-zinc-100 py-2 dark:bg-zinc-900">
      <Link href="./">
        <Navbar.Brand as={Link} href="./">
          <Logo className="stroke-blue h-6 sm:h-9 " />
        </Navbar.Brand>
      </Link>
      <div className="flex items-center lg:order-2">
        <form className="hidden md:block">
          <Label htmlFor="search-bar" className="sr-only">
            Search
          </Label>
          <TextInput
            icon={HiSearch}
            id="search-bar"
            placeholder="Search"
            type="search"
            className="mr-2 block [&_input]:py-2 [&_input]:!pl-10"
          />
        </form>
        <HiSearch className="mr-3 h-5 w-5 dark:text-gray-400 md:hidden" />
        {/* <span className="mx-3 hidden h-5 w-px bg-gray-200 dark:bg-gray-600 lg:ml-3 lg:inline" /> */}
        <DarkThemeToggle />
        <Navbar.Toggle theme={{ icon: 'h-5 w-5 shrink-0' }} className="ml-1" />
      </div>
      <Navbar.Collapse
        theme={{
          list: 'mt-4 flex flex-col lg:mt-0 lg:flex-row lg:space-x-8 lg:text-base lg:font-medium',
        }}
        className="lg:order-1"
      >
        <form className="mb-3 flex w-full items-center gap-3 md:hidden">
          <div className="flex-1">
            <Label htmlFor="search-bar" className="sr-only">
              Search
            </Label>
            <TextInput
              icon={HiSearch}
              id="search-bar"
              placeholder="Search for anything..."
              type="search"
              className="py-1.5"
            />
          </div>
          <Button type="submit">
            <HiSearch className="mr-2 h-5 w-5 text-gray-100" />
            Search
          </Button>
        </form>
        <Navbar.Link as={Link} href="./">
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} href="./about">
          About
        </Navbar.Link>
        <Navbar.Link as={Link} href="./blog">
          Blog
        </Navbar.Link>
        <Navbar.Link as={Link} href="/projects">
          Projects
        </Navbar.Link>
        <Navbar.Link as={Link} href="/contact">
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default HeaderWithSearchBar;
