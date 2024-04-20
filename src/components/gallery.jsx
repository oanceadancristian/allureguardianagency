import React from 'react';
import { Image } from './image';

export const Gallery = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Gallery</h2>
          <p>Our results</p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4"
                  >
                    <Image title={d.title} source={d.source} />
                  </div>
                ))
              : 'Loading...'}
          </div>
        </div>
      </div>
    </div>
  );
};
