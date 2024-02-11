export const NotFound = (props) => {
  return (
    <div className="container text-center" style={{ marginTop: '250px' }}>
      <h1 style={{ marginBottom: '25px' }}>
        {props.data ? props.data.message : 'Loading'}
      </h1>
      <a href="/">
        <button className="btn-custom">Go back home</button>
      </a>
    </div>
  );
};
