import React from "react";
import "./styles.css";

const Collection = (props) => {
  const { title, description } = props;

  return (
    <React.Fragment>
      <div className="collection-header">
        <div className="collections-title">{title}</div>
        <div className="collections-description">{description}</div>
      </div>
    </React.Fragment>
  );
};

export default Collection;
