import React from "react";
import { useState } from "react";
import Topbar from "./Topbar";
import add_ from "../../assets/Categories/addcircle.png";
import phto from "../../assets2/Details/gallery.png";

function Detailssection({
  admin_dropdown,
  handleAdmin_dropdown,
  handlesmall_header_open,
  small_header_open,
}) {
  const [currstate, setCurrstate] = useState("Details");

  const linearGradientStyle = {
    background: "linear-gradient( to right, #B952F7 41%, #FF5DEF 100%)", // Define your linear gradient here
  };

  const whiteBackgroundStyle = {
    background: "white",
    padding: "20px", // Adjust the padding as needed
    borderRadius: "10px", // Add rounded corners if desired
  };

  const colorbg = {
    color: "#F40E8A",
  };

  const linearGradient = {
    border: "2px solid transparent", // Set an initial transparent border
    borderImage: "linear-gradient(90deg, rgba(216, 7, 250, 0.76) 0%, #FF0CBB 94.49%)",
    borderImageSlice: "1",
    borderRadius:"10px",
  };

  return (
    <div className="min-h-screen" style={linearGradientStyle}>
      <Topbar
        admin_dropdown={admin_dropdown}
        handleAdmin_dropdown={handleAdmin_dropdown}
        handlesmall_header_open={handlesmall_header_open}
        small_header_open={small_header_open}
      />

      <div className="content text-white flex font-cinzel flex-col sm:flex-row sm:gap-4 lg:gap-8">
        <div className="sidebar text-black font-semibold mt-4 flex justify-center sm:block ">
          <ul
            className=" flex flex-col items-center pt-4 sm:pt-16 pb-4 sm:pb-48 gap-4 w-[80%] sm:w-fit px-4 rounded-xl sm:px-0 sm:rounded-none"
            style={{
              background:
                "linear-gradient(0deg, #FF5DEF 56.35%, rgba(185, 82, 247, 0.41) 109.04%)",
            }}
          >
            <li
              className="hover:cursor-pointer w-full py-3 text-xl sm:py-4 sm:px-20 text-center rounded-xl "
              style={
                currstate === "Details"
                  ? {
                      color: "black",
                      background:
                        "linear-gradient(179.07deg, rgba(244, 138, 14, 0.48) 0.8%, rgba(244, 14, 207, 0.3744) 155.29%)",
                    }
                  : {}
              }
              onClick={() => {
                setCurrstate("Details");
              }}
            >
              Details
            </li>
            <li
              className="hover:cursor-pointer w-full py-3 text-xl sm:py-4 sm:px-20 text-center rounded-xl "
              style={
                currstate === "Timing"
                  ? {
                      color: "black",
                      background:
                        "linear-gradient(179.07deg, rgba(244, 138, 14, 0.48) 0.8%, rgba(244, 14, 207, 0.3744) 155.29%)",
                    }
                  : {}
              }
              onClick={() => {
                setCurrstate("Timing");
              }}
            >
              Timing
            </li>
            <li
              className="hover:cursor-pointer w-full py-3 text-xl sm:py-4 sm:px-20 text-center rounded-xl "
              style={
                currstate === "Tickets"
                  ? {
                      color: "white",
                      background:
                        "linear-gradient(179.07deg, rgba(244, 138, 14, 0.48) 0.8%, rgba(244, 14, 207, 0.3744) 155.29%)",
                    }
                  : {}
              }
              onClick={() => {
                setCurrstate("Tickets");
              }}
            >
              Tickets
            </li>
            <li
              className="hover:cursor-pointer w-full py-3 text-xl sm:py-4 sm:px-20 text-center rounded-xl "
              style={
                currstate === "Location"
                  ? {
                      color: "white",
                      background:
                        "linear-gradient(179.07deg, rgba(244, 138, 14, 0.48) 0.8%, rgba(244, 14, 207, 0.3744) 155.29%)",
                    }
                  : {}
              }
              onClick={() => {
                setCurrstate("Location");
              }}
            >
              Location
            </li>
            <li
              className="hover:cursor-pointer w-full py-3 text-xl sm:py-4 sm:px-20 text-center rounded-xl "
              style={
                currstate === "Media"
                  ? {
                      color: "white",
                      background:
                        "linear-gradient(179.07deg, rgba(244, 138, 14, 0.48) 0.8%, rgba(244, 14, 207, 0.3744) 155.29%)",
                    }
                  : {}
              }
              onClick={() => {
                setCurrstate("Media");
              }}
            >
              Media
            </li>
            <li
              className="hover:cursor-pointer w-full py-3 text-xl sm:py-4 sm:px-20 text-center rounded-xl "
              style={
                currstate === "SEO"
                  ? {
                      color: "white",
                      background:
                        "linear-gradient(179.07deg, rgba(244, 138, 14, 0.48) 0.8%, rgba(244, 14, 207, 0.3744) 155.29%)",
                    }
                  : {}
              }
              onClick={() => {
                setCurrstate("SEO");
              }}
            >
              SEO
            </li>
            <li
              className="hover:cursor-pointer w-full py-3 text-xl sm:py-4 sm:px-20 text-center rounded-xl "
              style={
                currstate === "Publish"
                  ? {
                      color: "white",
                      background:
                        "linear-gradient(179.07deg, rgba(244, 138, 14, 0.48) 0.8%, rgba(244, 14, 207, 0.3744) 155.29%)",
                    }
                  : {}
              }
              onClick={() => {
                setCurrstate("Publish");
              }}
            >
              Publish
            </li>
          </ul>
        </div>

        <div className="content pb-8 flex-1 mt-4 overflow-x-auto"
         style={whiteBackgroundStyle}
        >
       { currstate==="Details" &&  <form className="flex flex-col border-1 border-red-200 p-4 max-w-4xl">
            <label
              htmlFor="Category"
              className="font-cinzel font-bold sm:text-xl text-black">
              SELECT CATEGORY
            </label>
            <select
              htmlFor="Category"
              className="p-2 border border-black bg-white sm:h-16 mt-1 rounded-md max-w-4xl text-black">              
              <option value="Option1">Option 1</option>
              <option value="Option2">Option 2</option>
              <option value="Option3">Option 3</option>
            </select>
            {/* <input type="text" name="Category" className="p-2 border border-white bg-black sm:h-16 mt-1 rounded-md max-w-4xl" /> */}

            <label
              htmlFor="event-name"
              className="font-cinzel font-bold sm:text-xl mt-4 sm:mt-6 text-black">
              Event Name
            </label>
            <input
              type="text"
              name="event-name"
              className="p-2 border border-black bg-white sm:h-16 mt-1 rounded-md max-w-4xl "/>
            <label
              htmlFor="event-url"
              className="font-cinzel font-bold sm:text-xl mt-4 sm:mt-6 text-black"
            >
              Event URL
            </label>
            <input
              type="url"
              name="event-url"
              className="p-2 border border-black bg-white sm:h-16 mt-1 rounded-md max-w-4xl"/>
            <label
              htmlFor="event-description"
              className="font-cinzel font-bold sm:text-xl mt-4 sm:mt-6 text-black">
              Event Description
            </label>
            <textarea
              type="text"
              name="event-description"
              rows={3}
              className="p-2 border border-black bg-white sm:h-16 mt-1 rounded-md max-w-4xl">
              {" "}
            </textarea>

            <label
              htmlFor="office-payment-instructions"
              className="font-cinzel font-bold sm:text-xl mt-4 sm:mt-6 text-black">
              Office Payement Instructions
            </label>
            <textarea
              type="text"
              name="office-payment-instructions"
              rows={3}
              className="p-2 border border-black bg-white sm:h-16 mt-1 rounded-md max-w-4xl">
              {" "}
            </textarea>

            <div className=" flex justify-center mt-4 sm:mt-6 md:mt-8 ">
              <button
                type="submit"
                style={{background:"linear-gradient(90deg, rgba(216, 7, 250, 0.76) 0%, #FF0CBB 94.49%)",}}
                className="w-fit px-8 py-3 rounded-2xl">Save Info</button>
            </div>
          </form>}

      {currstate==="Timing" && <form className="flex justify-center items-center sm:justify-normal sm:items-normal w-full flex-col sm:mt-24">
        <div className="flex sm:gap-10 flex-wrap justify-center gap-4">
          <div className="flex flex-col justify-center items-center">
            <label htmlFor="start-date" className="font-cinzel font-bold sm:text-xl mt-4 sm:mt-6 text-black">Start Date</label>
            <input type="text" name="start-date" className="p-2 border border-black bg-white sm:h-16 mt-1 rounded-lg max-w-4xl w-[200px] text-center"  />
          </div>
          <div className="flex flex-col justify-center items-center">
            <label htmlFor="start-time" className="font-cinzel font-bold sm:text-xl mt-4 sm:mt-6 text-black">Start Time</label>
            <input type="text" name="start-time" className="p-2 border border-black bg-white sm:h-16 mt-1 rounded-lg max-w-4xl w-[200px] text-center"  />
          </div>
        </div>

        <div className="flex sm:gap-10 flex-wrap justify-center gap-4">
          <div className="flex flex-col justify-center items-center">
            <label htmlFor="end-date" className="font-cinzel font-bold sm:text-xl mt-4 sm:mt-6 text-black">END Date</label>
            <input type="text" name="end-date" className="p-2 border border-black bg-white sm:h-16 mt-1 rounded-lg max-w-4xl w-[200px] text-center"  />
          </div>
          <div className="flex flex-col justify-center items-center">
            <label htmlFor="end-time" className="font-cinzel font-bold sm:text-xl mt-4 sm:mt-6 text-black">END Time</label>
            <input type="text" name="end-time" className="p-2 border border-black bg-white sm:h-16 mt-1 rounded-lg max-w-4xl w-[200px] text-center"  />
          </div>
        </div>

        <div className="check mt-4 flex gap-4 sm:mt-8">
          <input type="checkbox" name="repetative-schedule" className="bg-black p-2 w-[30px] overflow-hidden rounded-xl text-lg" />
          <label htmlFor="repetative-schedule" className="font-cinzel font-bold sm:text-xl text-center text-black">ADD REPETATIVE SCHEDULE</label>
        </div>
        <div className=" flex justify-center mt-4 sm:mt-6 md:mt-8 ">
              <button
                type="submit"
                style={{background:"linear-gradient(90deg, rgba(216, 7, 250, 0.76) 0%, #FF0CBB 94.49%)",}}
                className="w-fit px-8 py-3 rounded-2xl">Save Info</button>
        </div>

        </form>}
      
      {currstate==="Tickets" && <div className=" overflow-x-auto">
        <div className="border border-white overflow-x-auto m-4 p-3 md:m-4 lg:m-20 lg:p-12">
        <ul className="w-full px-4 sm:px-8 text-white font-cinzel font-bold flex justify-between gap-4 text-lg">
          <li className="text-black">Title</li>
          <li className="text-black">Price</li>
          <li className="text-black">Quantity</li>
          <li className="text-black">Action</li>
        </ul>
        <hr style={ colorbg} />

        <ul className="w-full border border-black mt-4 rounded-lg  h-[40px] md:h-[60px]">{'\u00A0'}{'\u00A0'}</ul>
        <ul className="w-full border border-black mt-4 rounded-lg  h-[40px] md:h-[60px]">{'\u00A0'}{'\u00A0'}</ul>
        <ul className="w-full border border-black mt-4 rounded-lg  h-[40px] md:h-[60px]">{'\u00A0'}{'\u00A0'}</ul>
        <ul className="w-full border border-black mt-4 rounded-lg  h-[40px] md:h-[60px]">{'\u00A0'}{'\u00A0'}</ul>
        <ul className="w-full border border-black mt-4 rounded-lg  h-[40px] md:h-[60px]">{'\u00A0'}{'\u00A0'}</ul>
        <ul className="w-full border border-black mt-4 rounded-lg  h-[40px] md:h-[60px]">{'\u00A0'}{'\u00A0'}</ul>
        <ul className="w-full border border-black mt-4 rounded-lg  h-[40px] md:h-[60px]">{'\u00A0'}{'\u00A0'}</ul>
        </div>
        <div className=" flex justify-center mt-4 sm:mt-6 md:mt-8 ">
              <button
                type="submit"
                style={{background:"linear-gradient(90deg, rgba(216, 7, 250, 0.76) 0%, #FF0CBB 94.49%)",}}
                className="w-fit px-8 py-3 rounded-2xl">Save Info</button>
        </div>
        </div>}
      
      {currstate==="Location" && <div className="">
        <form className="overflow-x-auto m-4 p-3 md:m-4 lg:m-20 lg:p-12 flex flex-col">
        <label htmlFor="Category" className="font-cinzel font-bold text-xl sm:text-xl text-black">Choose event Venue</label>
            <select htmlFor="Category" className="p-2 border border-black bg-white sm:h-16 mt-4 rounded-md max-w-4xl  text-black">              
              <option value="Option1">SEARCH VENUES</option>
              <option value="Option2">SEARCH VENUES2</option>
              <option value="Option3">SEARCH VENUES3</option>
            </select>

            <div className="text-black rounded-lg hover:cursor-pointer mt-5" >
              <div className="w-fit px-5 py-2 rounded-xl" style={{background: "rgba(10, 245, 20, 1)"}}>
                <img src={add_} alt="" className="w-[35px] inline mr-2"/>
                <div className="font-cinzel font-bold inline text-sm">ADD VENUE</div></div>
            </div>
        </form>
        <div className=" flex justify-center mt-4 sm:mt-6 md:mt-8 ">
              <button
                type="submit"
                style={{background:"linear-gradient(90deg, rgba(216, 7, 250, 0.76) 0%, #FF0CBB 94.49%)",}}
                className="w-fit px-8 py-3 rounded-2xl">Save Info</button>
        </div>
        </div>}
      
      {currstate==="Media" &&  <div className="flex justify-center">
      <div className="flex flex-col ml-4 md:ml-16 mt-4  md:mt-8 text-white w-full lg:w-[70%] lg:max-w-[1100px]">

        <div className="mt-3">
          <div className="font-bold font-cinzel text-xl text-black">
            THUMBNAIL IMAGE
          </div>
          <div className="flex justify-center items-center mt-4 border border-black bg-white h-[100px] flex-1 max-w-[600px] rounded-xl ml-4 md:ml-8">
            <img src={phto} alt="" />
          </div>
        </div>
        <div className="mt-8">
          <div className="font-bold font-cinzel text-xl text-black">
            POSTER IMAGE
          </div>
          <div className="flex justify-center items-center mt-4 border border-black bg-white h-[100px] flex-1 max-w-[600px] rounded-xl ml-4 md:ml-8">
            <img src={phto} alt="" />
          </div>
          <div className="ml-8 mt-3 md:ml-12 flex flex-wrap gap-4">
            <span className="opacity-60 font-semibold text-center text-black" >Image <br /> gallery</span>
            <input type="file" hidden id="file-upload" />
            <label htmlFor="file-upload" className=" px-6 py-4 font-cinzel font-bold border  bg-white rounded-xl text-black " style={linearGradient}>CHOOSE File</label>
            <span className="opacity-60 font-semibold text-center text-black" >upload images related  <br />to your event</span>
          </div>
        </div>

        <div className="mt-8">
        <div className="font-bold font-cinzel text-xl text-black">
            YOUTUBE URL
          </div>
              <input type="url" className="px-3 py-2 bg-black border border-black bg-white rounded-xl ml-4 md:ml-8" />
          
          <div className=" mt-3 font-semibold font-cinzel ml-6 md:ml-10 opacity-60 text-black">
            Enter URL only
          </div>
        </div>

        <div className=" flex justify-center mt-4 sm:mt-6 md:mt-8 ">
              <button
                type="submit"
                style={{background:"linear-gradient(90deg, rgba(216, 7, 250, 0.76) 0%, #FF0CBB 94.49%)",}}
                className="w-fit px-8 py-3 rounded-2xl">Save Info</button>
        </div>


        </div></div>}
      {currstate==="Publish" && <div className="flex justify-center">
      <div className="flex flex-col ml-4 md:ml-16 mt-4  md:mt-8 text-white w-full lg:w-[70%] lg:max-w-[1100px] gap-y-[30vh]">

        <div className="mt-3">
          <div className="font-bold font-cinzel text-xl text-black">
            WANT TO TAG EVENTS <span className="opacity-60">{'\u00A0'}(optional)</span>
          </div>
          <div className="flex justify-center items-center mt-4 border border-black h-[100px] flex-1 max-w-[600px] rounded-xl ">
            <select name="event-tag" id="event-tag" className="bg-black opacity-60 font-cinzel font-semibold focus:outline-none lg:w-[90%] max-w-[800px]">
            <option value="Tag 1" className="">SEARCH TAGS</option>
            <option value="Tag 1">TAG 1</option><option value="Tag 2">TAG 2</option><option value="Tag 3">TAG 3</option><option value="Tag 4">TAG 4</option><option value="Tag1"></option>
            </select>
          </div>
          <div className="text-black rounded-lg hover:cursor-pointer mt-5" >
              <div className="w-fit px-5 py-2 rounded-xl" style={{background: "rgba(10, 245, 20, 1)"}}>
                <img src={add_} alt="" className="w-[35px] inline mr-2"/>
                <div className="font-cinzel font-bold inline text-sm">ADD VENUE</div></div>
            </div>
        </div>
        

       
              <div>
        <div className=" flex justify-center mt-4 sm:mt-6 md:mt-8 ">
              <button type="submit" style={{background:"linear-gradient(90deg, rgba(216, 7, 250, 0.76) 0%, #FF0CBB 94.49%)",}}
                className="w-fit px-8 py-3 rounded-2xl font-cinzel font-bold">Save Info</button>
        </div>

        <div className=" flex justify-center mt-4 sm:mt-5 md:mt-5 ">
              <button type="submit" style={{background:"linear-gradient(90deg, rgba(216, 7, 250, 0.76) 0%, #FF0CBB 94.49%)",}}
                className="w-fit px-8 py-3 rounded-2xl font-cinzel font-bold">Publish</button>
        </div>
        </div>

        </div></div>}
      {currstate==="SEO" && <div className="flex w-full justify-center">
      <form className="flex flex-col border-1 border-red-200 p-4 max-w-4xl w-[90%]">
            
            {/* <input type="text" name="Category" className="p-2 border border-white bg-black sm:h-16 mt-1 rounded-md max-w-4xl" /> */}

            <label
              htmlFor="event-name"
              className="font-cinzel font-bold sm:text-xl mt-4 sm:mt-6 text-black">
              META TITLE
            </label>
            <input type="text" name="event-name" className="p-2 border border-black bg-white sm:h-16 md:h-18 lg:h-20 mt-1 rounded-md max-w-4xl"/>

            <label
              htmlFor="event-name"
              className="font-cinzel font-bold sm:text-xl mt-4 sm:mt-6 text-black">
              META TAGS
            </label>
            <input type="text" name="event-name" className="p-2 border border-black bg-white sm:h-16 md:h-18 lg:h-20 mt-1 rounded-md max-w-4xl"/>

            <label
              htmlFor="event-name"
              className="font-cinzel font-bold sm:text-xl mt-4 sm:mt-6 text-black">
              META DESCRIPTION
            </label>
            <input type="text" name="event-name" className="p-2 border border-black bg-white sm:h-16 md:h-18 lg:h-20 mt-1 rounded-md max-w-4xl"/>


            <div className=" flex justify-center mt-4 sm:mt-6 md:mt-8 ">
              <button
                type="submit"
                style={{background:"linear-gradient(90deg, rgba(216, 7, 250, 0.76) 0%, #FF0CBB 94.49%)",}}
                className="w-fit px-8 py-3 rounded-2xl">Save Info</button>
            </div>
          </form></div>}
        </div>
      </div>
    </div>
  );
}

export default Detailssection;
