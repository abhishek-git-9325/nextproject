import Link from 'next/link'
import React from 'react'

function Products({products}) {
    // console.warn(products);
  return (
    <>
    <div class="p-8 bg-amber-300">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
            {products.length ? products.map(product => (
                <div key={product.id} class="p-4 bg-cyan-400 rounded-md flex items-center justify-center">
                    <Link href={product?.permalink ?? '/'}>
                        {product.name}
                    </Link>
                </div>
            )): null}
        </div>
    </div>
    </>
  )
}

export default Products
