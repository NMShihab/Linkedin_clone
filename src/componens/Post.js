import { Avatar } from '@material-ui/core'
import { ChatOutlined, SendOutlined, ShareOutlined, ThumbUpAltOutlined } from '@material-ui/icons'
import '../css/Post.css'
import PostOption from './PostOption'

function Post({name, description,message,photoUrl}) {
    return (
        <div className= 'post'>
            <div className="post__header">
                <Avatar />
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>              
                </div>
            </div>

            <div className="post__body">
                <p>{message}</p>
            </div>

           <div className="post__buttons">
               <PostOption Icon = {ThumbUpAltOutlined} title = 'Like' color = 'grey'/>
               <PostOption Icon = {ChatOutlined} title = 'Comment' color = 'grey'/>
               <PostOption Icon = {ShareOutlined} title = 'Share' color = 'grey'/>
               <PostOption Icon = {SendOutlined} title = 'Send' color = 'grey'/>
           </div>
            
        </div>
    )
}

export default Post
