import React, { Component } from 'react';

class ContactPage extends Component {
  state = {};
  render() {
    return (
      <div className='container'>
        <h1>Contact us please</h1>
        <p className='paragraph'>
          Please do not hesitate if you would like to contact me , regarding job offering for a Software Engineer/
          Developer position.
          <div className='paragraph'>
            My e-mail address is: <strong> andriusdulevicius@gmail.com </strong>
          </div>
        </p>
      </div>
    );
  }
}

export default ContactPage;
