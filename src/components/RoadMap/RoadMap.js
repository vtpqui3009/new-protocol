import React from "react";
import styled from "styled-components";
import RoadmapImage from "../../images/roadmap.jfif"
const StyledRoadMap = styled.div`
  overflow: hidden;
  width : 100%;
    height :100%;
  & > h1 {
    text-align: center;
    padding: 4rem 0;
    font-family: "Black Ops One", cursive;
    font-size: 3rem;
  }
  & > img {
      object-fit: contain;
      width : 100%;
      width: 100%;
    }
`;
const Roadmap = () => {
  return (
    <StyledRoadMap id="roadmap" className="container">
      {/* <h1>RoadMap</h1> */}

        <img
          src={RoadmapImage}
          alt=""
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
          data-aos-anchor-placement="center-bottom"
        />
    </StyledRoadMap>
  );
};
export default Roadmap;
