import React, { Component } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';
import truckRear from '../../assets/truck_rear_bw_cropped.jpeg';

class Contact extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "",
      phone: "",
      email: "",
      message: "",
      error: false,
      success: false
    }
  }

  handleChange = (event) => {
    this.setState({
      error: false,
      [event.target.name]: event.target.value
    })
  }

  sendEmail = (event) => {
    event.preventDefault();

    if (this.state.name && this.state.phone && this.state.email && this.state.message) {

      emailjs.sendForm('service_i939oes', 'template_uzao79p', event.target, 'user_2fzJVx9HcgbiMzqp03TQe')
      .then((result) => {
        this.displaySuccess();
      }, (error) => {
        console.log(error.text);
      });
    } else {
      this.setState({ error: "Please fill out all fields."})
    }
  }

  displaySuccess = () => {
    this.setState({
      name: "",
      phone: "",
      email: "",
      message: "",
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
              value="Submit Request"
            />
          </form>
        }
      </div>
      <img src={truckRear} className="half-page-image" alt="" />
      </div>
    );
  }
}

export default Contact;
