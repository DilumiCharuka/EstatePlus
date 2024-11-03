import React from 'react';
import styled from 'styled-components';
import propertyImage from '/public/assets/property-image.jpeg'; // Adjusted the path

const PropertySection = () => {
  return (
    <PropertyWrapper>
      <PropertyInfo>
        <h2>Discover Your Dream Property Today</h2>
        <button>Buy Now</button>
      </PropertyInfo>
      <PropertyImage src={propertyImage} alt="Property" />
    </PropertyWrapper>
  );
};

const PropertyWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 150px;
  background-color: #e8f5e9;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const PropertyInfo = styled.div`
  h2 {
    font-size: 2rem;
    color: black;
  }

  button {
    background-color: darkblue;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 1.5rem;
    }
  }
`;

const PropertyImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 30px;
`;

export default PropertySection;
