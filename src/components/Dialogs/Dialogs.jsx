import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom"

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return  <div className={s.dialog + ' ' + s.active}>
    <NavLink to={path}>{props.name}</NavLink> 
</div>
}

const Message = (props) => {
    return <div className={s.dialog}>{props.message}</div>
}


const Dialogs = (props) => {

let dialogsData = [
    { id: 1, name: 'Kolya' }, 
    { id:2, name:  'Vadym' },
    { id:3, name:  'Sasha' },
    { id:4, name:  'Dima' },
    { id:5, name:  'Viktor' },
    { id:6, name:  'Valera' }
]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name="Vadym" id="2" />
                <DialogItem name="Sasha" id="3" />
                <DialogItem name="Dima" id="4" />
                <DialogItem name="Viktor" id="5" />
                <DialogItem name="Valera" id="6" />
            </div>
            <div className={s.messages}>
                <Message  message= "Hi"/>
                <Message  message= "How are you?"/>
                <Message  message= "Yo"/>
            </div>
        </div>
        
    )
}

export default Dialogs;