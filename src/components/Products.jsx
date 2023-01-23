import React from 'react'
import {
  FunnelIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/24/outline'

function Products({ productList, handleResetFilters }) {
  return (
    <section
      aria-labelledby="product-heading"
      className="mt-6 lg:mt-0 lg:col-span-2 xl:col-span-3"
    >
      <h2 id="product-heading" className="sr-only">
        Products
      </h2>
      <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 xl:grid-cols-3">
        {productList.length ? (
          productList.map((product) => (
            <div
              key={product.id}
              className="relative flex flex-col overflow-hidden bg-white border border-gray-200 rounded-lg group"
            >
              <div className="bg-gray-200 aspect-w-3 aspect-h-4 group-hover:opacity-75 sm:aspect-none sm:h-96">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="object-cover object-center w-full h-full sm:w-full sm:h-full group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col flex-1 p-4 space-y-2">
                <h3 className="text-sm font-medium text-gray-900">
                  {/* <a href={product.href}> */}
                  <span aria-hidden="true" className="absolute inset-0" />
                  {product.name}
                  {/* </a> */}
                </h3>
                <p className="text-sm text-gray-500">{product.description}</p>
                <div className="flex flex-col justify-end flex-1">
                  <p className="text-sm italic text-gray-500">
                    {product.brand}
                  </p>
                  <p className="text-base font-medium text-gray-900">
                    ₹ {product.price}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center">
            <ExclamationTriangleIcon className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">
              No Products Found
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Try adjusting your filter to find what you're looking for.
            </p>
            <div className="mt-6">
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={() => handleResetFilters()}
              >
                <FunnelIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                Reset Filters
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Products
