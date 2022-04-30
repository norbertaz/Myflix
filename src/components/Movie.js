import React from "react";

const IMAGE_API = "https://image.tmdb.org/t/p/w1280";

const setAverageColor = (vote) => {
    if(vote >=8) return "bg-green-300"
    else if(vote >= 6) return "bg-amber-400"
    else return "bg-red-400"
}


const Movie = ({title, poster_path, overview, vote_average}) => (
    <div className="movie w-72 m-4 rounded-sm shadow-lg shadow-black/40 overflow-hidden relative group">
        <div className="movie-header text-white ">
            <img className="max-w-full h-[432px]" src={IMAGE_API + poster_path} alt={title} />
            <div className="movie-info h-24 flex items-center justify-between p-6 bg-indigo-600 ">
                <h3 className="m-0 font-semibold">{title}</h3>
                <span className={`text-center p-1 font-bold w-8 rounded ${setAverageColor(vote_average)}`}>{vote_average}</span>
            </div>
            <div className="rounded-t-sm shadow-lg shadow-black/40 movie-overview absolute bottom-0 left-0 right-0 bg-white text-indigo-600 p-6 translate-y-full group-hover:translate-y-0 transition duration-300">
                <h2 className="font-semibold ">Overview:</h2>
                <p>{overview}</p>
            </div>

        </div>
    </div>
)

export default Movie