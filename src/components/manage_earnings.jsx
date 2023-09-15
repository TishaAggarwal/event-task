import React from 'react'
import Topbar from "./Details/Topbar";
import '../CSS/manage_earning.css';


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

<img  src={require('../assets/earnings/earning.png')} alt="earning" className='mng-earning'/>
<p className='earning-p'>TOTAL BOOKING <br />     945378.90 USD</p>

<img  src={require('../assets/earnings/earning.png')} alt="earning" className='mng-earning1'/>
<p className='earning-p1'>TOTAL ADMIN COMMISSION <br />     45837828 USD</p>

<img  src={require('../assets/earnings/earning.png')} alt="earning" className='mng-earning2'/>
<p className='earning-p2'>TOTAL PROFIT <br />     367675834 USD</p>

<p><pre className='dates'> EVENTS                                                  BOOKING DATES</pre></p>

<div className='container'>
    <p className='container-p'>CHOOSE HERE </p>
</div>

<div className='container1'>
    <p className='container-p1'>CHOOSE HERE </p>
</div>

<p><pre className='event'>    EVENT                                                 BOOKING              COMMISSION             PROFIT             MONTH               TRANSFERRED</pre></p>

<div className='entry1-div'>
<p><pre className='entry1'>    DAILY MEDIATION CLASSES                                           13.25 USD                                 7.06 USD                            122.89 USD                     NOV 22</pre></p>
<div className='btns'>
    <p className='btns-p'>PAID</p>
</div>
</div>

<div className='entry1-div'>
<p><pre className='entry1'>    PROFESSIONAL PIANO CLASSES                                     13.25 USD                                 7.06 USD                            122.89 USD                     NOV 22</pre></p>
<div className='btns'>
    <p className='btns-p'>PAID</p>
</div>
</div>

<div className='entry1-div'>
<p><pre className='entry1'>    ITALIAN COOKING CLASSES                                           13.25 USD                                 7.06 USD                            122.89 USD                     NOV 22</pre></p>
<div className='btns1'>
    <p className='btns-p1'>PENDING</p>
</div>
</div>

<div className='entry1-div'>
<p><pre className='entry1'>    SUNDAY SWIMMING CLASSES                                           13.25 USD                                 7.06 USD                            122.89 USD                     NOV 22</pre></p>
<div className='btns'>
    <p className='btns-p'>PAID</p>
</div>
</div>



    </div>
   
  )
}

export default Ticket