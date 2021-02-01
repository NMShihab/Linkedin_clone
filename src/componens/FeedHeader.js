import React from 'react'
import '../css/FeedHeader.css'
import CreateIcon from '@material-ui/icons/Create'
import ImageIcon from '@material-ui/icons/Image'
import PostOption from './PostOption'
import { CalendarViewDay, EventNote, Subscriptions } from '@material-ui/icons'

const FeedHeader = () => {
    return (
        <div className='feed__postContainer'>
            <div className="feed__post">
                <CreateIcon />

                <form>
                    <input type="text"/>
                    <button type = 'submit'>Send</button>
                </form>
            </div>

            <div className="feed__postOption">
                {/* Post option */}
                <PostOption Icon = {ImageIcon} title = 'Photo' color = '#70B5F9'/>
                <PostOption Icon = {Subscriptions} title = 'Video' color = '#7fc15e'/>
                <PostOption Icon = {EventNote} title = 'Event' color = '#e7a33e'/>
                <PostOption Icon = {CalendarViewDay} title = 'Write Article' color = '#f5987e'/>
            </div>
            
        </div>
    )
}

export default FeedHeader
