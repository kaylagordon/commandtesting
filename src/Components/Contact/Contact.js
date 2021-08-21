import './Contact.css';

const Contact = ({ nav }) => {

  return (
    <div className="contact" ref={nav}>
      <form>
        <h4>REQUEST A QUOTE</h4>
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
