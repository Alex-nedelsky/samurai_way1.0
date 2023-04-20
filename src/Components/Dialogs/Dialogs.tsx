import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

let DilogItem = (props: { id: string; name: string }) => {

    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props:{ message: string }) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}


function Dialogs(props: any) {

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DilogItem name="Dimich" id="1"/>
                <DilogItem name="Andrey" id="2"/>
                <DilogItem name="Sveta" id="3"/>
                <DilogItem name="Sasha" id="4"/>
                <DilogItem name="Viktor" id="5"/>
                <DilogItem name="Valera" id="6"/>
            </div>
            <div className={s.messages}>
                <Message message="yo" />
                <Message message="hallo world" />
                <Message message="wathup" />
            </div>
        </div>
)
}

export default Dialogs