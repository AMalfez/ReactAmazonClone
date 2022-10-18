import React from 'react'
import ImageUrl from '../ImageUrl'
import "../css/Navbar.css";
import {Link, Outlet} from 'react-router-dom';

function Navbar() {
    return (
        <>
            <nav>
                <div className = 'navbar'>
                   <Link to='/'><img className="navbar__logo" src={ImageUrl.logo.FirstUrl}  alt='alfez'/></Link>

                    <div className = 'navbar__search'>
                        <input className='navbar__searchInput' type='text' />
                        <i className="fa-solid fa-magnifying-glass nav__searchIcon"></i>
                    </div>

                    <div className='navbar__navOpt'>
                        <div className='navbar__options'>
                            <span className='navbar__optLineOne'>Hello Guest</span>
                            <span className='navbar__optLineTwo'>Sign in</span>
                        </div>
                        <div className='navbar__options'>
                            <span className='navbar__optLineOne'>
                                Returns
                            </span>
                            <span className='navbar__optLineTwo'>
                                & Orders
                            </span>
                        </div>
                        <div className='navbar__options'>
                            <span className='navbar__optLineOne'>Your</span>
                            <span className='navbar__optLineTwo'>Prime</span>
                        </div>
                        <Link to='/checkout'>
                        <div className='navbar__basket'>
                        <i class="fa-solid fa-basket-shopping"></i>
                        <span className='nav__optLineTwo nav__basketCount'>0</span>
                        </div>
                        </Link>
                    </div>
                </div>
            </nav>
            <Outlet/>
        </>
    )
}

export default Navbar
