import React, { useState, useEffect } from 'react'
import Products from '../components/Products'
import Sidebar from '../components/Sidebar'

import { products } from '../../data/products'

export default function ProductList() {
  const [productList, setProductList] = useState(products)
  const [selectedFilters, setSelectedFilters] = useState({
    category: [],
    color: [],
    size: [],
    brand: [],
  })
  // console.log(selectedFilters, 'selectedFilters')
  // console.log(productList, 'productList')

  const handleFilterChange = (e) => {
    const { name, value, checked } = e.target
    if (checked) {
      setSelectedFilters((prev) => ({
        ...prev,
        [name]: [...prev[name], value],
      }))
    } else {
      setSelectedFilters((prev) => ({
        ...prev,
        [name]: prev[name].filter((item) => item !== value),
      }))
    }
  }

  const handleSortChange = (e) => {
    const { value } = e.target
    if (value === 'h-l') {
      setProductList((prev) => [...prev].sort((a, b) => b.price - a.price))
    } else if (value === 'l-h') {
      setProductList((prev) => [...prev].sort((a, b) => a.price - b.price))
    }
  }
  const handleResetFilters = () => {
    setSelectedFilters({
      category: [],
      color: [],
      size: [],
      brand: [],
    })
  }
  useEffect(() => {
    const { brand, category, color, size } = selectedFilters

    const filteredProducts = products.filter((product) => {
      const brandMatch = brand.length ? brand.includes(product.brand) : true
      const categoryMatch = category.length
        ? category.some((selectedCategory) =>
            product.category.includes(selectedCategory)
          )
        : true
      const colorMatch = color.length
        ? color.some((selectedColor) => product.color.includes(selectedColor))
        : true
      const sizeMatch = size.length
        ? size.some((selectedSize) => product.size.includes(selectedSize))
        : true
      return brandMatch && colorMatch && sizeMatch && categoryMatch
    })
    setProductList(filteredProducts)
  }, [selectedFilters])

  return (
    <div className="bg-white">
      <main className="max-w-2xl mx-auto px-4 lg:max-w-7xl lg:px-8">
        <div className="border-b border-gray-200 pt-24 pb-10">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
            New Arrivals
          </h1>
          <p className="mt-4 text-base text-gray-500">
            Checkout out the latest release of Abstract Tees, now with even more
            colors!
          </p>
        </div>
        <div className="pt-12 pb-24 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
          <Sidebar
            handleFilterChange={handleFilterChange}
            handleSortChange={handleSortChange}
            handleResetFilters={handleResetFilters}
            selectedFilters={selectedFilters}
          />
          <Products
            productList={productList}
            handleResetFilters={handleResetFilters}
          />
        </div>
      </main>
    </div>
  )
}
