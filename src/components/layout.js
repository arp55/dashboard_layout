import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import SideBar from './sidebar';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ChatScreen from './chatscreen';
import InfoScreen from './infoscreen'

const useStyles = makeStyles({
    root: {
        display: 'flex',
        height: 'fill-available',
    },
    drawer: {
        minWidth: 521,
    },
    drawerLessWidth: {
        minWidth: 106
    },
    content: {
        flex: '1 0 auto',
        backgroundColor: '#eeeeee'
    },
    chat: {
        textAlign: 'center',
        margin: 0
    },
    info: {
        flex: '1 0 auto',
        maxWidth: 200,
        textAlign: 'center'
    },
    infoLessWidth: {
        display: 'none'
    }
});

export default function Layout() {
    const classes = useStyles();
    const matches = useMediaQuery('(min-width:769px)');

    return (
        <>
            <div className={classes.root}>
                <div className={matches ? classes.drawer : classes.drawerLessWidth}>
                    <SideBar />
                </div>
                <div className={classes.content}>
                    <ChatScreen />
                </div>
                <div className={matches ? classes.info : classes.infoLessWidth}>
                    <InfoScreen />
                </div>
            </div>
        </>
    )
}
