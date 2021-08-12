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
//import Alert from "react-popup-alert";

import Popup from "../Components/Popup";

function ContactPage() {
  //   const [alert, setAlert] = React.useState({
  //     type: "error",
  //     text: "This is a alert message",
  //     show: false,
  //   });
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    console.log("isOpen", isOpen);
    setIsOpen(!isOpen);
  };
  //const phone = <PhoneIcon />;
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
    // alert("email sent");
  }

  //   function onShowAlert(type) {
  //     setAlert({
  //       type: type,
  //       text: "Message Sent",
  //       show: true,
  //     });
  //   }
  //   function onCloseAlert() {
  //     setAlert({
  //       type: "",
  //       text: "",
  //       show: false,
  //     });
  //   }

  return (
    <MainLayout>
      {/* <Alert
        header={"Header"}
        btnText={"Close"}
        text={alert.text}
        type={alert.type}
        show={alert.show}
        onClosePress={onCloseAlert}
        pressCloseOnOutsideClick={true}
        showBorderBottom={true}
        alertStyles={{}}
        headerStyles={{}}
        textStyles={{}}
        buttonStyles={{}}
      /> */}

      <Title title={"Contact"} span={"Contact"} />
      <ContactPageStyled>
        <InnerLayout className={"contact-section"}>
          <div className="glasscard">
            <form className="form" onSubmit={sendEmail}>
              <div className="form-field">
                <label htmlFor="name">Name*</label>
                <input type="text" id="name" name="name" />
              </div>
              <div className="form-field">
                <label htmlFor="phoneNumber">Phone number</label>
                <input type="text" id="phoneNumbername" name="phoneNumber" />
              </div>
              <div className="form-field">
                <label htmlFor="email">Email*</label>
                <input type="email" id="email" name="email" />
              </div>

              <div className="form-field">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" />
              </div>
              <div className="form-field full">
                <label htmlFor="text-area">Message*</label>
                <textarea
                  name="message"
                  id="textarea"
                  cols="30"
                  rows="6"
                ></textarea>
              </div>
              <div className="form-field f-button full">
                {/* <PrimaryButton title={"Send Email"} /> */}
                <input
                  type="submit"
                  className="send-mail"
                  value="Send Message"
                  onClick={togglePopup}
                />
              </div>
            </form>

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
          </div>
        </InnerLayout>
      </ContactPageStyled>
    </MainLayout>
  );
}

const ContactPageStyled = styled.section`
  /* margin-right: 1rem; */

  /* height: 100vh; */
  /* display: flex; */
  max-width: 1200px;
  margin: 0 auto;
  display: block;
  justify-content: center;
  align-items: center;

  .contact-section {
    margin-top: 8vh;
    box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
    border-radius: 15px;
    background: rgba(255, 255, 255, 0.1);
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    border-left: 1px solid rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(5px);
  }

  .glasscard {
    display: block;
    /* margin: 0 8rem; */
    margin: 2vh 12vw;
  }
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

  .contact-title {
    h4 {
      color: var(--white-color);
      padding: 0 0 1rem 0;
    }
  }

  .form {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }

  .form .full {
    grid-column: 1 / 3;
  }
  .form .form-field {
    /* margin-bottom: 2rem; */
    position: relative;
    width: 100%;
  }
  .form .form-field label {
    /* position: absolute;
      left: 20px;
      top: -19px; */
    display: inline-block;
    background: transparent;
    padding: 0 0.5rem;
    color: inherit;
  }

  .form .form-field input {
    border: 1px solid var(--primary-color);
    outline: none;
    background: transparent;
    height: 50px;
    padding: 0 15px;
    width: 100%;
    color: inherit;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }

  .form .form-field textarea {
    background-color: transparent;
    border: 1px solid var(--primary-color);
    outline: none;
    color: inherit;
    width: 100%;
    padding: 0.8rem 1rem;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }

  .form .form-field .send-mail {
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

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* background: linear-gradient(#f00, #f0f); */
    background: linear-gradient(#2196f3, #e91e63);
    clip-path: circle(20% at right 40%);
  }

  /* &::after{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(#2196f3, #e91e63);
        clip-path: circle(20% at 10% 10%);
    
} */

  @media screen and (max-width: 502px) {
    .form {
      width: 100%;
      display: flex;
      flex-direction: column;
      margin: 0;
    }
    .form .form-field .send-mail {
      font-size: 0.9rem;
    }
  }
`;

export default ContactPage;
