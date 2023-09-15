import React from 'react'
import logo from "../assets/Home/Kartexa-logo.png";
import facebook from "../assets/Footer/facebook.png"
import twitter from "../assets/Footer/icontwitter.png"
import whatsapp from "../assets/Footer/whatsapp.png"
import insta from "../assets/Footer/instagram.png"

function Footer() {
  return (
    <div className='flex bg-black flex-col justify-center items-center font-cinzel pb-10 pt-4'>
        <img src={logo} alt="" className="sm:h-[50px]" />

        <div className='flex flex-col lg:flex-row gap-14 mt-8'>
            <ul className='flex flex-col justify-center items-center gap-3'>
                <li className='hover:cursor-pointer text-white font-semibold text-base'>ABOUT US</li>
                <li className='hover:cursor-pointer text-white font-semibold text-base'>BLOGS</li>
                <li className='hover:cursor-pointer text-white font-semibold text-base'>TERMS & CONDITIONS</li>
                <li className='hover:cursor-pointer text-white font-semibold text-base'>PRIVACY POLICY</li>
            </ul> 

            <div className='flex flex-col '>
                <div style={{background:
                  "linear-gradient(180deg, #FF10F5 -5.46%, #FAD50F 228.73%)",
                "-webkit-background-clip": "text",
                "-webkit-text-fill-color": "transparent",}} className="font-cinzel text-2xl font-bold text-center">UNLOCK MEMORABLE EXPERIENCES</div>

                <div className='mt-8 text-white font-semibold text-center text-sm'>GET OUR NEWSLETTER</div>
                <form >
                    <div className='flex justify-center mt-2'>
                        <div className='w-fit rounded-xl py-1 px-2'  style={{"border":"1px solid #D50AF5"}}>
                        <input type="email" placeholder='YOUR EMAIL ID PLEASE' className='bg-transparent px-2 py-2 text-sm outline-none' />
                        <button className='px-4 py-2 rounded-3xl' type="submit" style={{background:"linear-gradient(90deg, rgba(216, 7, 250, 0.76) 0%, #FF0CBB 94.49%)",}}>
                            Submit</button></div>
                    </div>
                </form>

                <div className='mt-10 flex flex-col items-center'>
                    <div className='flex flex-row gap-5'>
                        <img src={facebook} alt="social media" className='w-[40px] h-[40px]' />
                        <img src={insta} alt="social media" className='w-[40px] h-[40px]' />
                        <img src={whatsapp} alt="social media" className='w-[40px] h-[40px]' />
                        <img src={twitter} alt="social media" className='w-[40px] h-[40px]' />
                        
                    </div>
                    <div className='text-center text-white mt-5 font-semibold text-sm'>FOLLOW US</div>
                </div>
            </div>

            

            <div className='text-white flex flex-col justify-center items-center'>
                    <div>
                        <div className='text-white font-semibold  text-center'>CONTACT US</div>
                        <div className='mt-2'>+06736238738</div>
                    </div>

                    <div className='mt-6'>
                        <div className='text-white font-semibold text-center'>EMAIL ID</div>
                        <div className='mt-2'>kartexaevents45@gmail,com</div>
                    </div>

                    <div className='mt-6'>
                        <div className='text-white font-semibold  text-center'>Location</div>
                        <div className='mt-2'>ADvjhskjsakjalksl</div>
                    </div>
                </div>

        </div>
    </div>
  )
}

export default Footer