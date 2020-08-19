import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import chat from '../assets/chat.jpg';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        height: '100%'
    },
    image: {
        height: '100%',
        width: '100%'
    }
})

export default function Chatscreen() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <img src={chat} alt="chats" className={classes.image} />
        </div>
    )
}
