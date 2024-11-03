import React from 'react';
import styled from 'styled-components';
import serviceImage from '/public/assets/service-image.jpg'; // Adjusted the path

const ServiceSection = () => {
  return (
    <ServiceWrapper>
      <ServiceInfo>
        <h2>Hire Trusted Service Providers for All Your Property Needs</h2>
        <button>Hire Now</button>
      </ServiceInfo>
      <ServiceImage src={serviceImage} alt="Service" />
    </ServiceWrapper>
  );
};

const ServiceWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: lightblue;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ServiceInfo = styled.div`
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

const ServiceImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 10px;
`;

export default ServiceSection;
