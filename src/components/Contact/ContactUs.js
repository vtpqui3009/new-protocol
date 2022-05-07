import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #ffffff;
  overflow: hidden;
  & > #contact-social {
    text-align: center;
    margin-top: auto;
    padding: 2rem 0;
    display: flex;
    align-items: center;
  }
  & > #contact-heading {
    text-align: center;
    padding: 4rem 0;
    font-family: "Black Ops One", cursive;
    font-size: 3rem;
  }
  & > #contact-flex-box {
    padding: 5% 10%; 
    & > #contact-form {
      width: 100%;
      font-size :14px;
     
      & > .contact-form-button{
        display : flex;
        align : center;
        justify-content : center;
      }
       & > .contact-form-action {
        width: 100%;
        margin-bottom: 20px;
        & > button {
          background-color: #999;
          color: white;
          border: 1px solid #999;
          display :block;
          width: 40%;
          padding:1rem;
          border-radius : 4px;
        
        }
        @media (min-width: 768px){
          & > button {
          width: 15%;
          }
        }
        & > input,& > textarea  {
          width: 100%;
          padding:1rem;
          border-radius : 4px;
          outline : none ;
          resize :none;
        }
      }
    }
  }
    }
  }
`;
const ContactUs = () => {
  return (
    <StyledContainer className="container" id="contact-us">
      <h1 id="contact-heading">Contact us</h1>
      <div id="contact-flex-box">
        <div id="contact-form">
          <div className="contact-form-action">
            <label
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
              data-aos-anchor-placement="center-bottom"
            >
              Phone or email
            </label>
            <input
              type="text"
              required
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
              data-aos-anchor-placement="center-bottom"
            />
          </div>
          <div className="contact-form-action">
            <label
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
              data-aos-anchor-placement="center-bottom"
            >
              Name
            </label>
            <input
              type="text"
              required
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
              data-aos-anchor-placement="center-bottom"
            />{" "}
          </div>
          <div className="contact-form-action">
            <label
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
              data-aos-anchor-placement="center-bottom"
            >
              Message
            </label>
            <textarea
              required
              rows={4}
              cols={50}
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
              data-aos-anchor-placement="center-bottom"
            ></textarea>
          </div>
          <div className="contact-form-action contact-form-button">
            <button
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
              data-aos-anchor-placement="center-bottom"
            >
              Contact Us
            </button>{" "}
          </div>
        </div>
      </div>
      {/* <div id="contact-social">
        {contactsData.map((item) => {
          return <div key={item.id}>{item.element}</div>;
        })}
      </div> */}
    </StyledContainer>
  );
};
export default ContactUs;
