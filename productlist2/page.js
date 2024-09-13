export default async function Page() {
    let data = await fetch('https://dummyjson.com/products')
    let {products} = await data.json()
    console.log(products)
    return (
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    )
  }