import React from "react";
import PropTypes from "prop-types";

const SimpleButton = ({ children, onClick }) => {
    return (
          <button className="btn btn-primary m-2" onClick={onClick}>
              {children}
          </button>
    );
};
SimpleButton.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    onClick: PropTypes.func
};
export default SimpleButton;
