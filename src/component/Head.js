import React from 'react';
import avatar from '../assets/avatar.jpg';

const Head = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <img src={avatar} alt="avatar" className="image-size" />
      <h1 align="center" style={{ marginTop: '20px' }}>
        HELLO,
      </h1>
      <h1 align="center" style={{ margin: '20px 0' }}>
        MY NAME IS KAMIL 24YO AND THIS IS MY RESUME/CV
      </h1>
      <hr style={{ border: '1px solid lightgray' }} />
    </div>
  );
};

export default Head;
