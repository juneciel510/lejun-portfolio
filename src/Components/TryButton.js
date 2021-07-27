import React from "react";
import { Link } from "react-router-dom";
const TryButton = ({ url }) => {
  return (
    <div>
      <Link to={url}>
        <button type="button" className="btn btn-info">
          Button
        </button>
      </Link>
    </div>
  );
};

export default TryButton;
