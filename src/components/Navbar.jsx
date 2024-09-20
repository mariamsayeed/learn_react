// eslint-disable-next-line no-unused-vars
import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import Button from './Button';

const Navbar = () => {
  return (
    <div className='flex justify-between bg-[#C1E4F9]'>
        <div className='mx-20 my-4 text-3xl font-semibold italic'>
            supademo
        </div>
        <div className='ml-96'>
            <ul className='flex gap-3 my-4 font-semibold '>
              <li>   <button className='flex transition duration-300 ease-in-out hover:scale-105 hover:text-zinc-500'>
                    Use Cases
                    <IoIosArrowDown className='my-2'/>
                    </button>
                </li>
                <li>
                    <button className='flex transition duration-300 ease-in-out hover:scale-105 hover:text-zinc-500'>
                        Product
                    <IoIosArrowDown className='my-2'/>
                    </button>
                </li>
                <li><button className='flex transition duration-300 ease-in-out hover:scale-105 hover:text-zinc-500'>
                    Resources
                    <IoIosArrowDown className='my-2'/>
                    </button></li>
                <li><button className='flex transition duration-300 ease-in-out hover:scale-105 hover:text-zinc-500'>
                   Free Tools
                    </button></li>
                <li><button className='flex transition duration-300 ease-in-out hover:scale-105 hover:text-zinc-500'>
                    Prices
                    </button></li>
            </ul>
        </div>
        <div className='px-20 py-4'>
        <Button />
        </div>
    </div>
  )
}

export default Navbar