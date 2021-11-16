import React from 'react';

const Modal = (props) => {
    return (
        <div className='modal'>
            <div className='modal-content'>
                <div className='modal-title'>
                    <h4>Modal title</h4>
                </div>
                <div className='modal-body'>
                    <p>This is modal body</p>
                </div>
                <div className='modal-footer'>
                    <button>Close</button>
                </div>
            </div>
        </div>
    )
}
export default Modal