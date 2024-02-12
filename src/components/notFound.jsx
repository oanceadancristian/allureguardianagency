export const NotFound = (props) => {
  return (
    <div className="not-found-container">
      <h2 className="not-found-title">
        {props.data ? props.data.message : 'Loading'}
      </h2>
      <div className="not-found-button">
        <a href="/">
          <button className="btn-custom">Go back home</button>
        </a>
      </div>
    </div>
  );
};
