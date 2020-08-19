import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import StarIcon from '@material-ui/icons/Star';
import PhoneIcon from '@material-ui/icons/Phone';
import VideocamIcon from '@material-ui/icons/Videocam';

const useStyles = makeStyles({
    root: {
        display: 'flex'
    },
    name: {
        border: '1px solid #d1c6c6',
        margin: 0,
        width: "-webkit-fill-available"
    },
    text: {
        padding: 7
    },
    iconhold: {
        margin: 0,
        padding: 10,
        border: '1px solid #d1c6c6'
    },
    icon: {
        margin: 10, color: 'gray'
    }
})

export default function Chatscreen() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <p className={classes.name}>
                <p className={classes.text}>
                    Friend Name
                </p>
            </p>
            <p className={classes.iconhold}><StarIcon className={classes.icon} /></p>
            <p className={classes.iconhold}><PhoneIcon className={classes.icon} /></p>
            <p className={classes.iconhold}><VideocamIcon className={classes.icon} /></p>
        </div>
    )
}
