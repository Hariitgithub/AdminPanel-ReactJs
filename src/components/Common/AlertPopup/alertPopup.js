import React from "react";

const AlertPopUp = ({ alertMessage, togglePopup }) => {
  return (
    <div className="alert-popup">
      <div className="customPopupDesign">
        <h6 className="text-center">{alertMessage}</h6>
        <div className="d-flex justify-content-center pt-2">
          <button
            className="cust-btn bg-primar text-white rounded-3 p-2 d-grid m-3"
            onClick={togglePopup}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlertPopUp;
