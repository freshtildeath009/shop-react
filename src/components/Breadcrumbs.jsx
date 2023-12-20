import React from 'react';
import styled from 'styled-components';

const Breadcrumbs = (props) => {

  return (
    <BreadcrumbsComponent>
      HOME <i className="fa-solid fa-arrow-right"></i>&nbsp; SHOP <i className="fa-solid fa-arrow-right"></i>&nbsp; {props.product.category} <i className="fa-solid fa-arrow-right"></i>&nbsp; {props.product.name}
    </BreadcrumbsComponent>
  )
}

export default Breadcrumbs

const BreadcrumbsComponent = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem;
  flex-wrap: wrap;
  padding: 1rem;
  font-size: var(--fs-1);
  @media (max-width: 665px) {
    font-size: 0.8rem ;
  }
  @media (max-width: 560px) {
    font-size: 0.5rem ;
  }
    p{
      display: flex;
      justify-content: center;
      align-items: center;
    }

    i{
      text-indent: 1rem;
    }
`
