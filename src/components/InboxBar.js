import React from 'react';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { makeStyles, Grid, Divider, Button } from '@material-ui/core';

const useStyles = makeStyles({
    header: {
        fontSize: 26,
        margin: '22px 0px 15px 18px',
        color: '#e6e4e4',
        fontWeight: '600'
    },
    icon: {
        width: 17,
        margin: '20px 0px',
        color: '#e6e4e4',
        border: '1px solid white',
        borderRadius: 40,
        padding: '6px 10px'
    },
    category: {
        color: '#e6e4e4',
        fontSize: 15.3,
        margin: '16px 0px 16px 18px',
        textAlign: 'left'
    },
    notify: {
        color: '#e6e4e4',
        fontSize: 15,
        margin: '17px 0px 17px 10px'
    },
    bar: {
        height: 2,
        backgroundColor: '#4e4b4b'
    },
    btn: {
        backgroundColor: '#00ffff00',
        padding: 0,
        border: 'none',
        '&:hover': {
            cursor: 'pointer'
        },
        margin: '0px 3px',
        borderRadius: 5
    },
    btn1: {
        backgroundColor: '#363d45',
        padding: 0,
        border: 'none',
        '&:hover': {
            cursor: 'pointer'
        },
        margin: '0px 3px',
        borderRadius: 5
    }
})

export default function InboxBar() {
    const classes = useStyles();
    return (
        <>
            <Grid container>
                <Grid item xs={8}>
                    <p className={classes.header}>Inbox</p>
                </Grid>
                <Grid item xs={3}>
                    <PersonAddIcon className={classes.icon} />
                </Grid>
            </Grid>
            <button className={classes.btn}>
                <Grid container>
                    <Grid item xs={8}>
                        <p className={classes.category}>All Messages</p>
                    </Grid>
                    <Grid item xs={3}>
                        <p className={classes.notify}>22</p>
                    </Grid>
                </Grid>
            </button>
            <button className={classes.btn1}>
                <Grid container>
                    <Grid item xs={8}>
                        <p className={classes.category}>Unread</p>
                    </Grid>
                    <Grid item xs={3}>
                        <p className={classes.notify}>22</p>
                    </Grid>
                </Grid>
            </button>
            <button className={classes.btn}>
                <Grid container>
                    <Grid item xs={8}>
                        <p className={classes.category}>Important</p>
                    </Grid>
                    <Grid item xs={3}>
                        <p className={classes.notify}>22</p>
                    </Grid>
                </Grid>
            </button>
            <button className={classes.btn}>
                <Grid container>
                    <Grid item xs={8}>
                        <p className={classes.category}>Drafts</p>
                    </Grid>
                    <Grid item xs={3}>
                        <p className={classes.notify}>22</p>
                    </Grid>
                </Grid>
            </button>
            <Divider className={classes.bar} />
            <button className={classes.btn}>
                <Grid container>
                    <Grid item xs={8}>
                        <p className={classes.category}>Teams</p>
                    </Grid>
                    <Grid item xs={3}>
                        <p className={classes.notify}>22</p>
                    </Grid>
                </Grid>
            </button>
            <button className={classes.btn}>
                <Grid container>
                    <Grid item xs={8}>
                        <p className={classes.category}>Group</p>
                    </Grid>
                    <Grid item xs={3}>
                        <p className={classes.notify}>22</p>
                    </Grid>
                </Grid>
            </button>
            <button className={classes.btn}>
                <Grid container>
                    <Grid item xs={8}>
                        <p className={classes.category}>Channel</p>
                    </Grid>
                    <Grid item xs={3}>
                        <p className={classes.notify}>22</p>
                    </Grid>
                </Grid>
            </button>
            <button className={classes.btn}>
                <Grid container>
                    <Grid item xs={8}>
                        <p className={classes.category}>Location</p>
                    </Grid>
                    <Grid item xs={3}>
                        <p className={classes.notify}>22</p>
                    </Grid>
                </Grid>
            </button>
            <button className={classes.btn}>
                <Grid container>
                    <Grid item xs={8}>
                        <p className={classes.category}>Media</p>
                    </Grid>
                    <Grid item xs={3}>
                        <p className={classes.notify}>22</p>
                    </Grid>
                </Grid>
            </button>
            <Divider className={classes.bar} />
            <button className={classes.btn}>
                <Grid container>
                    <Grid item xs={8}>
                        <p className={classes.category}>Help</p>
                    </Grid>
                </Grid>
            </button>
            <button className={classes.btn}>
                <Grid container>
                    <Grid item xs={8}>
                        <p className={classes.category}>Settings</p>
                    </Grid>
                </Grid>
            </button>
        </>
    )
}
