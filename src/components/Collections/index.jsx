import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Collection from "./Collection";
import "./styles.css";

const Collections = () => {
  const { collectionId, collectionName } = useParams();
  const [collectionsTitle, setCollectionsTitle] = useState("");
  const [collectionsDescription, setCollectionsDescription] = useState("");

  useEffect(() => {
    const fetchCollectionData = async () => {
      const response = await fetch(
        `https://proxy.cors.sh/https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.7294211&lng=83.3014319&collection=${collectionId}&tags=layout_CCS_${collectionName}&sortBy=&filters=&type=rcv2&offset=0&page_type=null`,
        {
          headers: {
            "x-cors-api-key": "temp_fbdeb1fd9d0259358ea8e75b72a2f8cf",
          },
        }
      );
      const data = await response.json();

      setCollectionsTitle(data?.data?.cards[0]?.card?.card?.title);
      setCollectionsDescription(data?.data?.cards[0]?.card?.card?.description);
    };

    fetchCollectionData();
  }, []);

  return (
    <div className="collections-page">
      <Collection
        title={collectionsTitle}
        description={collectionsDescription}
      />
    </div>
  );
};

export default Collections;
