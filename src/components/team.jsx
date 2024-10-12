import React from 'react';

export const Team = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Team</h2>
          <p>
            Book a call with us to determine if we would be a good fit to work
            together
          </p>
        </div>
        <div id="row">
          {props.data
            ? props.data.map((d, i) => (
                <div
                  key={`${d.position}-${i}`}
                  className="col-md-4 col-sm-4 team"
                >
                  <a
                    href={`${d.booking_url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="thumbnail">
                      {' '}
                      <img src={d.img} alt="..." className="team-img" />
                      <div className="caption">
                        <h4>{d.position}</h4>
                      </div>
                    </div>
                  </a>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  );
};
