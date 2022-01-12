import React from "react";

export default function ContactForm() {
  return (
    <>
      <form id="contact">
        <form-row>
          <label for="contact-email">Email:</label>
          <input id="contact-email" type={"email"}></input>
        </form-row>
        <br />
        <form-row>
          <label for="contact-message">Message:</label>
          <input id="contact-message" type="textarea" rows="6"></input>
        </form-row>
        <br />
        <button>Submit</button>
      </form>
      <hr></hr>
    </>
  );
}
