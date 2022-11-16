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
    
    React.useEffect(() => {
        const closeMenu = () => {
            setFileMenuOpen(false);
        };
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
                <Menu
                    open={fileMenuOpen}
                    items={[{
                        text: 'New',
                        onClick: () => {
                            setFileMenuOpen(false);
                        }
                    }, {
                        divider: true
                    }, {
                        text: 'Load',
                        onClick: () => {
                            setFileMenuOpen(false);
                        }
                    }, {
                        text: 'Save',
                        onClick: () => {
                            setFileMenuOpen(false);
                        }
                    }, {
                        text: 'Save as',
                        onClick: () => {
                            setFileMenuOpen(false);
                        }
                    }]}
                >
                    <Button onClick={(e) => {
                        e.nativeEvent.stopImmediatePropagation();
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
