import Faq from 'react-faq-component';

const styles = {
  bgColor: '#f6f6f6',
  titleTextColor: '#fc423f',
  rowTitleColor: '#fc423f',
  rowContentColor: '#777',
  arrowColor: '#fc423f',
};

const config = {
  expandIcon: '+',
  collapseIcon: '-',
};

export const Faqs = (props) => {
  return (
    <div id="faqs" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2">
          <Faq data={props.data} styles={styles} config={config} />
        </div>
      </div>
    </div>
  );
};
