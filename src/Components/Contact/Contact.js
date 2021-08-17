import './Contact.css';

function Contact() {
  return (
    <div className="contact">
      <form>
        <h4>GET IN TOUCH</h4>
        <label for="name">Name</label>
        <input type="text" id="name" />
        <label for="phone">Phone Number</label>
        <input type="number" id="phone" />
        <label for="email">Email</label>
        <input type="text" id="email" />
        <label for="message">Message</label>
        <input type="text" id="message" />
      </form>
      <img src="TBD" className="half-page-image" alt="" />
    </div>
  );
}

export default Contact;
