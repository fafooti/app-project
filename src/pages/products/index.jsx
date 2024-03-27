import Layout from '@/layouts/Layout'
import Categories from '@/modules/Products/Categories';
import ProductDetails from '@/modules/Products/ProductDetails';
import ProductsList from '@/modules/Products/ProductsList'
import React from 'react'

function index() {
  return (
    <Layout>
      <div className="flex flex-col  items-center justify-between max-w-screen min-h-screen overflow-hidden">
        <div
          style={{ background: "url('/background/hero.svg')" }}
          className="!bg-no-repeat !bg-contain    "
        >
          <div className="min-w-screen  mx-auto pt-16">
            <ProductDetails />
            <Categories/>
          </div>
           <div className="w-11/12 mx-auto mt-32">
              <ProductsList />
            </div>
        </div>
      </div>
    </Layout>
  );
}

export default index
