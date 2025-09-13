import "./ProductCard.css"

function ProductCard(ProductCard) {
   const containerStyle ={
    border: "2px solid black",
    margin: "3px",
    padding: "5px"
   }
   const titleStyle ={
   fontSize: "17px",
    fontWeight: "bold",
    color: "black"
   }
   const priceStyle ={
    fontSize: "15px",
    fontWeight: "italic",
    color:"red"
   }
    return(
     <div className="maincontainer">
     <p className="title">Product Name:{ProductCard.car}</p>
     <p className="price">Product Name:{ProductCard.price}</p>
     </div>
    )
}

export default ProductCard