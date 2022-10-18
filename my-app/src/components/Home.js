import React from 'react'
import '../css/Home.css'
import ImageUrl from '../ImageUrl';
import Products from '../Products';
import Product from './Product';

function Home() {
    return (
        <>
            <div className='home'>
                <div className='home__container'>
                    <img className='homeImageOne' src={ImageUrl.homepageBanner.FirstUrl} alt="homepage"/>
                    <div className='home__row'>
                        <Product title={Products.The_Lean_startUp.title.slice(0,55)+'...'} Img={Products.The_Lean_startUp.productImages} price={Products.The_Lean_startUp.price} rating={4}/>
                        <Product title={Products.Motorola_5G_OneAce.title.slice(0,55)+'...'} Img={Products.Motorola_5G_OneAce.productImages} price={Products.Motorola_5G_OneAce.price} rating={5}/>
                    </div>
                    <div className='home__row'>
                    <Product title={Products.HamiltonMixer.title.slice(0,55)+'...'} Img={Products.HamiltonMixer.productImages} price={Products.HamiltonMixer.price} rating={4}/>
                    <Product title={Products.AlbertMorisShirts.title.slice(0,55)+'...'} Img={Products.AlbertMorisShirts.productImages} price={Products.AlbertMorisShirts.price} rating={5}/>
                    <Product title={Products.ONprotein.title.slice(0,55)+'...'} Img={Products.ONprotein.productImages} price={Products.ONprotein.price} rating={5}/>
                    </div>
                    <div className='home__row'>
                    <Product title={Products.DonertonWatch.title.slice(0,55)+'...'} Img={Products.DonertonWatch.productImages} price={Products.DonertonWatch.price} rating={4}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;