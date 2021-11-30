import React from 'react';
import "./style.css"
import { userSelector } from "../../store/selectors";
import { useSelector } from "react-redux";

const Modal = props => {
    const {modalIsOpen, onClose, body} = props
    const user = useSelector(userSelector)
    console.log(user);
    if (!modalIsOpen) {
        return null
    }
     return (
            <div className='modal' onClick={onClose}>
                <div className='modal-main' onClick={(e)=>e.stopPropagation()}>
                    {body}
                </div>
            </div>
        )
}
export default Modal