import React from 'react'
import "../css/Header.css"
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import NotificationsIcon from '@material-ui/icons/Notifications';
import LogOut from '@material-ui/icons/ExitToAppOutlined';
import PersonIcon from '@material-ui/icons/Person';
import ChatIcon from '@material-ui/icons/Chat'

import HeaderOption from './HeaderOption';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../firebase';
import { logout, selectUser } from '../features/userSlice';

function Header() {
    const dispatch = useDispatch()
    const user = useSelector(selectUser)

    const logOut = () =>{
        dispatch(logout())
        auth.signOut()

    }
    return (
        <div className = "header">
            

            <div className="header__left">
                <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt=""/>
                

                <div className="header__search">
                    {/* Search Icon */}
                    <SearchIcon/>
                    <input type="text"/>
                </div>

            </div>

            <div className="header__right">
                <HeaderOption Icon = {HomeIcon} title = 'Home'/>
                <HeaderOption Icon ={SupervisorAccountIcon} title = 'My network'/>
                <HeaderOption Icon = {BusinessCenterIcon} title = 'Jobs'/>
                <HeaderOption Icon ={ChatIcon} title = 'Messaging'/>
                <HeaderOption Icon ={NotificationsIcon} title = 'Notifications'/>
                <HeaderOption avatar = {true} title = 'me'/>
                <HeaderOption Icon ={LogOut} title = 'Logout' onClick = {logOut}/>
            </div>
            
        </div>
    )
}

export default Header
