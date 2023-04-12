import React from "react";
import s from './Post.module.css'

function Post() {
    return (
        <div className={s.item}>
            <img src='https://sevastopol.su/sites/default/files/styles/node/public/2023-01-04/1_5.jpg'/>
            Post 1
            <div>
                <span>Like</span>
            </div>
        </div>

    )

}

export default Post