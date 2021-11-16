import React from 'react';

export default function ModalHook () {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    return {openModal, closeModal, modalIsOpen }
}