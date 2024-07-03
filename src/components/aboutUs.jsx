import React from 'react';

export const AboutUs = (props) => {
  return (
    <div id="about_us">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {' '}
            <img
              src="img/about_us.jpg"
              className="img-responsive"
              alt=""
            />{' '}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about_us-text">
              <h2>About Us</h2>
              <p>{props.data ? props.data.paragraph : 'loading...'}</p>
              <h3>Why Choose Us?</h3>
              <div className="list-style">
                <div className="col-lg-5 col-sm-5 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : 'loading'}
                  </ul>
                </div>
                <div className="col-lg-7 col-sm-7 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : 'loading'}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
