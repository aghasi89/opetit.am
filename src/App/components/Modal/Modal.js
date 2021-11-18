import React from 'react';
import "./style.css"

const Modal = props => {
    const {modalIsOpen, onClose, body} = props
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