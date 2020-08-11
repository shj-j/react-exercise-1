import React from 'react';
import PropTypes from 'prop-types';

const Education = (props) => {
  return (
    <div style={{ display: 'flex', marginBottom: '10px' }}>
      <p style={{ fontWeight: 'bold' }}>{props.year}</p>
      <div style={{ marginLeft: '70px', backgroundColor: '#ededed', flex: 1 }}>
        <p style={{ fontWeight: 'bold', padding: '10px' }}>{props.summary}</p>
        <p style={{ padding: '0 10px 10px 10px' }}>{props.detail}</p>
      </div>
    </div>
  );
};

Education.propTypes = {
  year: PropTypes.number,
  summary: PropTypes.string,
  detail: PropTypes.string,
};
export default Education;
