"use client"

import { useEffect, useState } from "react"

export default function Page() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("https://dummyjson.com/products")
                const data = await response.json()
                setProducts(data.products)
            } catch (error) {
                console.error("Error fetching products:", error)
            }
        }

        fetchProducts()
    }, [])

    return (
        <div>
            <h1>Product List</h1>
            {products.map((item) => (
                <h3 key={item.id}>Name: {item.title},price :  {item.price}</h3>
            ))}
        </div>
    )
}