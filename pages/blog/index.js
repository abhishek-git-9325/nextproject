import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Header from '@/component/header'
import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'
import FeaturedImage from '@/component/featureImage'
import Footer from '@/component/footer'

export async function getStaticProps(){
  const allPosts = await getAllPosts();

  return {
    props: {
      allPosts: allPosts,
    },
  }
}

export default function Blog({allPosts}) {
  return (
    <>
    <Head>
        <title>Blog</title>
        <meta name="description" content="The blog for practice" />
    </Head>
      <div className="h-[65vh] bg-[url('/blog-banner.png')] relative bg-cover bg-center">
        <div className='absolute bg-slate-900 inset-0 z-0 opacity-40'></div>
        <Header/>
        <div>
          <h1 className='text-6xl text-center text-slate-100 relative z-10 py-8'>BLOG</h1>
          <p className='text-center relative z-10 text-slate-200 text-2xl'>Read our latest articles</p>
        </div>
      </div>
      <main>
        <section className='container mx-auto lg:max-w-5xl post-list mt-4'>
          <ul>
            {
              allPosts.nodes.map((post)=>(
                <li key={post.slug} className="grid grid-cols-5 gap-4 mb-4">
                  <div className='col-span-2'>
                    <FeaturedImage post={post} />
                  </div>
                  <div className='col-span-3'>
                    <h2 className='py-4'>
                      <Link className='text-blue-700 text-2xl hover:text-blue-900' href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>
                    <div className='text-lg' dangerouslySetInnerHTML={{__html: post.excerpt}}></div>
                    <div className='py-4'>
                      Posted under {
                        post.categories.nodes.map((category)=>(
                          <Link className='text-blue-700 hover:text-blue-900 cursor-pointer' href={`/category/${category.slug}`} key={category.slug}>{category.name}</Link>
                        ))
                      }
                    </div>
                  </div>
                </li>
              ))
            }
          </ul>
        </section>
      </main>
      <Footer />
    </>
  )
}
