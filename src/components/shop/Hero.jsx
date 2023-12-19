import React from 'react'
import styled from 'styled-components'

const Hero = () => {
    return (
        <HeroSection>
            <div className='hero-container'>
                <div className='hero-left-container'>
                    <h4 id='subtitle'>NEW ARRIVALS ONLY</h4>
                    <h1 id='title'>new <br /> collections <br /> for everyone</h1>
                    <button id='hero-button'>Latest collection </button>
                </div>
                <div className='hero-right-container'>
                    <img id='hero-photo' src="./images/hero_image.png" alt="" />
                </div>
            </div>
        </HeroSection>
    )
}

export default Hero

const HeroSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: var(--ff-general);

        .hero-container {
            display: flex;
            justify-content: space-around;
            align-items: center;
            height: 100vh;
            width: 100%;
            margin: 0 2rem;
        }

        #subtitle {
            font-size: var(--fs-1);
            font-weight: var(--fw-600);
        }

        #title {
            line-height: 1;
            font-size: var(--fs-5);
            font-weight: var(--fw-800);
            margin: 0 0 1.5rem 0;
            overflow: hidden;
        }

        #hero-button {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 1rem;
            border-radius: 50px;
            font-size: var(--fs-0-9);
        }
        
        .hero-right-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 600px;
        }
        
        #hero-photo {
            height: 100%;
            width: 100%;
        }

        @media (max-width: 1024px) {
            .hero-right-container {
                height: 500px;
            }

            #subtitle {
                font-size: var(--fs-1);
            }
    
            #title {
                font-size: var(--fs-4);
            }
        }

        @media (max-width: 867px) {
            .hero-right-container {
                height: 420px;
            }

            #subtitle {
                font-size: var(--fs-0-9);
            }
    
            #title {
                font-size: var(--fs-3);
                overflow: none;
            }
        }

        @media (max-width: 720px) {
            .hero-container {
                margin: 0 2rem;
            }
            .hero-right-container {
                height: 380px;
            }
    
            #title {
                font-size: var(--fs-2-5);
            }

            #hero-button {
                padding: 0.5rem;
                font-size: var(--fs-0-8);
            }
        }
        
        @media (max-width: 600px) {
            .hero-right-container {
                height: 350px;
            }

            #subtitle {
                font-size: var(--fs-0-6);
            }
    
            #title {
                font-size: var(--fs-2);
            }

            #hero-button {
                padding: 0.6rem 1.2rem;
            }
        }

        @media (max-width: 560px) {
            .hero-right-container {
                display: none;
            }

            #subtitle {
                font-size: var(--fs-0-8);
            }
    
            #title {
                font-size: var(--fs-2-5);
            }
        }

        @media (max-width: 375px) {
            #subtitle {
                font-size: var(--fs-0-6);
            }
    
            #title {
                font-size: var(--fs-2);
                margin: 0 0 1rem 0;
            }
        }
`
