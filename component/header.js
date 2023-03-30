import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <>
    <header>
      <div className='header-container container mx-auto z-10 relative flex justify-between items-center px-5'>
          <div className='logo-area'>
          <Link href="/" className='flex justify-center py-5'>
          <Image src="/blog-logo.png" alt="logo" width="80" height="80" />
          </Link>
          </div>
          <nav className='text-slate-100'>
            <ul className='flex justify-center [&>li>a]:px-3 [&>li>a]:py-2 [&>li>a:hover]:text-blue-700 [&>li>a]:transition text-xl'>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
          </div>
        </header>
    </>
  )
}
