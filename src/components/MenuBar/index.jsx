import React from 'react';
import styles from './menu-bar.module.scss';
import classNames from 'classnames';
import Logo from './logo.svg';
import Button from '../Button';
import Input from '../Input';
import Avatar from '../Avatar';
import Loading from '../Loading';
import Menu from '../Menu';
import { useAtom } from 'jotai';
import { aboutModalJotai } from '../../jotai/modal.js';
import {
    InboxOut,
    FolderCode,
    BringToFrontOne,
    ApplicationOne
} from '@icon-park/react';

const MenuBar = ({
    showLogo
}) => {
    const [aboutModalOpen, setAboutModalOpen] = useAtom(aboutModalJotai);
    const [fileMenuOpen, setFileMenuOpen] = React.useState(false);
    
    return (
        <div className={styles.menu}>
            <img
                draggable={false}
                alt="Logo"
                src={Logo}
                className={styles.logo}
            />
            <div className={styles.spacer} />
            <div className={classNames(styles.group, styles.prefix)}>
                <Menu
                    open={fileMenuOpen}
                    items={[{
                        text: 'New',
                        onClick: () => {}
                    }, {
                        text: 'Save',
                        onClick: () => {}
                    }, {
                        text: 'Save as',
                        onClick: () => {}
                    }]}
                >
                    <Button onClick={() => {
                        setFileMenuOpen(!fileMenuOpen);
                    }}><FolderCode /> File</Button>
                </Menu>
                <div className={styles.spacer} />
                <Button><BringToFrontOne /> Edit</Button>
                <div className={styles.spacer} />
                <Button onClick={() => {
                    setAboutModalOpen(true);
                }}><ApplicationOne /> About</Button>
                <div className={styles.spacer} />
                <Input
                    placeholder="ClipCC Project"
                />
            </div>
            <div className={styles.group}>
                <Button color='primary'>
                    <InboxOut /> New
                </Button>
                <Avatar />
                <div className={styles.spacer} />
            </div>
        </div>
    );
};

export default MenuBar;
