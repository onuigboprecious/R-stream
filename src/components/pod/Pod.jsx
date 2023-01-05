import React from 'react'
import {BsFillXDiamondFill, BsBookmarkHeart, BsXDiamondFill, BsBezier2, BsBook, BsBriefcaseFill } from 'react-icons/bs'
import { Nav,   } from 'react-bootstrap';
import '../pod/Pod.css'
import  Pagination  from '../pagination/Pagination'

function Pod() {
  return (

<div className='row'>
    <div className="podcast-page" id="podcast-page">
      <div className="sidebar col-md-4" id="navbar-toggle">
        <div className="sidebar-menu">        
            
            <Nav.Item className='pod_list'>
                <Nav.Link className="socials" href="/live">
                  <BsFillXDiamondFill /> Trending
                </Nav.Link>
                </Nav.Item>
            
                <Nav.Item className='pod_list'>
                <Nav.Link className="socials" href="/live">
                  <BsBookmarkHeart /> option 2
                </Nav.Link>
                </Nav.Item>
            
            
            <Nav.Item>
                <Nav.Link className="socials" href="/live">
                  <BsXDiamondFill/> option 3
                </Nav.Link>
                </Nav.Item>
            
            
            <Nav.Item>
                <Nav.Link className="socials" href="/live">
                  <BsBezier2 /> option 4
                </Nav.Link>
                </Nav.Item>
            
            
            <Nav.Item>
                <Nav.Link className="socials" href="/">
                  <BsBook /> option 5
                </Nav.Link>
                </Nav.Item>
            
            
            <Nav.Item>
                <Nav.Link className="socials" href="/">
                  <BsBriefcaseFill/> option 6
                </Nav.Link>
                </Nav.Item>
            
            </div>
            </div>
      
     
<div className=' col-md-10 d-flex justify-content-center'>
         <Pagination />
</div>
        </div>
      </div> 
      
    
  );
};

export default Pod