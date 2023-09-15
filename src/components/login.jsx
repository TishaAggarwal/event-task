import React from "react";
import topimg from "../assets/Login/topimg.png";
import bottomimg from "../assets/Login/bottomimg.png";
import ellipse from "../assets/Login/ellispe99.png";
function login() {
  const input_brdr = {
    height: "30px",
    border: "double 2px transparent ",
    "border-radius": "20px",
    "background-image":
      "linear-gradient(white,white), linear-gradient(90deg,rgba(216, 7, 250, 0.76) 0%, #FF0CBB 94.49%)",
    "background-origin": "border-box",
    "background-clip": "content-box, border-box",
  };

  const btn_color = {
    "background": "linear-gradient(90deg, rgba(216, 7, 250, 0.76) 0%, #FF0CBB 94.49%)",
  }
  return (
    <div className="bg-black  flex justify-center items-center font-cinzel font-bold text-white min-h-screen">
      <form className="relative bg-white min-w-[275px] max-w-[450px] w-2/3 flex flex-col justify-center items-center text-black rounded-xl z-10">
        <div className="mt-3">FILL YOUR DETAILS</div>
        <div className="w-4/5 mt-5 mb-2">
          <label htmlFor="email" className="">
            Email
          </label>
          <input
            type="email"
            htmlFor="email"
            className="block w-full mt-2"
            style={input_brdr}
          />
        </div>

        <div className="mt-3 w-4/5 mb-2">
          {" "}
          <label htmlFor="password" className="mt-2">
            Password
          </label>
          <input
            type="password"
            htmlFor="password"
            className="block w-full mt-2"
            style={input_brdr}
          />
        </div>
        <button type="submit" className="rounded-2xl px-8 py-2 mt-6 mb-12 text-white" style={btn_color} >Log in</button>
      <img src={topimg} alt="top-img" className="absolute w-[150px] mt-[-26.8rem] sm:w-[180px] sm:mt-[-28rem]"   />
      <img src={bottomimg} alt="" width={"190px"} className="absolute hidden md:block" style={{"margin-bottom":"-18rem","margin-left":"31rem"}} />
      
      </form>
      <img src={ellipse} className="absolute hidden lg:inline" style={{"z-index":"2", "width":"550px","margin-right":"29rem"}} alt="ellipse" />
      <img src={ellipse} className="absolute hidden lg:inline" style={{"z-index":"2", "width":"550px", "margin-top":"2rem", "margin-right":"26rem"}} alt="ellipse" />
      <img src={ellipse} className="absolute hidden lg:inline" style={{"z-index":"2", "width":"550px", "margin-top":"4rem", "margin-right":"23rem"}} alt="ellipse" />
      <img src={ellipse} className="absolute hidden lg:inline" style={{"z-index":"2", "width":"550px", "margin-top":"4rem", "margin-left":"21rem"}} alt="ellipse" />
      <img src={ellipse} className="absolute hidden lg:inline" style={{"z-index":"2", "width":"550px", "margin-top":"2rem", "margin-left":"24rem"}} alt="ellipse" />
      <img src={ellipse} className="absolute hidden lg:inline" style={{"z-index":"2", "width":"550px","margin-left":"27rem"}} alt="ellipse" />
    </div>
  );
}

export default login;
