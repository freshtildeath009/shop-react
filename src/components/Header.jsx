import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Header = () => {
    const [showMenu, setShowMenu] = useState(false)

    const _handleShowMenu = () => {
        setShowMenu(!showMenu)
    }

    function _handleHideMenu(event) {
        if (event.target.id !== "menu") {
            setShowMenu(false)
        }

    }
    window.addEventListener("click", _handleHideMenu)

    return (
        <>
            <HeaderSection>
                <nav className='header-nav-container'>
                    <div className='header-logo-container'>
                        <Link to="/"><img id='header-logo' src="./images/logo1.png" alt="" /></Link>
                    </div>
                    <div className='header-links'>
                        <li><Link className='link' to="/">SHOP</Link></li>
                        <li><Link className='link' to="/men">MEN</Link></li>
                        <li><Link className='link' to="/women">WOMEN</Link></li>
                        <li><Link className='link' to="/kids">KIDS</Link></li>
                    </div>
                    <ul className='header-links-container'>
                        <div className='header-user-container'>
                            <i id='user' className="fa-solid fa-user icon"></i>
                        </div>
                        <div className='header-cart-container'>
                            <Link to="/cart">
                                <i id='cart' className="fa-solid fa-cart-shopping icon"></i>
                            </Link>
                        </div>
                        <ul className='menu-container'>
                            <i id='menu' onClick={_handleShowMenu} className="fa-solid fa-bars"></i>
                        </ul>
                    </ul>
                </nav>
            </HeaderSection>
            <MobileMenu show={showMenu}>
                <ul className='mobile-links-container'>
                    <li><Link id='link' to="/">SHOP</Link></li>
                    <li><Link id='link' to="/men">MEN</Link></li>
                    <li><Link id='link' to="/women">WOMEN</Link></li>
                    <li><Link id='link' to="/kids">KIDS</Link></li>
                </ul>
            </MobileMenu>

        </>
    )
}

export default Header

const HeaderSection = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    width: 100%;
    font-family: var(--ff-general); 
    
    .header-nav-container{
        position: fixed;
        z-index: 1;
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 80px;
        width: 100%;
        background: var(--background-color1);
    }
        .header-logo-container{
            display: flex;
            justify-content: center;
            align-items: center;
            
        }    

        #header-logo{
            height: 50px;
            width: 50px;
        }

        .header-links{
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .header-links-container{
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .link{
            color: var(--tclr-primary);
            margin: 0 1rem;
            cursor: pointer;
            font-size: var(--fs-1);
            font-weight: var(--fw-400);
        }

        .menu-container{
            display: none;
            justify-content: center;
            align-items: center;
        }

        .icon {
            font-size: var(--fs-1-5);
            margin: 0 1rem;
            cursor: pointer;
            color: var(--text-color-primary);
        } 
        #menu{
            cursor: pointer;
            font-size: 1.5rem;
        }
        
        .active{
            border-bottom: 5px solid black;
        }

        @media (max-width: 767px){
            
            .header-links{
                display: none;
            }

            .menu-container{
                display: block;
                font-size: var(--fs-1-5);
            }

            .icon {
                font-size: var(--fs-1);
                margin: 0 1rem;
                cursor: pointer;
            } 
            #menu{
                font-size: var(--fs-1);
            }
        }

        @media (max-width: 650px){
            #header-search{
                font-size: 1rem;
                width: 150px;
            }
        }
`
const MobileMenu = styled.nav`
    display: none;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: fixed;
    background: var(--background-color1);
    padding-bottom: 1rem; 
    transition: transform 0.5s;
    font-family: var(--ff-general); 
    
    transform: ${props => props.show ? "translateY(0px)" : "translateY(-400px)"};
    @media (max-width: 767px) {
        display: block;
    }
        .mobile-links-container{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }

        ul li{
            margin: 0.5rem;
        }
        #link {
            color: var(--tclr-primary);
        }

`
