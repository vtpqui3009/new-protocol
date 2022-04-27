import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #ffffff;
  padding: 0 4rem;
  overflow: hidden;
  padding: 5% 10%;
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
    gap: 4rem;
    height: 60%;
    & > #contact-form > div {
      & > .contact-form-action {
        font-size: 1.4rem;
        & > label {
          margin: 1rem 0;
        }
        & > input,
        & > textarea,
        & > button {
          padding: 1rem;
          border-radius: 0.6rem;
          outline: none;
          border: 1px solid #eee;
          margin-bottom: 20px;
          background-color: #e5e5e5;
          width: 100%;
        }
        & > textarea {
          resize: none;
        }
        & > button {
          background-color: #999;
          color: white;
          border: 1px solid #999;
          margin: 1rem 0;
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
          <div>
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
            <div className="contact-form-action">
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
