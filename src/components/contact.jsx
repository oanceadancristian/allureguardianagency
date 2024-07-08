import React from 'react';
import { SocialIcon } from 'react-social-icons';
import 'react-social-icons/tiktok';
import 'react-social-icons/instagram';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

export const Contact = (props) => {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="text-center contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>
              <p>
                <span>
                  <FontAwesomeIcon icon={faLocationDot} /> Address
                </span>
                {props.data ? props.data.address : 'loading'}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <FontAwesomeIcon icon={faPhone} /> Phone
                </span>{' '}
                {props.data ? props.data.phone : 'loading'}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <FontAwesomeIcon icon={faEnvelope} /> Email
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
                    <SocialIcon url={props.data ? props.data.tiktok : '/'} />
                  </li>
                  <li>
                    <SocialIcon url={props.data ? props.data.instagram : '/'} />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>&copy; {currentYear} Allure Guardian Agency.</p>
        </div>
      </div>
    </div>
  );
};
