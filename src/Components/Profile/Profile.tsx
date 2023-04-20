import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import Profileinfo from "./ProfileInfo/Profileinfo";

function Profile() {
    return (
        <div>
            <Profileinfo/>
            <MyPosts/>
        </div>

    )

}

export default Profile