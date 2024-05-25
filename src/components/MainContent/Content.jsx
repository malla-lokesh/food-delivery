import { useState, useEffect } from "react";
import TopChoices from "./TopChoices";
import "./content.css";

const Content = () => {
  const [choices, setChoices] = useState({});

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
  };

  return (
    <div className="main-content">
      <TopChoices
        title={choices?.header?.title}
        imgGridCards={choices?.imageGridCards?.info}
      />
      <hr />
    </div>
  );
};

export default Content;
