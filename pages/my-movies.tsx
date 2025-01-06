import { MovieListing } from '@/app/components/MovieListing'
import React from 'react';
import "../app/globals.css";

const MyMovies = () => {
  return (
     <>
          <div className="flex flex-col  min-h-screen bg-[#093545]">
            <div>

            <MovieListing/>
            </div>
            <img
              src="/images/Vectors.svg"
              className={`hidden lg:flex relative bottom-0 w-full `}
            />
            <img
              src="/images/Vectors_mbl.svg"
              className={`flex lg:hidden relative bottom-0 w-full `}
            />
          </div>
        </>
  )
}

export default MyMovies