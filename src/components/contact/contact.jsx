import "./contact.scss";
import { useState } from "react";

const Contact = () => {
  const [message, setMessage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">

      <div className="left">leftside</div>
      <div className="right">
        <h2>Leave your message!</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks for your message!</span>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
