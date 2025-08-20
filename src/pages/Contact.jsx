import React from "react";
// import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2 className="heading">Contact <span>Me!</span></h2>

      <form action="#">
        <div className="input-box">
          <input type="text" name="name" placeholder="Full Name" required />
          <input type="email" name="email" placeholder="email" required />
        </div>
        <div className="input-box">
          <input type="number" name="number" placeholder="Mobile Number" required />
          <input type="text" name="" placeholder="Subject" required />
        </div>
        <textarea
          name="description"
          cols="30"
          rows="10"
          placeholder="Your Message"
          required
        ></textarea>
        <input type="submit" value="Send Message" className="btn" />
      </form>
    </section>
  );
};

export default Contact;
