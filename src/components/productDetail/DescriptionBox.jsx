import React, { useState } from 'react';
import styled from 'styled-components';

const DescriptionBox = () => {
    const [description, setDescription] = useState(false)


    const _handleShowDescription = () => {
        setDescription(!description)
    }

    return (
        <>
            <DescriptionSection>
                <div className='description-container'>
                    <div className='button-container'>
                        <button id='description' className='btn-category' onClick={_handleShowDescription}>Description</button>
                        <button id='review' className='btn-category' onClick={_handleShowDescription}>Review</button>
                    </div>
                    {description ? <h1>Review Review Review Review</h1> : <div className='paragraph-container'>
                        <p id='paragraph'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat a, tempora eaque maiores quos at deleniti asperiores eius Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit perspiciatis esse totam provident! Numquam nemo natus officia neque saepe officiis assumenda ea similique itaque, suscipit blanditiis rerum voluptatem. Voluptas, fugit. quo nemo dignissimos, quisquam perferendis obcaecati hic dolorem perspiciatis tenetur accusamus eligendi?</p>
                    </div>}
                </div>

            </DescriptionSection>
        </>
    )
}

export default React.memo(DescriptionBox)

const DescriptionSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: var(--ff-general);

        .description-container{
            width: 100%;
            margin: 0 5rem
        }

        .button-container {
            display: flex;
            justify-content: flex-start;
            width: 100%;
            gap: 0.5rem;
        }

        .btn-category {
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: var(--fw-600);
            font-size: var(--fs-1);
            padding: 0.9rem;
            width: 120px;
            border: 1px solid black;
        }

        .paragraph-container{
            margin-top: 2rem; 
        }
        
`
