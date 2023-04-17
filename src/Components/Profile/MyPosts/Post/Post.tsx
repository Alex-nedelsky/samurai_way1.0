import React from "react";
import s from './Post.module.css'

function Post(props: any) {
    return (
        <div className={s.item}>
            <img src='https://sevastopol.su/sites/default/files/styles/node/public/2023-01-04/1_5.jpg'/>
            {props.message}
            <div>
                <span>Like </span>{props.likesCount}
            </div>
        </div>

    )

}

export default Post