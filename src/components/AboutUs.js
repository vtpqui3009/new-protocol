import styled from "styled-components";
import AboutUsImage from "../assets/images/about-us.svg";
const StyledAbousUs = styled.div`
  color: #ffffff;

  overflow: hidden;
  margin-top: 5%;
  & > h1 {
    text-align: center;
    padding: 4rem 0;
    font-family: "Black Ops One", cursive;
    font-size: 3rem;
  }
  & > img {
    width: 80%;
    margin-left: 10%;
    object-fit: cover;
    padding-bottom: 5%;
  }
`;
const AboutUs = () => {
  return (
    <StyledAbousUs className="container" id="about-us">
      <h1>About Us</h1>
      <img
        src={AboutUsImage}
        alt=""
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
        data-aos-anchor-placement="center-bottom"
      />
    </StyledAbousUs>
  );
};
export default AboutUs;
