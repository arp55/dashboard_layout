import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import messenger from '../assets/messenger.svg'
import whatsapp from '../assets/whatsapp.svg'
import skype from '../assets/skype.svg';
import twitter from '../assets/twitter.svg';
import linkedin from '../assets/linkedin.svg';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Contacts from './Contacts';
import Inboxbar from './InboxBar';


const useStyles = makeStyles({
    sidebar: {
        backgroundColor: '#1d232a',
        width: 86,
        zIndex: 100,
        height: '100%'
    },
    drawerPaper1: {
        left: 86,
        width: 190,
        backgroundColor: '#1d242c',
        zIndex: '-1000'
    },
    drawerPaper2: {
        left: 276,
        width: 270,
        boxShadow: 'none',
        backgroundColor: '#242b33',
        zIndex: '-1000'
    },
    icon: { width: '60%', margin: 20, color: 'white' },
    image: { width: '60%', margin: 5 },
    btn: { backgroundColor: '#1f2730' },
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
                <Button>
                    <img src={twitter} alt="twitter" className={classes.image} />
                </Button>
                <Button>
                    <img src={linkedin} alt="linkedin" className={classes.image} />
                </Button>
            </div>

            <Drawer variant="persistent" anchor={"left"} open={open} classes={{ paper: classes.drawerPaper1, }}>
                <Inboxbar />
            </Drawer>
            <Drawer variant="persistent" anchor={"left"} open={open} classes={{ paper: classes.drawerPaper2, }}>
                <Contacts />
            </Drawer>
        </>
    )
}
