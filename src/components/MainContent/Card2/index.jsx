import React from "react";
import { RESTAURANT_CLOUDINARY_IMG_CDN_URL } from "../../../utils/constants";
import "./styles.css";
import Rating from "../svgs/Rating";

const TopRestaurants = (props) => {
  const { title, topRestaurants } = props;

  return title === undefined ? (
    <React.Fragment>
      <div className="topRestaurants-title-loading"></div>
      <div className="top-restaurants-grid-loading">
        <div className="topRestaurant-img-loading"></div>
        <div className="topRestaurant-img-loading"></div>
        <div className="topRestaurant-img-loading"></div>
        <div className="topRestaurant-img-loading"></div>
      </div>
    </React.Fragment>
  ) : (
    <React.Fragment>
      <div className="topRestaurants-title">{title}</div>
      <div className="top-restaurants-grid">
        {topRestaurants?.map((topRestaurant) => {
          const {
            cloudinaryImageId = "",
            name = "",
            areaName = "",
            cuisines = "",
            avgRatingString = "",
            sla = {},
            id = "",
          } = topRestaurant?.info || {};
          const slaString = sla?.slaString;

          return (
            <div key={id} className="top-restaurant-card">
              <img
                className="top-restaurant-img"
                src={RESTAURANT_CLOUDINARY_IMG_CDN_URL + cloudinaryImageId}
                alt={name}
              />
              <div className="top-restaurant-details">
                <div className="top-restaurant-name">{name}</div>
                <div className="top-restaurant-rating">
                  <Rating />
                  <div className="top-restaurant-avgRating">
                    {avgRatingString} &#xb7; {slaString}
                  </div>
                </div>
                <div className="top-restaurant-areaName">{areaName}</div>
                <div className="top-restaurant-cuisines">
                  {cuisines.join(",")}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default TopRestaurants;
