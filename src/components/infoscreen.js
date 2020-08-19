import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import profile from '../assets/profile.jpg'

const useStyles = makeStyles({
    root: {
        height: '100%'
    },
    userIcon: {
        width: '100%',
        height: '100%'
    }
})

export default function Infoscreen() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <img src={profile} alt="user" className={classes.userIcon} />
        </div>
    )
}
