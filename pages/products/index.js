import React from 'react'
import Products from '@/component/products'
import Header from '@/component/header'
import Footer from '@/component/footer'
import { getProducts } from '@/lib/getProducts'

export default function productHome({allProducts}) {
    // console.warn(allProducts.products);
  return (
    <>
    <div className='productHome'>
    <Header />
    <Products products={allProducts.products}/>
    <Footer />
    </div>
    </>
  )
}

export async function getStaticProps(){
    const allProducts = await getProducts();
  
    return {
      props: {
        allProducts: allProducts || {},
      },
    }
}