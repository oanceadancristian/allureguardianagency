import React from 'react';

export const Booking = (props) => {
  return (
    <div>
      <div id="booking">
        <div className="container">
          <div className="application_form">
            {/* <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSerNZPsfLMo3WpmQcZxUFam3NAJq-A0PoswutmRi803T5fj4w/viewform?embedded=true"
              title="Application Form"
              width="100%"
              height="2915"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              scrolling="no"
            >
              Loading…
            </iframe> */}
            <iframe
              src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2-EDEMvybvJnVFZfugu5Iqc1iwX34Siz5JRZcB71PlWqfdpzpJEIMKiIZ7l8mOIeshK6g5WVua?gv=true"
              title="Booking Page"
              style={{ border: 0 }}
              width="100%"
              height="1000"
              frameBorder="0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
