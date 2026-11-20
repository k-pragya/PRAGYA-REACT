import ProductCard from "../comp/ProductCard";
function ProductList() {
    const products = [
    { id: 1, name: "book", price: 450 },
    { id: 2, name: "pen", price: 16 }
    ];

    return (
        <div>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}
export default ProductList;