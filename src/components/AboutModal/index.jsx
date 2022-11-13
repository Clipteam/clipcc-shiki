import React from 'react';
import styles from './about-modal.module.scss';
import Button from '../Button';
import Modal from '../Modal';
import Logo from '../MenuBar/logo.svg';
import { useAtom } from 'jotai';
import { aboutModalJotai } from '../../jotai/modal.js';

const AboutModal = ({visible}) => {
    const [aboutModalOpen, setAboutModalOpen] = useAtom(aboutModalJotai);
    return (
        <Modal visible={visible} title="About" onClose={() => {
            setAboutModalOpen(false);
        }}>
            <img
                draggable={false}
                alt="Logo"
                src={Logo}
                className={styles.logo}
            />
            <p style={{
                textAlign: 'center',
                fontSize: '18px',
                height: '0px'
            }}
            >Made with love and magic</p>
            <p style={{
                textAlign: 'center',
                fontSize: '18px',
                height: '0px'
            }}
            >Version: 3.2</p>
            <p style={{
                textAlign: 'center',
                fontSize: '18px',
                height: '0px'
            }}
            >Hash: a2ef6cab5077131cfe1e11b292d4e462af41efd7</p>
        </Modal>
    );
};

export default AboutModal;
