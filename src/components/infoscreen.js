import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import NotificationsIcon from '@material-ui/icons/Notifications';
import user from '../assets/user.svg'

const useStyles = makeStyles({
    root: {
        display: 'flex',
        border: '1px solid #d1c6c6',
    },
    name: {
        margin: 0,
        width: "-webkit-fill-available"
    },
    text: {
        padding: 7
    },
    iconhold: {
        margin: 0,
        padding: 10,
    },
    icon: {
        margin: 10, color: 'gray'
    },
    userIcon: {
        width: 110
    }
})

export default function Infoscreen() {
    const classes = useStyles();
    return (
        <>
            <div className={classes.root}>
                <p className={classes.iconhold}><NotificationsIcon className={classes.icon} /></p>
                <p className={classes.text}>
                    Username
            </p>
            </div>
            <br />
            <img src={user} alt="user" className={classes.userIcon} />
        </>
    )
}
