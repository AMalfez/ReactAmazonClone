import React from 'react'
import '../css/SubTotal.css'
function SubTotal() {
  return (
    <div className='subtotal'>
      <div className='subtotal__p'>
      <p>SubTotal (2 items): <strong>$250</strong></p>
      </div>
      <div className='subtotal__button'>
      <button>Proceed to checkout</button>
      </div>
    </div>
  )
}

export default SubTotal
