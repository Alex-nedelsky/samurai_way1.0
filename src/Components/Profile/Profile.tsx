import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
function Profile() {
    return(
        <div className={s.content}>
            <div>
                <img src="https://w.forfun.com/fetch/1f/1f2f6017fe992dd00493d3cda4d808fe.jpeg"/>
            </div>
            <div>
                ava+describtion
            </div>
            <MyPosts />
        </div>

    )

}

export default Profile