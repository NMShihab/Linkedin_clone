import React, { useState, useEffect} from 'react'
import FeedHeader from './FeedHeader'
import '../css/Feed.css'
import Post from './Post'
import { db } from '../firebase'
import firebase from 'firebase'


const Feed = () => {
    const [input, setInput] = useState('')
    const [posts, setPosts] = useState([]);


    // This will collect all data from database and map ,order posts
    useEffect(() => {
        db.collection('posts').orderBy('timestamp','desc').onSnapshot(snapshot =>(
            setPosts(snapshot.docs.map(doc =>(
                {
                    id: doc.id,
                    data : doc.data()
                }
            )))

        ))
       
    }, []);

    const sendPost = (e) =>{
        e.preventDefault();
        db.collection('posts').add({
            name: "N M Shihab Islam",
            description: "Web developer",
            message : input,
            photoUrl : "",
            timestamp : firebase.firestore.FieldValue.serverTimestamp()
        });
        setInput("");
        
    };
    return (
        <div className = 'feed'>
            {/* Header Part of Feed */}
            <FeedHeader 
                onClick = {sendPost}
                input = {input}
                onChange = {e =>setInput(e.target.value)}
            />

            {/* Post part */}

            {posts.map(({ id,data:{name,description,message,photoUrl}}) => (
                <Post 
                    key={id}
                    name = {name}
                    description = {description}
                    message = {message}
                    photoUrl = {photoUrl}
                />
            ))}
        </div>
    )
}

export default Feed

