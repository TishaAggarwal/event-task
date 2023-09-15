import React from 'react'
import Topbar from "./Details/Topbar";
import '../CSS/ManageTags.css';


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



<p><pre className='tag'>                          NAME                                                    DESIGNATION                                      ACTIONS</pre></p>

<div className='tag-div'>
<p><pre className='tag-1'>            CHEF LARA JONES                                                                                CHIEF GUEST</pre></p>
<div className='btn-tag'>
<img  src={require('../assets/Events/edit.png')} alt="events" className='edit-img'/>
    <p className='btn-p'>EDIT</p>
</div>
<div className='tag-exp'>
    <p className='tag-p'>DELETE</p>
    <img  src={require('../assets/Events/trash.png')} alt="venues" className='trash-img'/>
</div>
</div>

<div className='tag-div'>
<p><pre className='tag-1'>            DAXA RAY                                                                                                 CHIEF GUEST</pre></p>
<div className='btn-tag'>
<img  src={require('../assets/Events/edit.png')} alt="events" className='edit-img'/>
    <p className='btn-p'>EDIT</p>
</div>
<div className='tag-exp'>
    <p className='tag-p'>DELETE</p>
    <img  src={require('../assets/Events/trash.png')} alt="venues" className='trash-img'/>
</div>
</div>

<div className='tag-div'>
<p><pre className='tag-1'>            MARTHA SWAN                                                                                        PERFORMER</pre></p>
<div className='btn-tag'>
<img  src={require('../assets/Events/edit.png')} alt="events" className='edit-img'/>
    <p className='btn-p'>EDIT</p>
</div>
<div className='tag-exp'>
    <p className='tag-p'>DELETE</p>
    <img  src={require('../assets/Events/trash.png')} alt="venues" className='trash-img'/>
</div>
</div>

<div className='tag-div'>
<p><pre className='tag-1'>            JACK RAYN                                                                                                PERFORMER</pre></p>
<div className='btn-tag'>
<img  src={require('../assets/Events/edit.png')} alt="events" className='edit-img'/>
    <p className='btn-p'>EDIT</p>
</div>
<div className='tag-exp'>
    <p className='tag-p'>DELETE</p>
    <img  src={require('../assets/Events/trash.png')} alt="venues" className='trash-img'/>
</div>
</div>

<div className='tag-div'>
<p><pre className='tag-1'>            GEORGE                                                                                                      ORGANIZER</pre></p>
<div className='btn-tag'>
<img  src={require('../assets/Events/edit.png')} alt="events" className='edit-img'/>
    <p className='btn-p'>EDIT</p>
</div>
<div className='tag-exp'>
    <p className='tag-p'>DELETE</p>
    <img  src={require('../assets/Events/trash.png')} alt="venues" className='trash-img'/>
</div>
</div>

<div className='tag-div'>
<p><pre className='tag-1'>            SHYBY ROBERT                                                                                       ORGANIZER</pre></p>
<div className='btn-tag'>
<img  src={require('../assets/Events/edit.png')} alt="events" className='edit-img'/>
    <p className='btn-p'>EDIT</p>
</div>
<div className='tag-exp'>
    <p className='tag-p'>DELETE</p>
    <img  src={require('../assets/Events/trash.png')} alt="venues" className='trash-img'/>
</div>
</div>



    </div>
   
  )
}

export default Ticket

