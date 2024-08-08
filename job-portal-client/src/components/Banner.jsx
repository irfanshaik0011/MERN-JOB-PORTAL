/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import {FiMapPin, FiSearch} from "react-icons/fi"

const Banner = ({query, handleInputChange}) => {
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 md:py-20 py-14">
      <h1 className="text-5xl font-bold text-primary mb-3">𝗙𝗶𝗻𝗱 𝗬𝗼𝘂𝗿 <span className="text-blue">𝗗𝗿𝗲𝗮𝗺 𝗝𝗼𝗯</span> 𝗧𝗼𝗱𝗮𝘆</h1>
      <p className="text-lg text-black/70 mb-8">Dive into Thousands of Job Listings in Tech, Engineering, and Computer Science!
      </p>
      <form>
        <div className="flex justify-start md:flex-row flex-col md:gap-0 gap-4 ">
        <div className="flex md:rounded-s-md rounded shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 md:w-1/2 w-full">
            <input type="text" name="title" id="title" placeholder="What You Are Looking For" className="block flex-1 border-0 bg-transparent p-1.5 pl-8 text-gray-900 placeholder:text-gray-400 focus:right-0 sm:text-sm sm:leading-6"
            onChange={handleInputChange}
            value={query}
            />
            <FiSearch className="absolute mt-2.5 ml-2 text-gray-400"/>
          </div> 
          <div className="flex md:rounded-s-none rounded shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 md:w-1/3 w-full">
            <input type="text" name="title" id="title" placeholder="Location" className="block flex-1 border-0 bg-transparent p-1.5 pl-8 text-gray-900 placeholder:text-gray-400 focus:right-0 sm:text-sm sm:leading-6"
            />
            <FiMapPin className="absolute mt-2.5 ml-2 text-gray-400"/>
          </div>

          <button type='submit' className="bg-blue py-2 px-8 text-white md:rounded-s-none rounded">Search</
          button>
        </div>
      </form>
    </div>
  )
}

export default Banner