import React, { Component } from 'react';
import './Contact.css';
import truckRear from '../../assets/truck_rear_bw_cropped.jpeg';

// Quote requests are sent directly to info@commandtesting.com via Web3Forms,
// so no third party's personal inbox is in the loop.
const WEB3FORMS_ACCESS_KEY = '2123542d-7fe2-4e85-87cc-d932e5c379e6';

class Contact extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "",
      phone: "",
      email: "",
      message: "",
      error: false,
      success: false,
      sending: false
    }
  }

  handleChange = (event) => {
    this.setState({
      error: false,
      [event.target.name]: event.target.value
    })
  }

  sendEmail = async (event) => {
    event.preventDefault();

    if (!(this.state.name && this.state.phone && this.state.email && this.state.message)) {
      this.setState({ error: "Please fill out all fields." })
      return;
    }

    this.setState({ sending: true, error: false });

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: 'New Quote Request - Command Testing Website',
          from_name: this.state.name,
          name: this.state.name,
          phone: this.state.phone,
          email: this.state.email,
          message: this.state.message,
        })
      });

      const result = await response.json();

      if (result.success) {
        this.displaySuccess();
      } else {
        this.setState({ sending: false, error: "Something went wrong. Please call or email us directly." });
      }
    } catch (err) {
      this.setState({ sending: false, error: "Something went wrong. Please call or email us directly." });
    }
  }

  displaySuccess = () => {
    this.setState({
      name: "",
      phone: "",
      email: "",
      message: "",
      sending: false,
      success: "Success! Your message has been sent. We will reach out to you shortly."
    });

    setTimeout(() => { this.setState({ success: false })}, 5000);
  }


  render() {
    return (
      <div className="contact" ref={this.props.nav}>
      <div className="form-container">
        <h4>REQUEST A QUOTE</h4>
        { this.state.success &&
          <div className="success-container">
            <p className="success">{this.state.success}</p>
          </div>
        }
        { !this.state.success  &&
          <form onSubmit={this.sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={this.state.name}
              onChange={(e) => this.handleChange(e)}
            />
            <input
              type="text"
              name="phone"
              placeholder="Your Phone Number"
              value={this.state.phone}
              onChange={(e) => this.handleChange(e)}
            />
            <input
              type="text"
              name="email"
              placeholder="Your Email Address"
              value={this.state.email}
              onChange={(e) => this.handleChange(e)}
            />
            <textarea
              name="message"
              placeholder="How can we help you?"
              value={this.state.message}
              onChange={(e) => this.handleChange(e)}
            ></textarea>
            { this.state.error && <p className="error">{this.state.error}</p> }
            <input
              type="submit"
              value={this.state.sending ? "Sending..." : "Submit Request"}
              disabled={this.state.sending}
            />
          </form>
        }
      </div>
      <img src={truckRear} className="half-page-image" alt="Rear of a fire engine tested by Command Testing" />
      </div>
    );
  }
}

export default Contact;
