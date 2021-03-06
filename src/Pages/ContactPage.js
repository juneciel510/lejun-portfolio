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

  // https://stackoverflow.com/questions/12194435/cannot-set-property-display-of-undefined
  function messageSent() {
    document.getElementsByClassName("message-sent")[0].style.opacity = "1";
    // document.getElementsByClassName("message-sent")[0].style.display = "block";
    setTimeout(function () {
      // document.getElementsByClassName("message-sent")[0].style.display = "none";
      document.getElementsByClassName("message-sent")[0].style.opacity = "0";
      // setTimeout(() => {
      //   document.getElementsByClassName("message-sent")[0].style.display =
      //     "none";
      // }, 600);
    }, 2000);
  }
  return (
    <ContactPageStyled>
      <MainLayout>
        <Title title={"Contact"} span={"Contact"} />
        <div className="container">
          <InnerLayout>
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
                  <input
                    type="submit"
                    className="send-mail"
                    value="Send Message"
                    // onClick={togglePopup}
                    onClick={messageSent}
                  />
                </div>
              </form>
              <div className="message-sent">
                <h6>We will contact you as soon as possible !</h6>
              </div>
              {isOpen && (
                <Popup
                  className="popup-button"
                  content={
                    <>
                      <b>Message sent</b>
                    </>
                  }
                  handleClose={togglePopup}
                />
              )}
            </div>
          </InnerLayout>
        </div>
      </MainLayout>
    </ContactPageStyled>
  );
}

const ContactPageStyled = styled.section`
  .container {
    max-width: 1200px;
    margin: 0 auto;
    display: block;
    justify-content: center;
    align-items: center;
  }

  .glasscard {
    box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
    border-radius: 15px;
    background: rgba(255, 255, 255, 0.1);
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    border-left: 1px solid rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(5px);
    display: block;
    padding: 7vh 12vw;
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
    position: relative;
    width: 100%;
  }
  .form .form-field label {
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
    height: 40px;
    line-height: 40px;
    background-color: var(--background-light-color);
    color: var(--white-color);
    cursor: pointer;
    display: inline-block;
    font-size: 1rem;
    text-transform: uppercase;
    position: relative;
    &:hover {
      color: var(--primary-color);
      box-shadow: 2px 0px 4px var(--primary-color),
        -2px 0px 4px var(--primary-color), 0px -2px 4px var(--primary-color),
        0px 2px 4px var(--primary-color);
    }
  }

  .send-mail {
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(#2196f3, #e91e63);
    clip-path: circle(20% at right 40%);
  }

  .message-sent {
    transition: opacity 1s ease;
    opacity: 0;
    h6 {
      height: 40px;
      line-height: 40px;
      background-color: rgba(255, 103, 103, 0.6);
      text-align: center;
      font-size: 1.1rem;
      padding: 0;
      color: var(--white-color);
    }
  }
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
