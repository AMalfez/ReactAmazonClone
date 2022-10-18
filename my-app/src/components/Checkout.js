import React from 'react'
import '../css/Checkout.css'
import ImageUrl from '../ImageUrl'
import SubTotal from '../components/SubTotal'

function Checkout() {
  return (
    <>
      <div className='checkout'>
        <div className='checkout__left'>
          <img src={ImageUrl.CartPageBanner.FirstUrl} alt='alfez' style={{height: "100px", width: 'auto', objectFit: 'contain'}}/>
          <div>
            <h2 className='checkout__title'>Your shopping Basket</h2>
          </div>
        </div>

        <div className='checkout__right'>
          <SubTotal />
        </div>
      </div>
    </>
  )
}

export default Checkout
