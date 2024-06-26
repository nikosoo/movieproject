import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ data }) => {
  return (
    <div className="bg-customColour rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
      <Link to={`/movie/${data.imdbID}`}>
        <div className="aspect-w-2 aspect-h-3">
          <img
            className="object-cover w-full h-full"
            src={data.Poster !== "N/A" ? data.Poster : "placeholder.jpg"}
            alt={data.Title}
          />
        </div>
        <div className="p-4">
          <h4 className="text-xl sm:text-2xl text-white font-bold mb-2">
            {data.Title}
          </h4>
          <p className="text-gray-400 text-sm sm:text-lg">{data.Year}</p>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
