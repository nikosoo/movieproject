import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchAsyncMovieOrShowsDetail,
  getSelectMovieOrShow,
} from "../../features/movies/movieSlice";

const MovieDetail = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectMovieOrShow);

  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowsDetail(imdbID));
  }, [dispatch, imdbID]);

  return (
    <>
      {Object.keys(data).length === 0 ? (
        <div className="text-white">...Loading</div>
      ) : (
        <div className="flex flex-col md:flex-row bg-customBg text-white pb-20 md:pb-40 lg:pb-80">
          <div className="section-left p-4 md:w-2/3">
            <div className="movie-title text-2xl lg:text-3xl font-bold mb-4">
              {data.Title}
            </div>
            <div className="movie-rating mb-4">
              <span className="block mb-1">
                IMDB Rating <i className="fa fa-star text-yellow-500"></i> :{" "}
                {data.imdbRating}
              </span>
              <span className="block mb-1">
                IMDB Votes <i className="fa fa-thumbs-up text-blue-500"></i> :{" "}
                {data.imdbVotes}
              </span>
              <span className="block mb-1">
                Runtime <i className="fa fa-film text-red-500"></i> :{" "}
                {data.Runtime}
              </span>
              <span className="block mb-1">
                Year <i className="fa fa-calendar text-green-500"></i> :{" "}
                {data.Year}
              </span>
            </div>
            <div className="movie-plot mb-4">{data.Plot}</div>
            <div className="movie-info space-y-2">
              <div className="flex">
                <span className="font-semibold w-24">Director</span>
                <span>{data.Director}</span>
              </div>
              <div className="flex">
                <span className="font-semibold w-24">Stars</span>
                <span>{data.Actors}</span>
              </div>
              <div className="flex">
                <span className="font-semibold w-24">Genres</span>
                <span>{data.Genre}</span>
              </div>
              <div className="flex">
                <span className="font-semibold w-24">Languages</span>
                <span>{data.Language}</span>
              </div>
              <div className="flex">
                <span className="font-semibold w-24">Awards</span>
                <span>{data.Awards}</span>
              </div>
            </div>
          </div>
          <div className="section-right p-4 md:w-1/3 flex justify-center items-center">
            <img
              src={data.Poster}
              alt={data.Title}
              className="max-w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default MovieDetail;
