import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

function Dialogs() {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <div className={s.dialog + ' ' + s.active}>
                   <NavLink to="/dialogs/1">puch</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/2">xrusch</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/3">pupa</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/4">drisch</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/5">kon'</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/6">manda</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>Huy</div>
                <div className={s.message}>Yo!</div>
            </div>
        </div>
    )
}

export default Dialogs