import React from "react";
import styled from "styled-components";
import TokenMetricImage from "../../images/token-metric.jfif";
const StyledTokenMetric = styled.div`
  color: #ffffff;
  overflow: hidden;
  width: 100%;
  height: 100%;
  transform: translateY(-5px);
  & > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    ${
      "" /* @media (max-width: 1024px) {
          width: 80%;
        } */
    }
  }
`;
const TokenMetric = ({ tokenRef }) => {
  return (
    <StyledTokenMetric id="token" className="container" ref={tokenRef}>
      <img
        src={TokenMetricImage}
        alt="token-chart"
        width="60%"
        height="60%"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
      />
    </StyledTokenMetric>
  );
};
export default TokenMetric;
