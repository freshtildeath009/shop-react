import React from 'react'
import styled from 'styled-components'

const Offer = () => {
    return (
        <div>
            <OfferSection>
                <div className='offer-container'>
                    <div className='text-container'>
                        <h1 id='title'>Get Exclusive Offers <br /> On Your Email</h1>
                        <h4 id='subtitle'>Subscribe to our newsletter and stay upload</h4>
                    </div>
                    <div className='input-container'>
                        <input id='input' type="text" placeholder='Your email Id' />
                        <button id='button'>Subscribe</button>
                    </div>
                </div>
            </OfferSection>
        </div>
    )
}

export default Offer

const OfferSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: var(--ff-general);
    background: var(--background-color0);
    padding: 3rem 0;
    height: 100%;

        .offer-container {
            display: flex;
            justify-content: space-around;
            align-items: center;
            flex-direction: column;
            text-align: center;
            width: 100%;
        }

        .text-container {
            width: 80%;
        }

        #title {
            line-height: 1;
            font-size: var(--fs-4);
            font-weight: var(--fw-800);
            margin: 0 0 1.5rem 0;
            overflow: hidden;
        }

        #subtitle {
            font-size: var(--fs-1);
            font-weight: var(--fw-600);
            margin: 0 0 1.5rem 0;
        }

        .input-container{
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 1rem;
        }

        #input {
            font-size: var(--fs-1);
            border: none;
            outline: none;
        }
        #button {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 1rem;
            border-radius: 50px;
            font-size: var(--fs-0-9);
        }

        @media (max-width: 1024px) {
            #title {
                font-size: var(--fs-4);
            }
        }

        @media (max-width: 867px) {
            #subtitle {
                font-size: var(--fs-0-9);
            }
    
            #title {
                font-size: var(--fs-3);
                overflow: none;
            }
        }

        @media (max-width: 720px) { 
            #title {
                font-size: var(--fs-2-5);
            }

            #button {
                padding: 0.6rem 1.2rem;
                font-size: var(--fs-0-8);
            }
        }

        @media (max-width: 600px) {
            #subtitle {
                font-size: var(--fs-0-8);
            }
    
            #title {
                font-size: var(--fs-2);
            }

            #button {
                padding: 0.6rem 1.2rem;
            }
        }

        @media (max-width: 368px) {
            
            .input-container{
                flex-direction: column;
            }
        }
`
