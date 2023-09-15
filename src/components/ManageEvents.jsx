import React from 'react'
import Topbar from "./Details/Topbar";
import '../CSS/ManageEvents.css';


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



<p><pre className='eve'>EVENT                                    START DATE            END DATE/ TIME           REPETITIVE             PAYMENT FREQUENCY               PUBLISHED                   STATUS            ACTION           ATTENDEES CSV</pre></p>

<div className='eve-div'>
<p><pre className='eve1'>DAILY MEDITATION CLASSES                             1 JUNE 23                               31 JUNE 23 / 5:00AM                                  YES                                                   ADVANCE                                                           YES                                          ENABLED </pre></p>
<div className='btn1'>
<img  src={require('../assets/Events/edit.png')} alt="events" className='edit-img'/>
    <p className='btn-p'>EDIT</p>
</div>
<div className='exp'>
    <p className='exp-p'>EXPORT</p>
</div>
</div>

<div className='eve-div'>
<p><pre className='eve1'>PROFESSIONAL PIANO CLASSES                        1 JUNE 23                               31 JUNE 23 / 5:00AM                                   YES                                           MONTHLY/WEEKLY                                               YES                                        ENABLED </pre></p>
<div className='btn1'>
<img  src={require('../assets/Events/edit.png')} alt="events" className='edit-img'/>
    <p className='btn-p'>EDIT</p>
</div>
<div className='exp'>
    <p className='exp-p'>EXPORT</p>
</div>
</div>

<div className='eve-div'>
<p><pre className='eve1'>ITALIAN COOKING CLASSES                             1 JUNE 23                               31 JUNE 23 / 5:00AM                                  YES                                                   ADVANCE                                                           YES                                          ENABLED </pre></p>
<div className='btn1'>
<img  src={require('../assets/Events/edit.png')} alt="events" className='edit-img'/>
    <p className='btn-p'>EDIT</p>
</div>
<div className='exp'>
    <p className='exp-p'>EXPORT</p>
</div>
</div>

<div className='eve-div'>
<p><pre className='eve1'>SUNDAY SWIMMING CLASSES                             1 JUNE 23                               31 JUNE 23 / 5:00AM                                  YES                                                   ADVANCE                                                           YES                                          ENABLED </pre></p>
<div className='btn1'>
<img  src={require('../assets/Events/edit.png')} alt="events" className='edit-img'/>
    <p className='btn-p'>EDIT</p>
</div>
<div className='exp'>
    <p className='exp-p'>EXPORT</p>
</div>
</div>



    </div>
   
  )
}

export default Ticket

