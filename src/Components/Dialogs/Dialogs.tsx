import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

let DilogItem = (props: { id: number; name: string }) => {

    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props: { message: any}) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

function Dialogs(props: any) {


    let dialogsData = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'},
    ]

    let messagesData = [
        {id: 1, message: 'HI'},
        {id: 2, message: 'hey'},
        {id: 3, message: 'way'},
        {id: 4, message: 'yi'},
        {id: 5, message: 'iiiiiI'},
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DilogItem name={dialogsData[0].name} id = {dialogsData[0].id} />
                <DilogItem name={dialogsData[3].name} id = {dialogsData[4].id} />
                <DilogItem name={dialogsData[2].name} id = {dialogsData[2].id} />

            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>
            </div>
        </div>
    )
}

export default Dialogs