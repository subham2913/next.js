import Product from "./product";

export default async function Page() {
    let data = await fetch('https://dummyjson.com/products');
    let { products } = await data.json();
    console.log(products);

    return (
        <ul>
            {products.map((product) => (
                <div className="flex space-x-10" key={product.id}> {/* Wrapped in a parent element */}
                    <li>{product.title}</li>
                    <Product price={product.price} />
                </div>
            ))}
        </ul>
    );
}
