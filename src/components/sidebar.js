import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import messenger from '../assets/messenger.svg'
import whatsapp from '../assets/whatsapp.svg'
import skype from '../assets/skype.svg';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import useMediaQuery from '@material-ui/core/useMediaQuery';


const useStyles = makeStyles({
    sidebar: {
        backgroundColor: '#393f45',
        width: 106,
        zIndex: 100,
        height: '100%'
    },
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    drawerPaper1: {
        left: 105,
        width: 190,
        backgroundColor: '#45484b',
        zIndex: '-1000'
    },
    drawerPaper2: {
        left: 295,
        width: 225,
        boxShadow: 'none',
        backgroundColor: '#5e5e5e',
        zIndex: '-1000'
    },
    icon: { width: '60%', margin: 20, color: 'white' },
    image: { width: '60%', margin: 5 },
    btn: { backgroundColor: '#45484b' },
});

export default function SideBar() {
    const classes = useStyles();
    const matches = useMediaQuery('(min-width:769px)');

    const [open, setstate] = useState(true)

    useEffect(() => {
        if (matches) {
            setstate(true)
        }
        else {
            setstate(false)
        }
    }, [matches])

    return (
        <>
            <div className={classes.sidebar}>
                <Button>
                    <MenuIcon className={classes.icon} />
                </Button>
                <Button className={matches ? classes.btn : null}>
                    <img src={messenger} alt="messenger" className={classes.image} />
                </Button>
                <br />
                <Button>
                    <img src={whatsapp} alt="whatsapp" className={classes.image} />
                </Button>
                <br />
                <Button>
                    <img src={skype} alt="skype" className={classes.image} />
                </Button>
            </div>

            <Drawer variant="persistent" anchor={"left"} open={open} classes={{ paper: classes.drawerPaper1, }}>
                <p style={{ fontSize: 34, color: '#ebdfdf', textAlign: 'center' }}>Inbox</p>
            </Drawer>
            <Drawer variant="persistent" anchor={"left"} open={open} classes={{ paper: classes.drawerPaper2, }}>
                <p style={{ fontSize: 34, color: '#ebdfdf', textAlign: 'center' }}>Friends</p>
            </Drawer>
        </>
    )
}
