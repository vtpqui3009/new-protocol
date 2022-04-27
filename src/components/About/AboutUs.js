import styled from "styled-components";
import AboutUsImage from "../../images/about-us.jfif";
import "./AboutUs.css";
const StyledAbousUs = styled.div`
  color: #ffffff;

  overflow: hidden;

  & > h1 {
    text-align: center;
    padding: 4rem 0;
    font-family: "Black Ops One", cursive;
    font-size: 4.5rem;
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
