import ReactFluidAnimation from "@usertive/react-fluid-animation";
import styled from "styled-components";
const StyledWhitePaper = styled.div`
  position: relative;
  & > p {
    width: 90%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 2rem;
    letter-spacing: 1px;
    z-index: 0;
    text-align: center;
  }
`;
const WhitePaper = () => {
  return (
    <StyledWhitePaper>
      <ReactFluidAnimation style={{ height: "100vh" }} />
      <p>
        Meta Adult is a project on the Ethereum Blockchain platform. The symbol
        of M18 is a mysterious and seductive girl. The idea of this project was
        started by the development team based on the Metaverse social context
        which should match the actual needs of people individually.
      </p>
    </StyledWhitePaper>
  );
};
export default WhitePaper;
