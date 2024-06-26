import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";

const Header = () => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if (term === "") {
      return alert("Please enter search term");
    }
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));
    setTerm("");
  };

  return (
    <div className="flex items-center justify-between bg-customHeader px-6 py-4 h-20 text-white">
      <div>
        <Link to="/" className="text-3xl font-bold">
          Movie App
        </Link>
      </div>
      <div>
        <form onSubmit={submitHandler} className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="px-4 py-2 text-black rounded-l-md focus:outline-none"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-gray-500 text-white rounded-r-md hover:bg-gray-600 focus:outline-none"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
