import React from "react";
import { BANNER_CDN_URL } from "../../../utils/constants";
import "./styles.css";
import "../../common/styles/styles.css";

const TopChoices = (props) => {
  const { title, imgGridCards } = props;

  return title === undefined ? (
    <React.Fragment>
      <div className="title-loading"></div>
      <div className="banner-grid-loading">
        <div className="banner-loading"></div>
        <div className="banner-loading"></div>
        <div className="banner-loading"></div>
        <div className="banner-loading"></div>
        <div className="banner-loading"></div>
        <div className="banner-loading"></div>
        <div className="banner-loading"></div>
        <div className="banner-loading"></div>
      </div>
    </React.Fragment>
  ) : (
    <React.Fragment>
      <div className="choices-title">{title}</div>
      <div className="banner-grid">
        {imgGridCards?.map((banner) => (
          <img
            key={banner?.id}
            src={BANNER_CDN_URL + banner?.imageId}
            alt={banner?.accessibility?.altText}
          />
        ))}
      </div>
    </React.Fragment>
  );
};

export default TopChoices;
