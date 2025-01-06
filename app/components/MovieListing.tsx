import React, { useState } from 'react'
import { IoAddCircleOutline } from 'react-icons/io5'
import { MdLogout } from 'react-icons/md'
import MovieCard from './MovieCard'
import Pagination from './Pagination'
import { useRouter } from 'next/router'

export const MovieListing = () => {

    const router = useRouter();
    
    
      const navigateToCreateMovie = () => {
        router.push('/add-movies');
      }
    
  return (
    <>
    <div className={`flex justify-between  my-[4rem] px-4 lg:px-[8rem]`} >
        <div className={`flex items-center text-[#ffffff] mx-4`} >
            <h2 className={` text-[32px] lg:text-[48px] leading-[56px] font-semibold`}>My movies</h2>
            <IoAddCircleOutline
            onClick={navigateToCreateMovie}
            className={`text-[32px] ml-4 cursor-pointer`} />
        </div>
        <div className={`flex items-center`} >
            <label className={`text-[#ffffff] lg:flex hidden text-[16px] font-bold`} >Logout</label>
            <MdLogout className={`text-[#ffffff] text-[32px] ml-6`} />
        </div>
    </div>
        <div className={`grid lg:grid-cols-5 lg:gap-6 gap-2 ml-[1rem]  grid-cols-2 lg:px-[8rem] `} >
            <div
            onClick={navigateToCreateMovie}
            className={`col-span-1 w-[180px] lg:w-[282px] `} >
            <MovieCard/>
            </div>
           
        </div>
        <Pagination/>
    </>
  )
}
