import Head from 'next/head'
import Header from '@/component/header'
import Link from 'next/link'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title key="title">Next Blog</title>
        <meta name="description" content="The next blog for practice" />
        <meta name="viewport" key="metadescription" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-[url('/tiny.webp')] relative bg-cover bg-top">
        <div className='absolute bg-slate-900 inset-0 z-0 opacity-40'></div>
        <Header></Header>
        <main>
        <div className='min-h-[50vh] flex flex-col items-center justify-center z-10 relative'>
          <h1 className='text-6xl text-white'>Welcome to <span className='text-blue-700'>Next Blog</span></h1>
          <div className='mt-20'>
            <Link href="/blog" className='text-2xl text-slate-800 bg-slate-100 border py-3 px-4 hover:bg-blue-700 transition rounded'>Read Blog</Link>
          </div>
        </div>
      </main>
      </div>
    </>
  )
}