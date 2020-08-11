import React from 'react';
import Education from './Education';

const Content = () => {
  return (
    <div style={{ margin: '20px' }}>
      <h3 style={{ margin: '20px 0' }}>ABOUT ME</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Repellendus,non, dolorem, cumque distinctio magni quam expedita velit
        laborum sunt amet facere tempora ut fuga aliquam ad asperiores
        voluptatem dolorum! Quasi!.
      </p>
      <h3 style={{ margin: '20px 0' }}>EDUCATION</h3>
      <Education
        year="1999"
        summary="I was born in Katowice"
        detail="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, exercitation, totam, dolores iste dolore est aut modi"
      ></Education>
      <Education
        year="2005"
        summary="Secondary school specializing in artistic"
        detail="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, exercitation, totam, dolores iste dolore est aut modi"
      ></Education>
      <Education
        year="2009"
        summary="First level graduation in Graphic Design"
        detail="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, exercitation, totam, dolores iste dolore est aut modi"
      ></Education>
      <Education
        year="2012"
        summary="Second level graduation in Graphic Design"
        detail="Ducimus, aliquam tempore autem itaque et accusantium!"
      ></Education>
    </div>
  );
};
export default Content;
