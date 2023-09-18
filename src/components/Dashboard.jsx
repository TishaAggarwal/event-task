import React , { useState } from "react";

import notification from "../assets/Dashboard/notification.png";
import customer from "../assets/Dashboard/customer.png";
import events from "../assets/Dashboard/events.png";
import bookings from "../assets/Dashboard/bookings.png";
import organizer from "../assets/Dashboard/organizer.png";
import revenue from "../assets/Dashboard/revenue.png";
import Sidebar from "./Sidebar";
import Footer from "./Footer"
import stats from "../assets/Dashboard/stats_.png";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import "../CSS/dashboard.css";

function Dashboard() {

  const data = [
    {
      name: "MEDITATION CLASSES",
      value: 120,
    },
    {
      name: "COOKING CLASSES",
      value: 300,
    },
    {
      name: "BUSINESS CLASSES",
      value: 240,
    },
    {
      name: "PIANO CLASSES",
      value: 180,
    },
    {
      name: "SUNDAY SWIMMING",
      value: 130,
    },
    {
      name: "YOGA CLASSES",
      value: 240,
    },
    {
      name: "YOGA CLASSES",
      value: 50,
    },
    {
      name: "WINE NIGHTS",
      value: 140,
    },
    {
      name: "CONCERTS",
      value: 180,
    },
   
  ];


  return (
    <div className="black" >
        <div className="sidebar-ico">
          <Sidebar />
          </div>
          <div className="main-content">
            
      
     
          <div className="dash-head">
         <p className="p-head"> YOUR DASHBOARD</p>
            </div>

            <div className="notif-div">
          <img  src={require('../assets/Dashboard/notification.png')} alt="notification" className='notif'/>
          </div>
          <p className="notif-p">Notification</p>

            <img  src={require('../assets/Dashboard/organizer.png')} alt="organizers" className='org'/>
            <div className="org-head">
         <p className="p-org"> ORGANIZERS</p>
            </div>

           <p className="rating">TOP 10 </p>
  
          
        <div className="bar-chart ">
            <ResponsiveContainer width="100%" height={400}>
              <BarChart
                data={data}
                width="100%"
                height="80%"
              >
                <XAxis
                  dataKey="name"
                  scaleToFit={true}
                  style={{ fontSize: "9px" }}
                />
                <YAxis />
                <Tooltip />
                <Bar
                  dataKey="value"
                  fill="#D807FA"
                  barSize={50}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <p className="heading">EVENT TICKET STATISTICS</p> 

          <p > <pre className="table-head">EVENT                                                                    TICKETS                             QUANTITY                          ORDER TOTAL   </pre></p> 
         
          <div className="line"  />

          <div className="digital">
            <p className="digi-p">DIGITAL MARKETING SEMINAR</p>
          </div>

          <div className="digi7">
            <p className="digi-7">7</p>
          </div>

          <div className="order">
            <p className="order-p">46.00</p>
          </div>

          <p > <pre className="f1-head">DIGITAL MARKETING SEMINAR                                                      FREE                                                    2                                                          23.22   </pre></p> 

          <div className="line1"  />

          <p > <pre className="f2-head">DIGITAL MARKETING SEMINAR                                                  EARLY BID                                              3                                                          12.66   </pre></p> 

          <div className="line2"  />

          <p > <pre className="f3-head">DIGITAL MARKETING SEMINAR                                                   REGULAR                                               3                                                          11.33   </pre></p> 

          <div className="line3"  />

          <div className="digital">
            <p className="digi-p">GLOBAL MARKETING CONFERENCE</p>
          </div>

          <div className="digi7">
            <p className="digi-7">7</p>
          </div>

          <div className="order">
            <p className="order-p">46.00</p>
          </div>

          <p > <pre className="f1-head">GLOBAL MARKETING CONFERENCE                                                FREE                                                 2                                                          23.22   </pre></p> 

          <div className="line1"  />

          <p > <pre className="f2-head">GLOBAL MARKETING CONFERENCE                                           EARLY BID                                            3                                                          12.66   </pre></p> 

          <div className="line2"  />

          <p > <pre className="f3-head">GLOBAL MARKETING CONFERENCE                                            REGULAR                                             3                                                          11.33   </pre></p> 

          <div className="line3"  />

          <div className="digital">
            <p className="digi-p">VR ASSISTANT WORKSHOP</p>
          </div>

          <div className="digi7">
            <p className="digi-7">7</p>
          </div>

          <div className="order">
            <p className="order-p">46.00</p>
          </div>

          <p > <pre className="f1-head">VR ASSISTANT WORKSHOP                                                                 FREE                                                   2                                                          23.22   </pre></p> 

          <div className="line1"  />

          <p > <pre className="f2-head">VR ASSISTANT WORKSHOP                                                             EARLY BID                                            3                                                          12.66   </pre></p> 

          <div className="line2"  />

          <p > <pre className="f3-head">VR ASSISTANT WORKSHOP                                                             REGULAR                                              3                                                          11.33   </pre></p> 

          <div className="line3"  />
         

      <Footer  />
    </div>

    </div>
  
  );
}

export default Dashboard;


