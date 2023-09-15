import './App.css';
import {useState} from 'react'
// import Login from "./components/login"
// import Home from "./components/home"
 import Dashboard from "./components/Dashboard"
// import Ticket from "./components/Ticket"
 // import Earnings from "./components/manage_earnings"
// import ManageEvents from "./components/ManageEvents"
// import ManageVenues from "./components/ManageVenues"
// import ManageTags from "./components/ManageTags"
// import Eventssection from "./components/Details/Events_Section";
// import AdminProfile from "./components/Profile/AdminProfile";



function App() {

  const [admin_dropdown, setAdmin_dropdown] = useState(false)
  function handleAdmin_dropdown(){
    setAdmin_dropdown(!admin_dropdown);
  }
  const [small_header_open, setSmall_header_open] = useState(false) 
  function handlesmall_header_open(){
    setSmall_header_open(!small_header_open);
  }

  return (
    <div className=''>
    {/* <Login /> */}
     {/*  <Home admin_dropdown={admin_dropdown} handleAdmin_dropdown={handleAdmin_dropdown} handlesmall_header_open={handlesmall_header_open} small_header_open={small_header_open} />  */}
     <Dashboard /> 
   {/* <Ticket />  */}
   {/*  <Earnings /> */}
   {/* <ManageEvents /> */}
    {/* <ManageVenues />  */}
     {/* <ManageTags /> */}
    {/* <Eventssection admin_dropdown={admin_dropdown} handleAdmin_dropdown={handleAdmin_dropdown} handlesmall_header_open={handlesmall_header_open} small_header_open={small_header_open} />  */}
    {/* <Topbar /> */}
    {/* <AdminProfile admin_dropdown={admin_dropdown} handleAdmin_dropdown={handleAdmin_dropdown} handlesmall_header_open={handlesmall_header_open} small_header_open={small_header_open} />  */} 

    </div>
  );
}

export default App;
 