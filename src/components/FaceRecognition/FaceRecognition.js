import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <div className="center ma">
      <div className="absolote mt2">
        <img id="inputimg" src={imageUrl} width="600px" height="auto" alt="" />
        <div
          className="boudingBox"
          style={{
            top: box.topRow,
            right: box.rightCol,
            bottom: box.bottomRow,
            left: box.leftCol
          }}
        ></div>
      </div>
    </div>
  );
};
export default FaceRecognition;
