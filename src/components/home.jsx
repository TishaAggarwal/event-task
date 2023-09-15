import React from "react";
import Header from "./Header";
import Footer from "./Footer"
import "../CSS/home.css";
import digitalhuman from "../assets/Home/Digitalhuman.png";
import norv from "../assets/Home/NORV.png";
import yellowbepink from "../assets/Home/Yellowbepink.png";
import companybecom from "../assets/Home/Compnaybecom.png";
import winter from "../assets/Home/winterwinenights.png";
import cooking from "../assets/Home/italiancookingclasses.png";
import yoga from "../assets/Home/yogaandhealth.png";
import music from "../assets/Home/musicandconcert.png";
import nextbooking from "../assets/Home/nextbookingimge.png";
import meditation from "../assets/Home/meditation.png";
import marketing from "../assets/Home/marketing.png";
import cookingclass from "../assets/Home/cookingclass.png";
import mountaineer from "../assets/Home/mountaineering.png";
import london from "../assets/Home/london.png";
import arrowdown from "../assets/Home/arrowdown2.png";
import person1 from "../assets/Home/person1.png";
import person2 from "../assets/Home/person2.png";
import person3 from "../assets/Home/person3.png";
import profile from "../assets/Home/profile.png";
import schedule from "../assets/Home/schedule.png";
import events from "../assets/Home/events.png";
import speaker from "../assets/Home/speaker.png";
import attendevents from "../assets/Home/attendevents.png";
import createevents from "../assets/Home/createevents.png";
import selling from "../assets/Home/startselling.png";
import publish from "../assets/Home/publishevent.png";
import favevent from "../assets/Home/favoriteevents.png";
import ticket from "../assets/Home/eventtickets.png";
import centerevent from "../assets/Home/centerevent.png"


