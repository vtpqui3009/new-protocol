import styled from "styled-components";
import AboutUsImage from "../../images/about-us.jfif";
import "./AboutUs.css";
const StyledAbousUs = styled.div`
  color: #ffffff;

  overflow: hidden;
  @media (max-width: 1280px) {
    & > h1 {
      font-size: 4.5rem;
    }
  }
  @media (max-width: 768px) {
    & > h1 {
      font-size: 4.5rem;
    }
  }
  @media (max-width: 468px) {
    & > h1 {
      font-size: 1.5rem;
    }
  }
  & > h1 {
    text-align: center;
    padding: 4rem 0;
    font-family: "Black Ops One", cursive;
    font-size: 2.5rem;
  }
  & > img {
    width: 100%;
    ${"" /* margin-left: 10%; */}
    object-fit: cover;
    ${"" /* padding-bottom: 5%; */}
  }
`;
const AboutUs = () => {
  return (
    <StyledAbousUs id="about-us" style={{ position: "relative" }}>
      <h1 className="about-heading">About Us</h1>
      <img src={AboutUsImage} alt="" />
      {/* <div className="about-us-container">
        <span>Loading</span>
        <div class="lds-facebook">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div> */}
    </StyledAbousUs>
  );
};
export default AboutUs;
