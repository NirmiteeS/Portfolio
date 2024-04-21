import React, { useEffect, useState } from 'react';
import "./infocard.css";
import axios from 'axios'
import { SlUserFollow } from "react-icons/sl";
import { SlUserFollowing } from "react-icons/sl";
import { RiStarSLine } from "react-icons/ri";
import { FaRegFileCode } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import img3 from '../../assets/bg-img.jpg'
import { IoMail } from "react-icons/io5";
import stats from '../../assets/ss2.png'
import { IoMdStar } from "react-icons/io";
import Aos from 'aos';
import 'aos/dist/aos.css'

function Info() {
  const [followers, setFollowers] = useState(0)
  const [following, setFollowing] = useState(0)
  const [repo, setRepo] = useState(0)
  const [img,setImage] = useState(0)
  const [date,setDate] = useState(0)
  const [name, setName] = useState(0)
  useEffect(() => {
  const getData = async () => {
    try{
      const response = await axios.get(
        'https://api.github.com/users/NirmiteeS'
      );
      const data = response.data
      // console.log(data)
      setFollowers(data.followers)
      setFollowing(data.following)
      setRepo(data.public_repos)
      setImage(data.avatar_url)
      setDate(data.created_at)
      setName(data.login)
    }
    catch(error){
      console.log(error)
    }
  }
  getData()
  },[])


  const [watchers, setWatchers] = useState(0)
  const [stars, setStars] = useState(0)
  
  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await axios.get(
          'https://api.github.com/repos/NirmiteeS/DSA'
        );
        const data = response.data
        // console.log(data.stargazers_count)
        setWatchers(data.stargazers_count)
        setStars(data.watchers)
      }
      catch(error){
        console.log(error)
      }
    }
    fetchData()
    },[])


    useEffect(() => {
      Aos.init()
    },[])

    // useEffect(() => {
    //   const fetchLeet = async () => {
    //     try{
    //       const leetresp = await axios.get(
    //         'https://leetcode-stats-api.herokuapp.com/NirmiteeS'
    //       );
    //       console.log(leetresp)
    //     }
    //     catch(error){
    //       console.log(error)
    //     }
    //   }
    //   fetchLeet()
    //   },[])

  return (

<div className="infocard-cont">
    <h1 data-aos="fade-up" data-aos-offset="300"
     data-aos-anchor-placement="top-bottom" data-aos-durations="1000">Github Profile and Skills</h1>
 <div className='profile-cont'>
<div className='git-prof' >
<div class="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900" data-aos="flip-left" data-aos-duration="1500" data-aos-offset="300" data-aos-delay="300">
    <div class="rounded-t-lg h-32 overflow-hidden">
        <img class="object-cover object-top w-full" src={img3} alt='Mountain'/>
    </div>
    <div class="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
        <img class="object-cover object-center h-32" src={img} alt='Woman looking front'/>
    </div>
    <div class="text-center mt-2">
        <h2 class="font-semibold">{name}</h2>
        <p class="text-gray-500">Github Profile</p>
    </div>
    <ul class="py-4 mt-2 text-gray-700 flex items-center justify-around">
        <li class="flex flex-col items-center justify-around">
            <p>Followers</p>
            <div>{followers}</div>
        </li>
        <li class="flex flex-col items-center justify-between">
            <p>Following</p>
            <div>{following}</div>
        </li>
        
        
    </ul>
                  <div class="text-left text-gray-600 text-base pt-3 font-normal flex items-center justify-center">
                   <FaRegFileCode className="mr-2" size={20}/><span className='profile-icons'>Repositories: {repo}</span>
                 </div>
                 <div class="text-left text-gray-600 text-base pt-3 font-normal flex items-center justify-center">
                <IoPerson className="mr-2" size={20}/><span className='profile-icons'>Watchers: {watchers}</span>
                </div>
                <div class="text-left text-gray-600 text-base pt-3 font-normal flex items-center justify-center">
                <IoMdStar  className="mr-2" size={20}/><span className='profile-icons'>Stars: {stars}</span>
                </div>
</div>
</div>

{/* <div class="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900">
    <div class="rounded-t-lg h-32 overflow-hidden">
        <img class="object-cover object-top w-full" src='https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt='Mountain'/>
    </div>
    <div class="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
        <img class="object-cover object-center h-32" src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt='Woman looking front'/>
    </div>
    <div class="text-center mt-2">
        <h2 class="font-semibold">Sarah Smith</h2>
        <p class="text-gray-500">Freelance Web Designer</p>
    </div>
    <ul class="py-4 mt-2 text-gray-700 flex items-center justify-around">
        <li class="flex flex-col items-center justify-around">
            <svg class="w-4 fill-current text-blue-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path
                    d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
            <div>2k</div>
        </li>
        <li class="flex flex-col items-center justify-between">
            <RiStarSLine/>
            <div>10k</div>
        </li>
        
    </ul>
                  <div class="text-left text-gray-600 text-base pt-3 font-normal flex items-center justify-center">
                   <FaRegFileCode className="mr-2" /><span className='profile-icons'>Repositories: {repo}</span>
                 </div>
                 <div class="text-left text-gray-600 text-base pt-3 font-normal flex items-center justify-left">
                <IoPerson className="mr-2" /><span className='profile-icons'>Watchers: {watchers}</span>
                </div>
</div> */}
<div className='connect-para' data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-duration="1000"
     data-aos-offset="100">
    <img src={stats} alt=".." />

</div>

</div> 
<div className='mail-icon' data-aos="zoom-in-up" data-aos-duration="900">
<a href='mailto:nirmiteesarode04@gmail.com'>
<IoMail size={150} color='#00CADC' className='mail-icon-click'/></a><p className='info-connect'>My inbox is always open - so if you want to connect with me on something don't be afraid to say hi.</p>
</div>
</div>
  )
}

export default Info

