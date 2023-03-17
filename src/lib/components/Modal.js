import React from 'react';
import './style.css'

const Modal = (props) => {
   return (
    <div className="modal">
        <p>{props.message} </p>
        <button onClick={props.close} className="close-button">Close</button>
    </div>
   )
}
export default Modal;