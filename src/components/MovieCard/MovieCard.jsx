import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ data }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
      <Link to={`/movie/${data.imdbID}`}>
        <div className="h-120 w-full bg-gray-900 flex items-center justify-center">
          <img className="h-full w-full " src={data.Poster} alt={data.Title} />
        </div>
        <div className="p-4">
          <h4 className="text-2xl text-white font-bold mb-2">{data.Title}</h4>
          <p className="text-gray-400 text-lg">{data.Year}</p>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
