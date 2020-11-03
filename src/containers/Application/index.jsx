import React from 'react';

import chords from './chords.png';

const Application = () => {
  return (
    <div>
      <span>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/izSLT-ZaiKA" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullscreen />
      </span>
      <span>
        <img src={chords} alt="chords" />
      </span>
    </div>
  );
};

export default Application;
