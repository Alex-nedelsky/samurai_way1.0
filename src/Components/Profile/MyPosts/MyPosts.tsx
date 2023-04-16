import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

function MyPosts() {
    return (
        <div className={s.nav}>
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Cancel</button>
            </div>
            <div className={s.posts}>
                <Post message='HI, how are you?' likesCount="15" />
                <Post message="It's my first post" likesCount="20" />
            </div>


        </div>
    )
}


export default MyPosts