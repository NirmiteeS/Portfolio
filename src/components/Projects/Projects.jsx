import React, {useState, useEffect} from 'react'
import './Projects.css'
import { IoCodeSlash } from "react-icons/io5";
import { FaCode } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import sudoku from '../../assets/sudoku.jpeg'
import todo from '../../assets/to-do.jpeg'
import isl from '../../assets/isl.jpeg'
import Aos from 'aos';
import 'aos/dist/aos.css'

function Projects() {
    useEffect(() => {
        Aos.init()
    },[])

  return (
    <div className="projects">
        <h1 className='proj-header' data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration="1000">Projects</h1>
    <div className='proj-container'>
    <div class="max-w-sm rounded-xl overflow-hidden shadow-lg hover:-translate-y-2 transition duration-500 ease-in-out  bg-white" data-aos="fade-up"
     data-aos-anchor-placement="top-center" data-aos-duration="800">
        <img class="w-82  transform transition duration-300 ease-in-out hover:scale-105" src={sudoku} />
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Sudoku Solver</div>
            <p class="text-gray-700 text-base">
            Allows users to input a Sudoku puzzle and solve it with the click of a button.
Responsive Design: The web application is designed to be responsive, ensuring optimal user experience across different devices and screen sizes.
            </p>
            <div className='proj-icons'>
            <a href="https://github.com/NirmiteeS/sudoku-solver"><FaCode size={25} color='black' /></a>
            <a href="https://nirmitees.github.io/sudoku-solver/"><FaEye size={25} color='black'/></a>
            </div>
        </div>
        <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">HTML</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Javacript</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">CSS</span>
        </div>
    </div>
    
    <div class="max-w-sm rounded-xl overflow-hidden shadow-lg hover:-translate-y-2 transition duration-500 ease-in-out  bg-white" data-aos="fade-up"
     data-aos-anchor-placement="top-center" data-aos-duration="1200">
        <img class="w-full  transform transition duration-300 ease-in-out hover:scale-105" src={todo} />
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Task Manager </div>
            <p class="text-gray-700 text-base">
            The To-Do List is a simple web application built using HTML, CSS, and JavaScript. It allows users to manage their tasks by adding, editing, and deleting items from a list.
            </p>
            <div className='proj-icons'>
            <a href="https://github.com/NirmiteeS/Todo-List"><FaCode size={25} color='black'/></a>
            <a href="https://nirmitees.github.io/Todo-List/"><FaEye size={25} color='black'/></a>
            </div>
        </div>
        <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">HTML</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Javacript</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">CSS</span>
        </div>
    </div>

    <div class="max-w-sm rounded-xl overflow-hidden shadow-lg hover:-translate-y-2 transition duration-500 ease-in-out  bg-white" data-aos="fade-up"
     data-aos-anchor-placement="top-center" data-aos-duration="1400">
        <img class="w-full  transform transition duration-300 ease-in-out hover:scale-105" src={isl}/>
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Sign Language Web Interface</div>
            <p class="text-gray-700 text-base">
            The website interface focuses on providing users with an intuitive and interactive platform for accessing Sign Language Interpreter services. 
            </p>
            <div className='proj-icons'>
            <a href="https://github.com/NirmiteeS/ISL-Interpreter"><FaCode size={25} color='black'/></a>
            <a href="https://isl-frontend.netlify.app/"><FaEye size={25} color='black'/></a>
            </div>
        </div>
        <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">React JS</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">HTML</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">CSS</span>
        </div>
    </div>
    </div>
</div>

  )
}

export default Projects