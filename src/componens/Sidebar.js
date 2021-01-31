import { Avatar } from '@material-ui/core'
import React from 'react'
import '../css/Sidebar.css'


const Sidebar = () => {
    const recentItems = (topic) => (
        <div className = 'sidebar__recentItems'>
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
            
        </div>
    );

    return (
        <div className = 'sidebar'>
            <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1431440869543-efaf3388c585?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80" alt=""/>
                <Avatar className = 'sidebar__avatar'/>
                <h2>N M Shihab Islam</h2>
                <h4>nmshihabislam@gmail.com</h4>
            </div>           

            <div className="sidebar__stats">
                
                <div className="sidebar__stat">
                    <p>Who viewed you </p>
                    <p className="sidebar__statNumber">2000</p>
                </div>

                <div className="sidebar__stat">
                    <p>Views on Post </p>
                    <p className="sidebar__statNumber">20000</p>
                </div>
            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItems ('python') }
                {recentItems ('reactjs')}
                {recentItems ('django') }
                {recentItems ('webdeveloper')}
                
               
            </div>
        </div>
    )
}

export default Sidebar
