import React from 'react';

export const Contact = (props) => {
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="application_form">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSerNZPsfLMo3WpmQcZxUFam3NAJq-A0PoswutmRi803T5fj4w/viewform?embedded=true"
              width="100%"
              height="2915"
              title="Application Form"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              scrolling="no"
            >
              Loading…
            </iframe>
          </div>
          <div className="text-center contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span>
                {props.data ? props.data.address : 'loading'}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{' '}
                {props.data ? props.data.phone : 'loading'}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{' '}
                {props.data ? props.data.email : 'loading'}
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.instagram : '/'}>
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>&copy; 2024 Allure Guardian Agency.</p>
        </div>
      </div>
    </div>
  );
};
