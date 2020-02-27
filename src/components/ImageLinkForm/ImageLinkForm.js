import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = () => {
  return (
    <div>
      <h1 className="white">Wie is dat?</h1>
      <p className="f3 white">
        {
          '"Never trust general impresstion, but concentrate yourself upon details"'
        }
      </p>
      <div className="center">
        <div className="form center pa4 br3 shadow-5">
          <input className="f4 pa2 w-70 center" type=" text" />
          <button className="w-30 grow f4 link ph3 dib white bg-light-purple ">
            Scanning
          </button>
        </div>
      </div>
    </div>
  );
};
export default ImageLinkForm;
