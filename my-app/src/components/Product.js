import React from 'react'
import "../css/Product.css";

function Product(props) {
  return (
    <>
      <div className='product'>
        <div style={{width:'100%'}} className='product__info'>
            <p style={{width:'100%'}}>{props.title}</p>
            <p className='product__price'>
                <small>$</small>
                <strong>{props.price}</strong>
            </p>
            <p className='product__rating'>
                {Array(props.rating).fill().map((_,i)=>{
                  return  <span>&#11088;</span>
                })}
            </p>  
        </div>
            <img src={props.Img} alt='product'/>
            <button>Add to Basket</button>
      </div>
    </>
  )
}

export default Product
