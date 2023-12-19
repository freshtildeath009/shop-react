import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    return (
        <>
            <FooterSection>
                <div className='footer-title-container'>
                    <img id='photo' src="./images/logo_big.png" alt="" />
                    <h1 id='title'>SHOPPER</h1>
                </div>
                <ul className='footer-menu-container'>
                    <a id='link' href="">Company</a>
                    <a id='link' href="">Products</a>
                    <a id='link' href="">Offices</a>
                    <a id='link' href="">About</a>
                    <a id='link' href="">Contact</a>
                </ul>
            </FooterSection>
        </>
    )
}

export default Footer

const FooterSection = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: var(--ff-general);

        .footer-title-container {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        #title {
            font-weight: var(--fw-800);
            font-size: var(--fs-2);
        }

        .footer-menu-container {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
        }

        #link {
            font-size: var(--fs-1);
            padding: 1rem;
            color: var(--text-color-primary);
        }
        @media (max-width: 768px) {
            #photo {
                height: 50px;
            }

            #title {
                font-size: var(--fs-1-5);
            }
        }

        @media (max-width: 600px) {
            #photo {
                height: 50px;
            }

            #title {
                font-size: var(--fs-1-2);
            }

            #link {
                font-size: var(--fs-0-8);
            }
        }
`