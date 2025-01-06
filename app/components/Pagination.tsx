import React, { useState } from 'react'
import { montserrat } from '../layout';

const Pagination = () => {
    const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 2;
  return (
   <>
   <div className="flex justify-center items-center space-x-4 pb-10">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className={`${
            currentPage === 1 ? "text-gray-400" : "text-white"
          } hover:text-green-400 text-[16px] ${montserrat.className} font-bold`}
        >
          Prev
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-3 py-1 ${
              currentPage === index + 1
                ? "bg-[#2BD17E] text-white"
                : "bg-[#092C39] text-white"
            } rounded-md font-bold ${montserrat.className}`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className={`${
            currentPage === totalPages ? "text-gray-400" : "text-white"
          } hover:text-green-400 text-[16px] ${montserrat.className} font-bold`}
        >
          Next
        </button>
      </div>
   </>
  )
}

export default Pagination