import React, { useEffect, useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/captions.css';
import JsonData from '../data/data.json';
import { Image } from './image';

export const Gallery = (props) => {
  const [index, setIndex] = useState(-1);

  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div id="gallery" className="text-center">
      <Lightbox
        plugins={[Captions]}
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={landingPageData.Gallery}
      />

      <div className="container">
        <div className="section-title">
          <h2>Gallery</h2>
          <p>Our results</p>
        </div>
        <div className="row">
          <div className="gallery-items">
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4"
                  >
                    <Image
                      index={i}
                      title={d.title}
                      src={d.src}
                      onClick={(currentIndex) => setIndex(currentIndex)}
                    />
                  </div>
                ))
              : 'Loading...'}
          </div>
        </div>
      </div>
    </div>
  );
};
