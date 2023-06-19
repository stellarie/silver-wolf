import React, { useEffect, useRef, useState } from "react";
import './Modal.scss';

export const Modal = ({header, onClose = () => {}, children}) => {
    const ref = useRef();
    const [isOpen, setIsOpen] = useState(true);

    useEffect(() => {
        if (!isOpen) {
            onClose();
        }
    }, [isOpen])

    return (
        isOpen && <dialog className={`cmp-modal`}>
            <div className="modal" ref={ref}>
                <div className="header-container">
                    <span className="header">{header}</span>
                    <span className="close" onClick={() => setIsOpen(false)}>Close</span>
                </div>
                {children}
            </div>
        </dialog>
    )
}