import React from "react";
import Card from "../card/card.component";

const CardList = ({ data }) => {
  console.log(data);

  return (
    <div className="text-center text-4xl text-red-500">
      {data?.errors ? (
        <p>Error, please try again later</p>
      ) : data?.response.results.length === 0 ? (
        <p>Your search did not match any images</p>
      ) : data?.response.results.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-7xl mx-auto px-4">{
          data.response.results.map(image => <Card {...image} key={image.id} />)
        }</div>
      ) : (
        ""
      )}
    </div>
  );
};

export default CardList;
