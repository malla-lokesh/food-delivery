import { useState, useEffect } from "react";
import Card1 from "./Card1";
import Card2 from "./Card2";
import "./content.css";

const Content = () => {
  const [choices, setChoices] = useState({});
  const [topRestaurants, setTopRestaurants] = useState({});

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
  };

  return (
    <div className="main-content">
      <Card1
        title={choices?.header?.title}
        imgGridCards={choices?.imageGridCards?.info}
      />
      <hr />
      <Card2
        title={topRestaurants?.header?.title}
        topRestaurants={
          topRestaurants?.gridElements?.infoWithStyle?.restaurants
        }
      />
      <hr />
    </div>
  );
};

export default Content;
