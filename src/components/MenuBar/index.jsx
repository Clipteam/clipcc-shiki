import React from 'react';
import styles from './menu-bar.module.scss';
import classNames from 'classnames';
import Logo from './logo.svg';
import Button from '../Button';
import Input from '../Input';
import Avatar from '../Avatar';
import Loading from '../Loading';
import Dropdown from '../Dropdown';
import { useAtom } from 'jotai';
import { aboutModalJotai } from '../../jotai/modal.js';
import { turboModeJotai } from '../../jotai/status.js';
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
    const [turboMode, setTurboMode] = useAtom(turboModeJotai);
    const [fileMenuOpen, setFileMenuOpen] = React.useState(false);
    const [editMenuOpen, setEditMenuOpen] = React.useState(false);
    
    const closeMenu = () => {
        setFileMenuOpen(false);
        setEditMenuOpen(false);
    };
    
    React.useEffect(() => {
        document.addEventListener('click', closeMenu);
        return () =>{
            document.removeEventListener('click', closeMenu);
        };
    }, []);
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
                <Dropdown>
                    <Button><FolderCode /> File</Button>
                    <Dropdown.Content>
                        <Dropdown.Item>New</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>Load project</Dropdown.Item>
                        <Dropdown.Item>Save project</Dropdown.Item>
                        <Dropdown.Item>Save as...</Dropdown.Item>
                    </Dropdown.Content>
                </Dropdown>
                <div className={styles.spacer} />
                <Dropdown>
                    <Button><BringToFrontOne /> Edit</Button>
                    <Dropdown.Content>
                        <Dropdown.Item>Restore</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>Turn on turbo mode</Dropdown.Item>
                        <Dropdown.Item>Turn on compile mode</Dropdown.Item>
                        <Dropdown.Item>Turn on single step mode</Dropdown.Item>
                    </Dropdown.Content>
                </Dropdown>
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
