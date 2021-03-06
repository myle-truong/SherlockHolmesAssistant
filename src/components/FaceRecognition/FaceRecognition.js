import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <div className="center ma">
      <div className="absolute mt3">
        <img id="inputimg" src={imageUrl} width="600px" height="auto" alt="" />
        <div
          className="boundingBox"
          style={{
            top: box.topRow,
            right: box.rightCol,
            bottom: box.bottomRow,
            left: box.leftCol
          }}
        > </div>
      </div>
    </div>
  );
};
export default FaceRecognition;
