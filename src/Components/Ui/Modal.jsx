import React from 'react'
import ReactDOM from 'react-dom'
import './Modal.css'

const Backdrop = props => {
    return (
        <div className ="backdrop" onClick ={props.onClose}></div>
        
        )
}

const ModalOverLay = props => {
    return (
        <div className="modal">
            <div className="content">{props.children}</div>
        </div>
    )
}

const portalElement  = document.getElementById('overlays')
function Modal(props) {
    return (
        <>
            
            {ReactDOM.createPortal(<Backdrop onClose ={props.onClose}/> , portalElement)}
            {ReactDOM.createPortal(<ModalOverLay>{props.children}</ModalOverLay>, portalElement )}
                      
        </>
    )
}

export default Modal
