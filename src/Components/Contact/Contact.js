import React, { Component } from 'react';
import './Contact.css';
import truckRear from '../../assets/truck_rear_bw_cropped.jpeg';

// Quote requests are sent directly to info@commandtesting.com via Web3Forms,
// so no third party's personal inbox is in the loop.
const WEB3FORMS_ACCESS_KEY = '2123542d-7fe2-4e85-87cc-d932e5c379e6';

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const EMPTY_FORM = {
  name: '',
  phone: '',
  email: '',
  department: '',
  city: '',
  usState: '',
  aerialDevices: '',
  ladderFootage: '',
  pumps: '',
  preferredMonth: '',
  message: '',
};

class Contact extends Component {
  constructor(props) {
    super(props)

    this.state = {
      ...EMPTY_FORM,
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

    const required = ['name', 'phone', 'email', 'department', 'city', 'usState', 'message'];
    if (required.some((field) => !String(this.state[field]).trim())) {
      this.setState({ error: 'Please fill out your name, phone, email, department, city, state, and message.' })
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
          department: this.state.department,
          city: this.state.city,
          state: this.state.usState,
          aerial_devices: this.state.aerialDevices,
          ground_ladder_footage: this.state.ladderFootage,
          pumps: this.state.pumps,
          preferred_month: this.state.preferredMonth,
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
      ...EMPTY_FORM,
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
            <label>
              Department / Company
              <input
                type="text"
                name="department"
                autoComplete="organization"
                value={this.state.department}
                onChange={this.handleChange}
              />
            </label>
            <div className="form-row">
              <label>
                City
                <input
                  type="text"
                  name="city"
                  autoComplete="address-level2"
                  value={this.state.city}
                  onChange={this.handleChange}
                />
              </label>
              <label>
                State
                <input
                  type="text"
                  name="usState"
                  autoComplete="address-level1"
                  value={this.state.usState}
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <div className="form-row">
              <label>
                Number of aerial devices
                <input
                  type="number"
                  name="aerialDevices"
                  min="0"
                  inputMode="numeric"
                  value={this.state.aerialDevices}
                  onChange={this.handleChange}
                />
              </label>
              <label>
                Ground ladder footage (approx.)
                <input
                  type="number"
                  name="ladderFootage"
                  min="0"
                  inputMode="numeric"
                  value={this.state.ladderFootage}
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <label>
              Pumps
              <span className="field-hint">Only if you are in central Ohio or an apparatus manufacturer.</span>
              <input
                type="number"
                name="pumps"
                min="0"
                inputMode="numeric"
                value={this.state.pumps}
                onChange={this.handleChange}
              />
            </label>
            <label>
              Preferred month
              <select
                name="preferredMonth"
                value={this.state.preferredMonth}
                onChange={this.handleChange}
              >
                <option value="">Select a month</option>
                {MONTHS.map((month) => (
                  <option key={month} value={month}>{month}</option>
                ))}
              </select>
            </label>
            <label>
              Your Name
              <input
                type="text"
                name="name"
                autoComplete="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </label>
            <label>
              Your Email Address
              <input
                type="email"
                name="email"
                autoComplete="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </label>
            <label>
              Your Phone Number
              <input
                type="tel"
                name="phone"
                autoComplete="tel"
                value={this.state.phone}
                onChange={this.handleChange}
              />
            </label>
            <label>
              How can we help you?
              <textarea
                name="message"
                value={this.state.message}
                onChange={this.handleChange}
              ></textarea>
            </label>
            { this.state.error && <p className="error">{this.state.error}</p> }
            <input
              type="submit"
              value={this.state.sending ? "Sending..." : "Submit Request"}
              disabled={this.state.sending}
            />
          </form>
        }
      </div>
      <img src={truckRear} className="half-page-image" alt="Rear of a fire engine tested by Command Testing" loading="lazy" />
      </div>
    );
  }
}

export default Contact;
