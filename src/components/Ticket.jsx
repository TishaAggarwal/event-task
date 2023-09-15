import React from 'react'
import Topbar from "./Details/Topbar";
import '../CSS/Ticket.css';


function Ticket({
    admin_dropdown,
    handleAdmin_dropdown,
    handlesmall_header_open,
    small_header_open,
  }) {
  return (
    <div className="bg-black min-h-screen" >
    <Topbar
      admin_dropdown={admin_dropdown}
      handleAdmin_dropdown={handleAdmin_dropdown}
      handlesmall_header_open={handlesmall_header_open}
      small_header_open={small_header_open}
    />

<img  src={require('../assets/Venue/ticket-hold.png')} alt="ticket-holder" className='holder'/>

<img  src={require('../assets/Venue/white-bg.png')} alt="ticket-holder" className='white'/>

<img  src={require('../assets/Venue/Concert-Ticket.png')} alt="ticket" className='ticket'/>

<div className='ticket-btn'>
    <p className='ticket-p'>DOWNLOAD TICKET</p>
</div>


    </div>
   
  )
}

export default Ticket