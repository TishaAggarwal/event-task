import React from 'react'
import Topbar from "./Details/Topbar";
import '../CSS/ManageVenues.css';


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



<p><pre className='del'>                            TITLE                                                      VENUE TYPE                                      STATE                                   CITY                                                           ACTION </pre></p>

<div className='del-div'>
<p><pre className='del-1'>AUSTRALIA GRAND HAWK VIEW                                                          CINEMA                                                                    NSW                                                CAMPERDOWN </pre></p>
<div className='btn-del'>
<img  src={require('../assets/Events/edit.png')} alt="events" className='edit-img'/>
    <p className='btn-p'>EDIT</p>
</div>
<div className='del-exp'>
    <p className='del-p'>DELETE</p>
    <img  src={require('../assets/Events/trash.png')} alt="venues" className='trash-img'/>
</div>
</div>

<div className='del-div'>
<p><pre className='del-1'>METRO GLAM MAX                                                                                   STADIUM                                                                   NSW                                                    NEWYORK </pre></p>
<div className='btn-del'>
<img  src={require('../assets/Events/edit.png')} alt="events" className='edit-img'/>
    <p className='btn-p'>EDIT</p>
</div>
<div className='del-exp'>
    <p className='del-p'>DELETE</p>
    <img  src={require('../assets/Events/trash.png')} alt="venues" className='trash-img'/>
</div>
</div>



    </div>
   
  )
}

export default Ticket

