import React from 'react'
import '../live/Live.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BsBookmark } from "react-icons/bs";
import { GoVideo, GoHome, GoHistory  } from "react-icons/go";
import { RiLiveLine } from "react-icons/ri";
import { IoHeartCircleSharp } from "react-icons/io5";
import { useAuth } from '../../Context/Authprovider';
import SignoutButton from '../buttons/signoutButton';
import { FcApproval } from 'react-icons/fc';
import { NavLink } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom'
import Stream from './Stream'
import LivePage from './LiveComp/LivePage'
import HistoryPage from './LiveComp/Historypage'
import CirclePage from './LiveComp/Circlepage'
import Bookmarkpage from './LiveComp/BookmarkPage'
import ReelsPage from './LiveComp/ReelsPage'

export const SideNav = () => {


  const { auth, user } = useAuth();
  return (
 
      <div className="sidebar" id="navbar-toggle">
        <div className="sidebar-menu">
          <div>
            <ul>
            <NavLink to="/Stream" className="link" >
              <GoHome />
              <span> Stream</span>
            </NavLink>
            </ul>
            <ul>
            <NavLink  to="/LivePage" className="link" >
              <RiLiveLine />
              <span> Live</span>
            </NavLink>
            </ul>
            <ul>
           
            <NavLink to="/Reels" className="link" >
              <GoVideo />
              <span> Reels</span>
            </NavLink>
            </ul>
            <ul>
            <NavLink  to="/Circle" className="link" >
              <IoHeartCircleSharp />
              <span> My Circle</span>
            </NavLink>
            </ul>
            <ul>
            <NavLink  to="/History" className="link" >
              <GoHistory />
              <span> History</span>
            </NavLink>
            </ul>
             <ul>
            <NavLink to="/Bookmarked" className="link" >
              <BsBookmark />
              <span> Bookmarks</span>
            </NavLink>
            </ul>
          
           <ul>  
          <NavDropdown title="More" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
          </ul>

            

          {auth && (
            <div className="signout_panel_dashboard">
              <div className="text">
                {user.email} <FcApproval />
              </div>
              <SignoutButton />
            </div>
          )}

            </div>


    
        <Routes>
          <Route exact path='/' element={Stream} />
          <Route path="/live" element={<LivePage />} />
          <Route path="/Reels" element={<ReelsPage />} />
          <Route path="/History" element={<HistoryPage />} />
          <Route path="/Circle" element={<CirclePage />} />
          <Route path="/Bookmarked" element={<Bookmarkpage />} />
        </Routes>


          </div>
        </div>

        

  )
}
