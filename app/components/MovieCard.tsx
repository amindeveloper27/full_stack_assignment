import React from 'react'

const MovieCard = () => {
  return (
    <>
    <div className={`bg-[#092C39] rounded-[12px] py-4 px-4`} >
        <img className={`lg:h-[400px] h-[246px] w-[180px] lg:w-[266px]`} src="/images/Rectangle 24.png" alt="" />
        <div className={`flex flex-col mt-4`} >
        <label className={` text-[20px] text-[#ffffff]`} >Movie 1</label>
        <label className={` text-[14px] text-[#ffffff]`} >2025</label>
        </div>
    </div>
    </>
  )
}

export default MovieCard