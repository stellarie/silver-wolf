import React, { useState } from "react";
import './Menu.scss';
import { Modal } from "../Modal/Modal";
import { Info } from "./Info/Info";

export const Menu = () => {
    const [modal, setModal] = useState(<></>);

    const infoModal = () => {
        return (
            <Modal onClose={() => setModal(<></>)} header={"silver-wolf-info"}>
                <Info />
            </Modal>
        )
    }

    return (
        <>
            <div className="cmp-menu">
                <div className="menu-bar">
                    <span className="item" onClick={() => setModal(infoModal())}>info</span>
                    <span className="item">builds</span>
                    <a href="https://github.com/stellarie" target="_blank" rel="noreferrer">dev</a>
                    <span className="item">about</span>
                    <span className="item">contact</span>
                </div>
            </div>
            {modal}
        </>
    )
}