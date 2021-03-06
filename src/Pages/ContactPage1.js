import React, { useState } from "react";
import styled from "styled-components";
import { MainLayout, InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import PrimaryButton from "../Components/PrimaryButton";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ContactItem from "../Components/ContactItem";
import emailjs from "emailjs-com";

import Popup from "../Components/Popup";

function ContactPage() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    console.log("isOpen", isOpen);
    setIsOpen(!isOpen);
  };
  const email = <EmailIcon />;
  const location = <LocationOnIcon />;
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "juneciel",
        "template_wyrwjx9",
        e.target,
        "user_CkQVwADxzoQsYW51QoVAx"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  function sendEmail2(e) {
    console.log("test", e.target);
  }

  return (
    <MainLayout>
      <Title title={"Contact"} span={"Contact"} />
      <ContactPageStyled>
        <InnerLayout className={"contact-section"}>
          <div className="left-content">
            <div className="contact-title">{/* <h4>Get In Touch</h4> */}</div>
            <form className="form" onSubmit={sendEmail}>
              <div className="form-field">
                <label htmlFor="name">Enter your name*</label>
                <input type="text" id="name" name="name" />
              </div>
              <div className="form-field">
                <label htmlFor="email">Enter your email*</label>
                <input type="email" id="email" name="email" />
              </div>
              <div className="form-field">
                <label htmlFor="subject">Enter your subject</label>
                <input type="text" id="subject" name="subject" />
              </div>
              <div className="form-field">
                <label htmlFor="text-area">Enter your Message*</label>
                <textarea
                  name="message"
                  id="textarea"
                  cols="30"
                  rows="6"
                ></textarea>
              </div>
              <div className="form-field f-button">
                <input
                  type="submit"
                  className="send-mail"
                  value="Send Message"
                  onClick={togglePopup}
                />
              </div>
            </form>
          </div>

          <div className="right-content">
            <ContactItem
              title={"Email"}
              icon={email}
              cont1={"chenlejun@gmail.com"}
            />
            <ContactItem
              title={"Address"}
              icon={location}
              cont1={"Stavanger, Norway"}
            />
          </div>
          {isOpen && (
            <Popup
              className="popup-button"
              content={
                <>
                  <b>Message Sent !</b>
                </>
              }
              handleClose={togglePopup}
            />
          )}
        </InnerLayout>
      </ContactPageStyled>
    </MainLayout>
  );
}

const ContactPageStyled = styled.section`
  .popup-button {
    outline: none;
    border: none;
    background-color: var(--background-light-color-2);
    padding: 0rem 2rem;
    font-size: inherit;
    color: var(--white-color);
    cursor: pointer;
    transition: all 0.4s ease-in-out;
    margin-bottom: 0.6rem;
    &:active,
    &:focus {
      background-color: var(--primary-color);
    }
    &:hover {
      background-color: var(--primary-color);
    }
  }
  .contact-section {
    display: grid;
    grid-template-columns: 2fr 1.5fr;
    grid-column-gap: 2rem;
    @media screen and (max-width: 978px) {
      grid-template-columns: repeat(1, 1fr);
      .f-button {
        margin-bottom: 3rem;
      }
    }
    @media screen and (max-width: 502px) {
      display: initial;
    }
    .right-content {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      height: 60%;
      align-items: center;
      position: relative;
      top: 4%;
    }
    @media screen and (max-width: 502px) {
      display: block;
    }
    .contact-title {
      h4 {
        color: var(--white-color);
        padding: 0 0 1rem 0;
      }
    }
    .form {
      width: 100%;
      @media screen and (max-width: 502px) {
        width: 100%;
      }
      .form-field {
        margin-bottom: 2rem;
        position: relative;
        width: 100%;
        label {
          position: absolute;
          left: 20px;
          top: -19px;
          display: inline-block;
          background-color: var(--background-dark-color);
          padding: 0 0.5rem;
          color: inherit;
        }
        input {
          border: 1px solid var(--border-color);
          outline: none;
          background: transparent;
          height: 50px;
          padding: 0 15px;
          width: 100%;
          color: inherit;
        }
        textarea {
          background-color: transparent;
          border: 1px solid var(--border-color);
          outline: none;
          color: inherit;
          width: 100%;
          padding: 0.8rem 1rem;
        }
        .send-mail {
          height: 15px;
          line-height: 15px;
          background-color: var(--background-light-color-2);
          padding: 0.8rem 2.5rem 1.5rem 2.5rem;
          color: var(--white-color);
          cursor: pointer;
          display: inline-block;
          font-size: 1rem;
          text-transform: uppercase;
          position: relative;
          transition: all 0.4s ease-in-out;
          @media screen and (max-width: 502px) {
            font-size: 0.9rem;
          }
          &::after {
            content: "";
            position: absolute;
            width: 0;
            height: 0.2rem;
            transition: all 0.4s ease-in-out;
            left: 0;
            bottom: 0;
            opacity: 0.7;
          }
          &:hover::after {
            width: 100%;
            background-color: var(--white-color);
          }
        }
      }
    }
  }
`;

export default ContactPage;
