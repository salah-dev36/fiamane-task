import React from "react";

const Card = ({ urls, alt_description }) => {
  return (
    <div>
      <img
        className="h-72 w-full object-cover rounded-lg shadow-md"
        alt={alt_description}
        src={urls.small}
      ></img>
    </div>
  );
};

export default Card;
