import React from "react";
import s from './Profile.module.css'
function Profile() {
    return(
        <div className={s.content}>
            <div>
                <img src="https://w.forfun.com/fetch/1f/1f2f6017fe992dd00493d3cda4d808fe.jpeg"/>
            </div>
            <div>
                ava+descript
            </div>
            <div>
                my posts
            </div>
            <div>
                new_post
            </div>
            <div>
                old_post
            </div>
            <div className={s.posts}>
                <div className={s.item}>
                    post_1
                </div>
                <div className={s.item}>
                    post_2
                </div>
            </div>
        </div>

    )

}

export default Profile