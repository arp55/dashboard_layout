import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button } from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import StarIcon from '@material-ui/icons/Star';
import PhoneIcon from '@material-ui/icons/Phone';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import die from '../assets/die.jpg'

const useStyles = makeStyles({
    root: {
        height: '100%'
    },
    header: {
        border: '1px solid #80808078',
        padding: 25,
        color: "#666666"
    },
    icons: {
        border: '1px solid #80808078',
        textAlign: 'center',
    },
    icon: {
        fontSize: 35,
        color: '#777777',
        marginTop: 17
    },
    userIcon: {
        color: '#5f9ea0',
        fontSize: 45
    },
    arrow: {
        width: 0,
        height: 0,
        borderTop: '7px solid transparent',
        borderBottom: '7px solid transparent',
        borderRight: '13px solid #1480f3',
        marginTop: 10
    },
    textBox: {
        resize: 'none',
        borderRadius: 10,
        backgroundColor: '#1480f3',
        color: '#ffffff',
        width: 'auto',
        padding: 10
    },
    time: {
        position: 'absolute',
        fontSize: 13.5,
        bottom: -8,
        right: 7
    },
    arrowRight: {
        width: 0,
        height: 0,
        borderTop: '7px solid transparent',
        borderBottom: '7px solid transparent',
        borderLeft: '13px solid #1480f3',
        marginTop: 10
    },
    img: {
        height: 120,
    },
    detail: {
        margin: 0
    },
    time1: {
        position: 'absolute',
        fontSize: 13.5,
        top: 43,
        right: 10
    }
})

const chats = [
    { name: 'user', time: '5.30', msg: 'Hey' },
    { name: 'guest', time: '5.40', msg: 'Hi' },
    { name: 'user', time: '5.43', msg: 'How are you?' },
    { name: 'guest', time: '5.45', msg: 'I am doing fine' },
    { name: 'user', time: '5.47', msg: 'Recommend a song mate' },
]

export default function Chatscreen() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={6} className={classes.header}>
                    <b>Name</b> is typing...
                </Grid>
                <Grid item xs={2} className={classes.icons}>
                    <StarIcon className={classes.icon} />
                </Grid>
                <Grid item xs={2} className={classes.icons}>
                    <PhoneIcon className={classes.icon} />
                </Grid>
                <Grid item xs={2} className={classes.icons}>
                    <VideocamIcon className={classes.icon} />
                </Grid>
            </Grid>
            <br />
            <div style={{ padding: 10 }}>
                {chats.map((chat, index) => {
                    return (
                        <div key={index}>
                            {chat.name === 'user' ?
                                // <Grid container>
                                <div style={{ display: 'flex', width: '100%', margin: 10 }}>
                                    <div style={{ position: 'relative' }}>
                                        <AccountCircleIcon className={classes.userIcon} />
                                        <span className={classes.time}>{chat.time}</span>
                                    </div>
                                    <div className={classes.arrow}></div>
                                    <textarea disabled className={classes.textBox}>
                                        {chat.msg}
                                    </textarea>
                                </div>
                                // </Grid>
                                :
                                <div style={{ float: 'right', margin: 10 }}>
                                    <div style={{ display: 'flex' }}>
                                        <textarea disabled className={classes.textBox}>
                                            {chat.msg}
                                        </textarea>
                                        <div className={classes.arrowRight}></div>
                                        <div style={{ position: 'relative' }}>
                                            <AccountCircleIcon className={classes.userIcon} />
                                            <span className={classes.time}>{chat.time}</span>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    )
                })}

                <div style={{ float: 'right' }}>
                    <div style={{ display: 'flex' }}>
                        <span disabled className={classes.textBox}>
                            <Grid container>
                                <Grid item xs={7}>
                                    <img src={die} className={classes.img} alt="img" />
                                </Grid>
                                <Grid item xs={5}>
                                    <p className={classes.detail}>Ready To Die</p>
                                    <p className={classes.detail}>The Notorious BIG</p>
                                    <p className={classes.detail}>*****   <span style={{ fontSize: 12 }}>95 Ratings</span></p>
                                    {/* <p className={classes.detail}></p> */}
                                    <Button variant="contained" color="primary">BUY NOw</Button>
                                </Grid>
                            </Grid>
                        </span>
                        <div className={classes.arrowRight}></div>
                        <div style={{ position: 'relative' }}>
                            <AccountCircleIcon className={classes.userIcon} />
                            <span className={classes.time1}>5.51</span>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
