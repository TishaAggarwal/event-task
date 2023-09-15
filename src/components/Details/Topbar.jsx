import React from "react";
import {Menu} from "lucide-react"
import logo from "../../assets/Home/Kartexa-logo.png";
import global from "../../assets/Home/global.png";
import scan from "../../assets/Home/scan.png";
import adminpannel from "../../assets/Home/speedometer.png";
import profilecircle from "../../assets/Home/profilecircle.png";
import log_out from "../../assets/Home/logout.png"

function Header({admin_dropdown , handleAdmin_dropdown,handlesmall_header_open,small_header_open}) {
  
  return (
    <>
    <div className="bg-transparent hidden  md:flex items-center font-cinzel font-bold text-white  px-3 py-2 ">
      <div>
        <img src={logo} alt="Kartexa logo" className="sm:h-[50px]" />
      </div>
      <ul className="flex flex-1 justify-end items-center font-semibold gap-4 lg:gap-[5%]">
        {/* <li className="relative">
        { <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 pl-3 pr-4  rounded bg-transparent  " onClick={handleAdmin_dropdown}>ADMIN<svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
  </svg></button> }
  { { admin_dropdown && 
  <div class="absolute right-0 z-[1000] mt-2 w-48 origin-top-right rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none font-cinzel font-semibold text-black" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
    <div class="py-1" role="none">
      <a href="#" className=" flex  px-4 py-2  gap-3" role="menuitem" tabindex="-1" id="menu-item-0"> <img src={adminpannel} className="inline" alt="admin-pannel" /> <span>Admin Pannel</span></a>
      <a href="#" className=" flex  px-4 py-2  gap-3" role="menuitem" tabindex="-1" id="menu-item-1"><img src={profilecircle} className="inline" alt="profile " /><span>Profile</span></a>
      <a href="#" className=" flex  px-4 py-2  gap-3" role="menuitem" tabindex="-1" id="menu-item-2"><img src={scan} className="inline" alt="scan ticket" /> <span>Scan Ticket</span></a>
      <a href="#" className=" flex  px-4 py-2  gap-3" role="menuitem" tabindex="-1" id="menu-item-2"><img src={log_out} alt="logout" className="inline" /> <span>LOGOUT</span></a>
    </div>
  </div>} }
        </li> */}
        <li className="hover:cursor-pointer">HOME</li>
        <li className="hover:cursor-pointer">VENUE</li>
        <li className="hover:cursor-pointer">CATEGORIES</li>
        <li className="hover:cursor-pointer">BLOGS</li>
        <li className="hover:cursor-pointer text-white px-6 py-2 rounded-xl" style={{"background": "linear-gradient(90deg, rgba(216, 7, 250, 0.76) 0%, #FF0CBB 94.49%)"}}>
         <button type="button"
    onClick={(e) => {
      e.preventDefault();
      window.location.href='http://google.com';
      }}
>SIGN IN</button>   
        </li>
        <li className="flex flex-row items-center hover:cursor-pointer">
        <img src={global} alt="" className="w-[25px]"/>
        <svg
          class="w-2.5 h-2.5 ml-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
        </li>
        
      </ul>
    </div>
    <div className="bg-transparent md:hidden flex justify-between items-center font-cinzel font-bold text-white  px-3 py-2 ">
      <div>
        <img src={logo} alt="Kartexa logo" className="h-[40px] sm:h-[50px]" />
      </div>

     <div onClick={handlesmall_header_open}><Menu/>
     </div>
     
     { <div className="absolute top-12 right-4"> 
     {small_header_open && <ul className="flex flex-col flex-1 justify-end items-start font-semibold gap-4 lg:gap-[5%]">
        <li className="relative">
        <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 pr-4  rounded bg-transparent  " onClick={handleAdmin_dropdown}>ADMIN<svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
  </svg></button>
  { admin_dropdown && 
  <div class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none font-cinzel font-semibold text-black" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
    <div class="py-1" role="none">
      <a href="#" className=" flex  px-4 py-2  gap-3" role="menuitem" tabindex="-1" id="menu-item-0"> <img src={adminpannel} className="inline" alt="admin-pannel" /> <span>Admin Pannel</span></a>
      <a href="#" className=" flex  px-4 py-2  gap-3" role="menuitem" tabindex="-1" id="menu-item-1"><img src={profilecircle} className="inline" alt="profile " /><span>Profile</span></a>
      <a href="#" className=" flex  px-4 py-2  gap-3" role="menuitem" tabindex="-1" id="menu-item-2"><img src={scan} className="inline" alt="scan ticket" /> <span>Scan Ticket</span></a>
      <a href="#" className=" flex  px-4 py-2  gap-3" role="menuitem" tabindex="-1" id="menu-item-2"><img src={log_out} alt="logout" className="inline" /> <span>LOGOUT</span></a>
    </div>
  </div>}
        </li>
        <li className="hover:cursor-pointer">CREATE EVENT</li>
        <li className="hover:cursor-pointer">VENUE</li>
        <li className="hover:cursor-pointer">CATEGORIES</li>
        <li className="hover:cursor-pointer">BLOGS</li>
        <li className="flex flex-row items-center hover:cursor-pointer">
        <img src={global} alt="" className="w-[25px]"/>
        <svg
          class="w-2.5 h-2.5 ml-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
        </li>
        
      </ul>}
      </div>}

      
    </div>
    </>
    
  );
}

export default Header;