function home({
  admin_dropdown,
  handleAdmin_dropdown,
  handlesmall_header_open,
  small_header_open,
}) {
  return (
    <div className="bg-transparent ">
      <div className="home-top hidden md:block">
        <Header
          admin_dropdown={admin_dropdown}
          handleAdmin_dropdown={handleAdmin_dropdown}
          handlesmall_header_open={handlesmall_header_open}
          small_header_open={small_header_open}
        />
        <div className="flex justify-start flex-col mt-12 ">
          <div className="flex  flex-col w-1/2 justify-center items-center mt-14">
            <div className="w-1/2 text-white text-[40px] font-bold font-cinzel text-center">
              Embarce the Spectacular Unlaeash your Eventful Journey
            </div>
            <button
              className="text-white font-cinzel font-bold text-[28px] px-12 py-4 mt-8 rounded-2xl"
              style={{
                background:
                  "linear-gradient(90deg, rgba(216, 7, 250, 0.76) 0%, #FF0CBB 94.49%)",
              }}
            >
              Explore
            </button>
          </div>
        </div>
      </div>

      <div className="home-top_small block md:hidden">
        <Header
          admin_dropdown={admin_dropdown}
          handleAdmin_dropdown={handleAdmin_dropdown}
          handlesmall_header_open={handlesmall_header_open}
          small_header_open={small_header_open}
        />
        <div className="flex justify-start flex-col mt-12 ">
          <div className="flex  flex-col justify-center items-center mt-14">
            <div
              className={
                small_header_open
                  ? "text-white text-[40px] font-bold font-cinzel text-center opacity-25"
                  : "text-white text-[40px] font-bold font-cinzel text-center opacity-100"
              }
            >
              Embarce the Spectacular Unlaeash your Eventful Journey
            </div>
            <button
              className="text-white font-cinzel font-bold text-[28px] px-12 py-4 mt-8 rounded-2xl"
              style={{
                background:
                  "linear-gradient(90deg, rgba(216, 7, 250, 0.76) 0%, #FF0CBB 94.49%)",
              }}
            >
              Explore
            </button>
          </div>
        </div>
      </div>

      <div className="bg-black flex flex-col items-center justify-center font-cinzel pb-6">
        <div className="text-white font-bold mt-8 md:mt-16 text-[32px] text-center">
          WELCOME TO KARTEXA EVENTS
        </div>
        <div className="text-white font-semibold mt-8 text-center mb-5">
          OUR TOP SPONSORS
        </div>
        <div className="sponsors flex flex-row flex-wrap justify-evenly items-center gap-5 md:gap-10 mb-10">
          <img src={digitalhuman} alt="sponsor" className="inline w-[250px]" />
          <img src={yellowbepink} alt="sponsor" className="inline w-[250px]" />
          <img src={companybecom} alt="sponsor" className="inline w-[250px]" />
          <img src={norv} alt="sponsor" className="inline w-[200px]" />
        </div>

        <div className="text-white font-bold mt-16 text-[32px] text-center mb-8">
          FEATURED EVENTS OF THE WEEK
        </div>
        <div className="flex flex-row flex-wrap justify-center gap-14">
          <div className="flex flex-col gap-10 mb-10">
            <div className="relative">
              <img
                src={winter}
                alt=""
                className="w-[260px] sm:w-[350px] h-[300px] inline"
              />
              <div className="text-white text-center font-semibold text-[24px] md:text-[28px] absolute w-[100%] h-[100%] top-0 flex items-center justify-center whitespace-nowrap">
                WINTER
                <br />
                WINE NIGHTS
              </div>
              <div
                className="absolute text-white text-center font-normal font-sans normal-case bottom-0 py-4 w-[100%]"
                style={{ background: "rgba(0, 0, 0, 0.42)" }}
              >
                Embrace the Chill, Sip & Drink{" "}
              </div>
            </div>

            <div className="relative">
              <img
                src={yoga}
                alt=""
                className="w-[260px] sm:w-[350px] h-[150px] inline"
              />
              <div className="text-white text-center font-semibold text-[24px] md:text-[28px] absolute w-[100%] h-[100%] top-0 flex items-center justify-center whitespace-nowrap">
                Yoga & HEALTH
              </div>
              <div
                className="absolute text-white text-center font-normal font-sans normal-case bottom-0 py-4 w-[100%]"
                style={{ background: "rgba(0, 0, 0, 0.42)" }}
              ></div>
            </div>
          </div>

          <div className="flex flex-col gap-10 mb-10">
            <div className="relative">
              <img
                src={music}
                alt=""
                className="w-[260px] sm:w-[350px] h-[150px] inline"
              />
              <div className="text-white text-center font-semibold text-[24px] md:text-[28px] absolute w-[100%] h-[100%] top-0 flex items-center justify-center whitespace-nowrap">
                MUSIC & CONCERT
              </div>
              <div
                className="absolute text-white text-center font-normal font-sans normal-case bottom-0 w-[100%]  text-[16px]"
                style={{ background: "rgba(0, 0, 0, 0.42)" }}
              >
                Unleash the sound, ignite the night
              </div>
            </div>

            <div className="relative">
              <img
                src={cooking}
                alt=""
                className="w-[260px] sm:w-[350px] h-[300px] inline"
              />
              <div className="text-white text-center font-semibold text-[24px] md:text-[28px] absolute w-[100%] h-[100%] top-0 flex items-center justify-center whitespace-nowrap">
                {" "}
              </div>
              <div
                className="absolute text-white text-center font-sans normal-case bottom-0 py-4 w-[100%] text-[28px] font-semibold"
                style={{ background: "rgba(0, 0, 0, 0.42)" }}
              >
                ITALIAN COOKING CLASSES
              </div>
            </div>
          </div>
        </div>

        <div
          className=" relative flex flex-col mt-16 mb-8 justify-center items-center border px-8 py-4 sm:px-16 sm:py-8  rounded-lg"
          style={{ "border-color": "rgba(160, 97, 106, 1)" }}
        >
          <div className="text-white font-bold mt-2 text-[32px] text-center mb-6 md:mb-10">
            OUR NEXT EVENT <br /> BOOKING WILL START IN:{" "}
          </div>
          <div className="flex flex-row justify-center sm:jusftify-evenly items-center flex-wrap gap-6 sm:gap-10 md:gap-14 mb-4">
            <div
              className="w-[100px] sm:w-[150px] h-[80px] sm:h-[100px] font-bold text-center flex items-center justify-center text-[20px] md:text-[28px] rounded-xl"
              style={{
                background:
                  "linear-gradient(90deg, rgba(216, 7, 250, 0.76) 0%, #FF0CBB 94.49%)",
              }}
            >
              <span className="text-center">
                {" "}
                14
                <br />
                Days{" "}
              </span>
            </div>

            <div
              className="w-[100px] sm:w-[150px] h-[80px] sm:h-[100px] font-bold text-center flex items-center justify-center  text-[20px] md:text-[28px] rounded-xl"
              style={{
                background:
                  "linear-gradient(90deg, rgba(216, 7, 250, 0.76) 0%, #FF0CBB 94.49%)",
              }}
            >
              <span className="text-center">
                {" "}
                2<br />
                Hours
              </span>
            </div>
            <div
              className="w-[100px] sm:w-[150px] h-[80px] sm:h-[100px] font-bold text-center  flex items-center justify-center text-[20px] md:text-[28px] rounded-xl"
              style={{
                background:
                  "linear-gradient(90deg, rgba(216, 7, 250, 0.76) 0%, #FF0CBB 94.49%)",
              }}
            >
              <span className="text-center">
                {" "}
                36
                <br />
                Minutes{" "}
              </span>
            </div>
          </div>

          <div>
            <img
              src={nextbooking}
              alt="next-booking"
              className="absolute w-[80px] sm:w-[120px] -top-10 left-2"
            />
            <span
              className="hidden md:block  absolute font-bold top-[1.5rem] left-[5rem]"
              style={{
                background:
                  "linear-gradient(180deg, #FF10F5 -5.46%, #FAD50F 228.73%)",
                "-webkit-background-clip": "text",
                "-webkit-text-fill-color": "transparent",
              }}
            >
              GRAB
              <br />
              YOUR
              <br />
              SEAT
              <br />
              NOW
            </span>
          </div>
        </div>

        <div className="text-white font-bold mt-16 text-[32px] text-center mb-8">
          OUR EVENT CATEGORIES
        </div>
        <div className="flex justify-center items-center mb-4 gap-6 flex-wrap">
          <div
            className="relative flex h-[300px] flex-col bg-white w-[250px] sm:w-[300px]"
            style={{
              "border-bottom-left-radius": "10px",
              "border-bottom-right-radius": "10px",
            }}
          >
            <img src={meditation} className="h-[150px] " alt="" />
            <div className="flex-1 py-4 flex flex-col justify-between">
              <span className="text-center font-bold">Daily Meditation</span>
              <span className="text-center " style={{ "font-size": "10px" }}>
                Calmness & Relaxation
              </span>
            </div>
            <div
              className="text-center font-bold text-[20px] py-2"
              style={{
                background:
                  "radial-gradient(103.19% 3149.47% at -3.19% 100%, rgba(251, 64, 255, 0.39) 0%, rgba(255, 14, 144, 0.39) 95.31%)",
              }}
            >
              Yoga & Health
            </div>
          </div>

          <div
            className="relative flex h-[300px] flex-col bg-white w-[250px] sm:w-[300px]"
            style={{
              "border-bottom-left-radius": "10px",
              "border-bottom-right-radius": "10px",
            }}
          >
            <img src={marketing} className="h-[150px] " alt="" />
            <div className="flex-1 py-4 flex flex-col justify-between">
              <span className="text-center font-bold">
                Global Marketing Conference
              </span>
              <span className="text-center " style={{ "font-size": "10px" }}>
                Unleashing Boundless Horizons
              </span>
            </div>
            <div
              className="text-center font-bold text-[20px] py-2"
              style={{
                background:
                  "radial-gradient(103.19% 3149.47% at -3.19% 100%, rgba(251, 64, 255, 0.39) 0%, rgba(255, 14, 144, 0.39) 95.31%)",
              }}
            >
              Business & Seminars
            </div>
          </div>

          <div
            className="relative flex h-[300px] flex-col bg-white w-[250px] sm:w-[300px]"
            style={{
              "border-bottom-left-radius": "10px",
              "border-bottom-right-radius": "10px",
            }}
          >
            <img src={cookingclass} className="h-[150px] " alt="" />
            <div className="flex-1 py-4 flex flex-col justify-between">
              <span className="text-center font-bold">
                Italian Cooking Classes
              </span>
              <span className="text-center " style={{ "font-size": "10px" }}>
                Unlocks the flavor of Italy
              </span>
            </div>
            <div
              className="text-center font-bold text-[20px] py-2"
              style={{
                background:
                  "radial-gradient(103.19% 3149.47% at -3.19% 100%, rgba(251, 64, 255, 0.39) 0%, rgba(255, 14, 144, 0.39) 95.31%)",
              }}
            >
              Food & Drink
            </div>
          </div>

          <div
            className="relative flex h-[300px] flex-col bg-white w-[250px] sm:w-[300px]"
            style={{
              "border-bottom-left-radius": "10px",
              "border-bottom-right-radius": "10px",
            }}
          >
            <img src={mountaineer} className="h-[150px] " alt="" />
            <div className="flex-1 py-4 flex flex-col justify-between">
              <span className="text-center font-bold">
                Mountaineering Classes
              </span>
              <span className="text-center " style={{ "font-size": "10px" }}>
                Embark on Epic Adventures
              </span>
            </div>
            <div
              className="text-center font-bold text-[20px] py-2"
              style={{
                background:
                  "radial-gradient(103.19% 3149.47% at -3.19% 100%, rgba(251, 64, 255, 0.39) 0%, rgba(255, 14, 144, 0.39) 95.31%)",
              }}
            >
              Travel & Trekking
            </div>
          </div>

          <div
            className="relative flex h-[300px] flex-col bg-white w-[250px] sm:w-[300px]"
            style={{
              "border-bottom-left-radius": "10px",
              "border-bottom-right-radius": "10px",
            }}
          >
            <img src={meditation} className="h-[150px] " alt="" />
            <div className="flex-1 py-4 flex flex-col justify-between">
              <span className="text-center font-bold">Daily Meditation</span>
              <span className="text-center " style={{ "font-size": "10px" }}>
                Calmness & Relaxation
              </span>
            </div>
            <div
              className="text-center font-bold text-[20px] py-2"
              style={{
                background:
                  "radial-gradient(103.19% 3149.47% at -3.19% 100%, rgba(251, 64, 255, 0.39) 0%, rgba(255, 14, 144, 0.39) 95.31%)",
              }}
            >
              Yoga & Health
            </div>
          </div>

          <div
            className="relative flex h-[300px] flex-col bg-white w-[250px] sm:w-[300px]"
            style={{
              "border-bottom-left-radius": "10px",
              "border-bottom-right-radius": "10px",
            }}
          >
            <img src={marketing} className="h-[150px] " alt="" />
            <div className="flex-1 py-4 flex flex-col justify-between">
              <span className="text-center font-bold">
                Global Marketing Conference
              </span>
              <span className="text-center " style={{ "font-size": "10px" }}>
                Unleashing Boundless Horizons
              </span>
            </div>
            <div
              className="text-center font-bold text-[20px] py-2"
              style={{
                background:
                  "radial-gradient(103.19% 3149.47% at -3.19% 100%, rgba(251, 64, 255, 0.39) 0%, rgba(255, 14, 144, 0.39) 95.31%)",
              }}
            >
              Business & Seminars
            </div>
          </div>

          <div
            className="relative flex h-[300px] flex-col bg-white w-[250px] sm:w-[300px]"
            style={{
              "border-bottom-left-radius": "10px",
              "border-bottom-right-radius": "10px",
            }}
          >
            <img src={cookingclass} className="h-[150px] " alt="" />
            <div className="flex-1 py-4 flex flex-col justify-between">
              <span className="text-center font-bold">
                Italian Cooking Classes
              </span>
              <span className="text-center " style={{ "font-size": "10px" }}>
                Unlocks the flavor of Italy
              </span>
            </div>
            <div
              className="text-center font-bold text-[20px] py-2"
              style={{
                background:
                  "radial-gradient(103.19% 3149.47% at -3.19% 100%, rgba(251, 64, 255, 0.39) 0%, rgba(255, 14, 144, 0.39) 95.31%)",
              }}
            >
              Food & Drink
            </div>
          </div>

          <div
            className="relative flex h-[300px] flex-col bg-white w-[250px] sm:w-[300px]"
            style={{
              "border-bottom-left-radius": "10px",
              "border-bottom-right-radius": "10px",
            }}
          >
            <img src={mountaineer} className="h-[150px] " alt="" />
            <div className="flex-1 py-4 flex flex-col justify-between">
              <span className="text-center font-bold">
                Mountaineering Classes
              </span>
              <span className="text-center " style={{ "font-size": "10px" }}>
                Embark on Epic Adventures
              </span>
            </div>
            <div
              className="text-center font-bold text-[20px] py-2"
              style={{
                background:
                  "radial-gradient(103.19% 3149.47% at -3.19% 100%, rgba(251, 64, 255, 0.39) 0%, rgba(255, 14, 144, 0.39) 95.31%)",
              }}
            >
              Travel & Trekking
            </div>
          </div>
        </div>

        <div className="text-white font-bold mt-16 text-[32px] text-center mb-8">
          Explore Best Cities
        </div>

        <div className="relative px-4 sm:px-8 mb-4 flex justify-center items-center flex-col">
          <img src={london} alt="" />
          <img src={arrowdown} alt="" className="w-8" />
        </div>

        <div className="text-white font-bold mt-16 text-[32px] text-center mb-8">
          Meet our top organizers
        </div>
        <div className="flex flex-row gap-10 items-center justify-center flex-wrap mb-12">
          <div className="relative flex justify-center items-center">
            <img
              src={person1}
              alt="person-1"
              className=" w-[250px] sm:w-[300px] h-[300px]"
            />
            <div className="absolute bg-white bottom-0">
              <div className="px-4 py-2 text-center font-bold">Chef andrew</div>
              <div className="px-4 py-2 text-center font-medium">
                Head Chef at GA Bangkok
              </div>
            </div>
          </div>
          <div className="relative flex justify-center items-center">
            <img
              src={person2}
              alt="person-2"
              className=" w-[250px] sm:w-[300px] h-[300px]"
            />
            <div className="absolute bg-white bottom-0">
              <div className="px-4 py-2 text-center font-bold">Ajay Gupta</div>
              <div className="px-4 py-2 text-center font-medium">
                Muisc Producer & DJ
              </div>
            </div>
          </div>
          <div className="relative flex justify-center items-center">
            <img
              src={person3}
              alt="person-3"
              className=" w-[250px] sm:w-[300px] h-[300px]"
            />
            <div className="absolute bg-white bottom-0">
              <div className="px-4 py-2 text-center font-bold">Mary Ray</div>
              <div className="px-4 py-2 text-center font-medium">
                Yoga Instructor <br /> at Yoga Works
              </div>
            </div>
          </div>
          <div className="relative flex justify-center items-center">
            <img
              src={person1}
              alt="person-4"
              className=" w-[250px] sm:w-[300px] h-[300px]"
            />
            <div className="absolute bg-white bottom-0">
              <div className="px-4 py-2 text-center font-bold">Jenny Mark</div>
              <div className="px-4 py-2 text-center font-medium">
                Perk & Love CEO
              </div>
            </div>
          </div>
        </div>

        <div className="text-white font-bold mt-16 text-[32px] text-center mb-8">
          What you will get after being a part of our community
        </div>
        <div className="flex justify-center items-center">
          <div className="flex flex-wrap justify-evenly items-center gap-10 px-10 py-8 sm:w-[97vw]" 
          style={{background:"linear-gradient(90deg, rgba(216, 7, 250, 0.76) 0%, #FF0CBB 94.49%)",}}>
            <div className="flex flex-col justify-center items-center">
              <img src={speaker} alt="profile" className="w-[25px] h-[25px]" />
              <div className="font-bold">100+</div>
              <div className="font-extrabold">Organizers & Speaker</div>
            </div>

            <div className="flex flex-col justify-center items-center">
              <img src={events} alt="profile" className="w-[25px] h-[25px]" />
              <div className="font-bold">300+</div>
              <div className="font-extrabold">Ideal Events</div>
            </div>

            <div className="flex flex-col justify-center items-center">
              <img src={schedule} alt="profile" className="w-[25px] h-[25px]" />
              <div className="font-bold">30+</div>
              <div className="font-extrabold">Ideal Events</div>
            </div>

            <div className="flex flex-col justify-center items-center">
              <img src={profile} alt="profile" className="w-[25px] h-[25px]" />
              <div className="font-bold">3000+</div>
              <div className="font-extrabold">Ideal Events</div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap mb-12 flex-col lg:flex-row ">
              <div className="flex flex-col">
              <div className="text-white font-bold mt-16 text-[32px] text-center mb-8">
                FOR ORGANIZERS</div>
                <div className="flex flex-row">
                  <div className="flex flex-col">
                    <div className="relative">
                    <img src={createevents} alt="create events" width={"150px"} className="mb-2" />
                    <div className="h-[75px] w-full absolute bottom-0 flex items-center justify-center text-white" style={{ background: "rgba(0, 0, 0, 0.42)" }}>Create Events</div></div>
                    <div className="relative">
                    <img src={selling} alt="create events" width={"150px"} />
                    <div className="h-[75px] w-full absolute bottom-0 flex items-center justify-center text-white" style={{ background: "rgba(0, 0, 0, 0.42)" }}>Start Selling</div></div>
                  </div>
                  <div className="flex flex-col">
                    <div className="relative">
                    <img src={publish} alt="create events" width={"150px"} className="mt-6" />
                    <div className="h-[75px] w-full absolute bottom-0 flex items-center justify-center text-white" style={{ background: "rgba(0, 0, 0, 0.42)" }}>Publish Events</div></div>
                  </div>
                </div>
                  
              </div>

              <div className="self-end justify-self-center">
                  <img src={centerevent} alt="center-img" className="w-[250px]" />
              </div>

              <div className="flex flex-col">
              <div className="text-white font-bold mt-16 text-[32px] text-center mb-8">
                FOR CUSTOMERS</div>
                <div className="flex flex-row">
                  <div className="flex flex-col">
                    <div className="relative">
                    <img src={favevent} alt="create events" width={"150px"} className="mb-2" />
                    <div className="h-[75px] w-full absolute bottom-0 flex items-center justify-center text-white text-sm text-center" style={{ background: "rgba(0, 0, 0, 0.42)" }}>CHOOSE YOUR FAVOURITE EVENTS</div></div>

                    <div className="relative">
                    <img src={attendevents} alt="create events" width={"150px"} />
                    <div className="h-[75px] w-full absolute bottom-0 flex items-center justify-center text-white text-sm text-center" style={{ background: "rgba(0, 0, 0, 0.42)" }}>ATTEND EVENTS</div></div>
                    
                  </div>
                  <div className="flex flex-col">
                  <div className="relative">
                  <img src={ticket} alt="create events" width={"150px"} className="mt-6" />
                  <div className="h-[75px] w-full absolute bottom-0 flex items-center justify-center text-white text-sm text-center" style={{ background: "rgba(0, 0, 0, 0.42)" }}>GET TICKETS FOR YOUR EVENTS</div></div>
                  </div>
                </div>
                  
              </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default home;
