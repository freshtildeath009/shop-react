import React from 'react'
import styled from 'styled-components'

const Exclusive = () => {
    return (
        <>
            <ExclusiveSection>
                <div className='exclusive-container'>
                    <div className='exclusive-left-container'>
                        <h1 id='title'>exclusive <br /> offer for you</h1>
                        <h4 id='subtitle'>ONLY ON BEST PRODUCTS</h4>
                        <button id='button'>Check Now</button>
                    </div>
                    <div className='exclusive-right-container'>
                        <img id='photo' src="./images/exclusive_image.png" alt="" />
                    </div>
                </div>
            </ExclusiveSection>
        </>
    )
}

export default Exclusive

const ExclusiveSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: var(--ff-general);
    background: var(--background-color0);

        .exclusive-container {
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
            margin: 0 0 1.5rem 0;
        }

        #title {
            line-height: 1;
            font-size: var(--fs-5);
            font-weight: var(--fw-800);
            margin: 0 0 1.5rem 0;
            overflow: hidden;
        }

        #button {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 1rem;
            border-radius: 50px;
            font-size: var(--fs-0-9);
        }

        .exclusive-right-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 600px;
        }

        #photo {
            height: 100%;
            width: 100%;
        }

        @media (max-width: 1024px) {
            .exclusive-right-container {
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
            .exclusive--right-container {
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
            .exclusive-container {
                margin: 0 2rem;
            }
            .exclusive-right-container {
                height: 380px;
            }
    
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

        @media (max-width: 560px) {
            .exclusive-container {
                height: 50vh;
            }
            .exclusive-right-container {
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
