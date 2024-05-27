import { useState, useEffect } from "react";
import TopChoices from "./TopChoices";
import TopRestaurants from "./TopRestaurants";
import "./content.css";
import Card3 from "./Card3";
import Restaurants from "./Restaurants";

const Content = () => {
  const [choices, setChoices] = useState({});
  const [topRestaurants, setTopRestaurants] = useState({});
  const [popularRestaurantsTitle, setPopularRestaurantsTitle] = useState("");
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://proxy.cors.sh/https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.7294211&lng=83.3014319&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
      {
        headers: {
          "x-cors-api-key": "temp_fbdeb1fd9d0259358ea8e75b72a2f8cf",
        },
      }
    );

    const response = await data.json();
    setChoices(response?.data?.cards[0]?.card?.card);
    setTopRestaurants(response?.data?.cards[1]?.card?.card);
    setPopularRestaurantsTitle(response?.data?.cards[2]?.card?.card);
    setRestaurants(
      response?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  return (
    <div className="main-content">
      <TopChoices
        title={choices?.header?.title}
        imgGridCards={choices?.imageGridCards?.info}
      />
      <hr />
      <TopRestaurants
        title={topRestaurants?.header?.title}
        topRestaurants={
          topRestaurants?.gridElements?.infoWithStyle?.restaurants
        }
      />
      <hr />
      <Card3 title={popularRestaurantsTitle?.title} />
      <Restaurants restaurants={restaurants} />
    </div>
  );
};

export default Content;
