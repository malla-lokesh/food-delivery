import React from "react";
import { BANNER_CDN_URL } from "../../../utils/constants";
import "./styles.css";
import { Link } from "react-router-dom";

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
        {imgGridCards?.map((banner) => {
          const entityId = banner?.action?.link.substring(35, 40);

          return (
            <Link
              key={banner?.id}
              to={`/collections/${entityId}/${banner?.action?.text}`}
            >
              <img
                src={BANNER_CDN_URL + banner?.imageId}
                alt={banner?.accessibility?.altText}
              />
            </Link>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default TopChoices;
