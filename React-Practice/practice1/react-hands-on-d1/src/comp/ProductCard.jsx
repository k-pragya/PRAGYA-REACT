function ProductCard({ product }){
    return(
        <div>
            <h3>product name: {product.name}</h3>
            <p>price: {product.price}</p>
            <br />
        </div>
    );
}
export default ProductCard;