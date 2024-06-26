import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../../features/movies/movieSlice";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieCard from "../MovieCard/MovieCard";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);

  // Slider settings configuration
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Adjust as per your layout requirements
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  let renderMovies = "";
  let renderShows = "";

  if (movies?.Response === "True") {
    renderMovies = (
      <Slider {...sliderSettings}>
        {movies.Search.map((movie, index) => (
          <div key={index} className="px-2">
            <MovieCard data={movie} />
          </div>
        ))}
      </Slider>
    );
  } else {
    renderMovies = (
      <div className="text-center">
        <h3>{movies?.Error}</h3>
      </div>
    );
  }

  if (shows?.Response === "True") {
    renderShows = (
      <Slider {...sliderSettings}>
        {shows.Search.map((show, index) => (
          <div key={index} className="px-2">
            <MovieCard data={show} />
          </div>
        ))}
      </Slider>
    );
  } else {
    renderShows = (
      <div className="text-center">
        <h3>{shows?.Error}</h3>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <div className="mb-8">
        <h2 className="text-white text-2xl font-bold mb-4 border-b-2 border-gray-600 pb-2">
          Movies
        </h2>
        <div>{renderMovies}</div>
      </div>
      <div>
        <h2 className="text-white text-2xl font-bold mb-4 border-b-2 border-gray-600 pb-2">
          Shows
        </h2>
        <div>{renderShows}</div>
      </div>
    </div>
  );
};

export default MovieListing;
