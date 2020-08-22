import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Grid, Divider } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import messenger from '../assets/messenger.svg'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const useStyles = makeStyles({
    root: {
        height: '100%',
        width: '100%',
        textAlign: 'center'
    },
    header: {
        border: '1px solid #80808078',
        padding: 20,
        color: "#666666"
    },
    online: {
        backgroundColor: '#2d76a0',
        borderRadius: 25,
        height: 9,
        width: 8,
        position: 'absolute'
    },
    icon: {
        fontSize: 26,
    },
    down: {
        margin: '0px 0px -5px 10px'
    },
    userIcon: {
        marginTop: -20,
        width: 130,
        height: 'auto',
        color: '#5f9ea0',
        marginLeft: 8
    },
    image: {
        height: 28,
    },
    dots: {
        color: '#808080'
    },
    name: {
        fontSize: 23,
        fontWeight: '600'
    },
    location: {
        marginBottom: 16,
        color: "gray"
    }
})

export default function Infoscreen() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container className={classes.header}>
                <Grid item xs={2} style={{ position: "relative" }}>
                    <div className={classes.online}></div>
                    <NotificationsIcon className={classes.icon} />
                </Grid>
                <Grid item xs={10}>
                    Username
                    <ExpandMoreIcon className={classes.down} />
                </Grid>
            </Grid>
            <Grid container style={{ marginTop: 14 }}>
                <Grid item xs={2}>
                    <img src={messenger} alt="messenger" className={classes.image} />
                </Grid>
                <Grid item xs={8}></Grid>
                <Grid item xs={2}>
                    <MoreHorizIcon className={classes.dots} />
                </Grid>
            </Grid>
            <AccountCircleIcon className={classes.userIcon} />
            <div className={classes.name}>Username</div>
            <div className={classes.location}>Location</div>
            <Divider />
            <Grid container>
                <Grid item xs={6}><p>Nickname</p></Grid>
                <Grid item xs={6}><p>Nickname</p></Grid>
            </Grid>
            <Divider style={{ margin: '0px 22px' }} />
            <Grid container>
                <Grid item xs={6}><p>Tel</p></Grid>
                <Grid item xs={6}><p>4555454584</p></Grid>
            </Grid>
            <Divider style={{ margin: '0px 22px' }} />
            <Grid container>
                <Grid item xs={6}><p>Date Of Birth</p></Grid>
                <Grid item xs={6}><p>14/12/1994</p></Grid>
            </Grid>
            <Divider style={{ margin: '0px 22px' }} />
            <Grid container>
                <Grid item xs={6}><p>Gender</p></Grid>
                <Grid item xs={6}><p>Male</p></Grid>
            </Grid>
            <Divider style={{ margin: '0px 22px' }} />
            <Grid container>
                <Grid item xs={6}><p>Language</p></Grid>
                <Grid item xs={6}><p>English</p></Grid>
            </Grid>
        </div>
    )
}
