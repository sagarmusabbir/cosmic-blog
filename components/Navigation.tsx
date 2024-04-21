'use client';

import { Button, Navbar } from 'flowbite-react';

import Link from 'next/link';

export function Navigation() {
  return (
    <Navbar fluid className=" bg-zinc-100 dark:bg-zinc-900">
      <Navbar.Brand as={Link} href="./">
        {/* <img
          src="/favicon.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Musabbir Sagars Avatar"
        /> */}
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          MS
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link as={Link} href="./">
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} href="./about">
          About
        </Navbar.Link>
        <Navbar.Link href="./blog">Blog</Navbar.Link>
        <Navbar.Link href="/projects">Projects</Navbar.Link>
        <Navbar.Link href="/contact">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
