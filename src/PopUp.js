/*
Create a custom PopUp Component to display dynamic details.

Author: Monica
Date : Jan 2025
FileName : PopUp.js
*/
import React from "react";

function PopUp({ showPopUp, closePopUp, children }) {
  if (!showPopUp) {
    return null;
  }
  return (
    <div className="PopUp">
      {children}
      <button onClick={closePopUp}>close</button>
    </div>
  );
}

export default PopUp;
