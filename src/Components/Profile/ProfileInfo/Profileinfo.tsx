import React from "react";
import s from "./Profilenfo.module.css"

function Profileinfo() {
    return (
        <div>
            <div className={s.screensaver}>
                <img src="https://w.forfun.com/fetch/1f/1f2f6017fe992dd00493d3cda4d808fe.jpeg"/>
            </div>
            <div className={s.descriptonBlock}>
                ava+description
            </div>
        </div>

    )

}

export default Profileinfo