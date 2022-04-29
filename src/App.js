import React, {useState, useEffect} from "react";

import Movie from './components/Movie'


const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=ac9f196863b883b15565a053074f4a49&query&page=1"
// const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=ac9f196863b883b15565a053074f4a49&query="

function App() {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch(FEATURED_API)
      .then(res => res.json())
      .then(data => {
        console.log(data.results)
        setMovies(data.results)
      })

    
  },[])
  const handleSubmit = (e) => {
    e.preventDefault()

  }
  const handleChange = (e) => {
    setSearch(e.target.value)
  }
  return (
    <>
      <header className="bg-indigo-600 p-4 flex justify-end">
        <form onSubmit={handleSubmit}></form>
        <input 
        value={search}
        onChange={handleChange}
        type="text" 
        placeholder="Search" 
        className="py-3 px-6 text-lg text-white rounded-full bg-transparent border-solid border-2 border-indigo-900 font-sans"/>
      </header>
    <div className="flex flex-wrap justify-around mt-6">
        {movies.map(movie => <Movie key={movie.id} {...movie}/>)}
    </div>
    </>
  );
}

export default App;
