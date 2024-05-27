import { RESTAURANT_CLOUDINARY_IMG_CDN_URL } from "../../../utils/constants";
import Rating from "../svgs/Rating";
import "./styles.css";

const Restaurants = (props) => {
  const { restaurants } = props;

  return (
    <div className="all-restaurants-grid">
      {restaurants?.map((restaurant) => {
        const {
          id = "",
          name = "",
          cloudinaryImageId = "",
          areaName = "",
          cuisines = [],
          avgRatingString = "",
          sla = {},
        } = restaurant?.info || {};

        const { deliveryTime = "" } = sla?.slaString;

        return (
          <div key={id} className="restaurant-card">
            <div className="restaurant-img-card">
              <img
                src={RESTAURANT_CLOUDINARY_IMG_CDN_URL + cloudinaryImageId}
                alt=""
                className="restaurant-img"
              />
            </div>
            <div className="top-restaurant-details">
              <div className="top-restaurant-name">{name}</div>
              <div className="top-restaurant-rating">
                <Rating />
                <div className="top-restaurant-avgRating">
                  {avgRatingString}
                  &#xb7;
                  {deliveryTime}
                </div>
              </div>
              <div className="top-restaurant-areaName">{areaName}</div>
              <div className="top-restaurant-cuisines">
                {cuisines?.join(",")}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Restaurants;
