import React from 'react'
import { makeStyles, Divider, Grid } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const useStyle = makeStyles({
    searchBox: {
        backgroundPosition: '10px 12px',
        backgroundColor: '#383d44',
        width: '65%',
        fontSize: 16,
        padding: '12px 20px 12px 40px',
        border: 'none',
        borderRadius: 22,
        margin: '19px 10px 15px 10px',
        height: 15
    },
    icon: {
        position: 'absolute',
        left: 28,
        top: 27,
        width: 20,
        color: '#959090',
    },
    userIcon: {
        width: 66,
        height: 'auto',
        color: '#5f9ea0',
        marginLeft: 8
    },
    name: {
        color: '#e6e4e4',
        fontWeight: '600',
        fontSize: 16
    },
    msg: {
        color: '#e6e4e4',
        fontSize: 14
    },
    dots: {
        width: 22,
        color: '#e6e4e4'
    },
    time: {
        fontSize: 13,
        color: '#e6e4e4',
        marginTop: -5
    },
    online: {
        backgroundColor: '#2da02d',
        borderRadius: 25,
        height: 9,
        width: 8,
        position: 'absolute'
    },
    active: {
        backgroundColor: '#285e9b',
        borderRadius: 10,
        height: '100%',
        width: 4,
        top: '0',
        left: '0',
        position: 'absolute'
    }
})

export default function Contacts() {
    const classes = useStyle()
    return (
        <>
            <div style={{ textAlign: 'center', position: 'relative' }}>
                <SearchIcon className={classes.icon} />
                <input type="text" placeholder="Search" className={classes.searchBox} />
            </div>
            <Divider />
            <Grid container style={{ padding: '10px 16px 10px 5px' }}>
                <Grid item xs={3} style={{ position: 'relative' }}>
                    <div className={classes.online}></div>
                    <AccountCircleIcon className={classes.userIcon} />
                </Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={7} style={{ margin: 'auto' }}>
                    <div className={classes.name}>
                        Name
                    </div>
                    <div className={classes.msg}>
                        Message Content
                    </div>
                </Grid>
                <Grid item xs={1} style={{ margin: 'auto' }}>
                    <MoreHorizIcon className={classes.dots} />
                    <div className={classes.time}>
                        5.20
                    </div>
                </Grid>
            </Grid>
            <Divider />
            <Grid container style={{ padding: '10px 16px 10px 5px', position: 'relative' }}>
                <div className={classes.active}></div>
                <Grid item xs={3} style={{ position: 'relative' }}>
                    <AccountCircleIcon className={classes.userIcon} />
                </Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={7} style={{ margin: 'auto' }}>
                    <div className={classes.name}>
                        Name
                    </div>
                    <div className={classes.msg}>
                        Message Content
                    </div>
                </Grid>
                <Grid item xs={1} style={{ margin: 'auto' }}>
                    <MoreHorizIcon className={classes.dots} />
                    <div className={classes.time}>
                        5.20
                    </div>
                </Grid>
            </Grid>
            <Divider />
            <Grid container style={{ padding: '10px 16px 10px 5px' }}>
                <Grid item xs={3} style={{ position: 'relative' }}>
                    <div className={classes.online}></div>
                    <AccountCircleIcon className={classes.userIcon} />
                </Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={7} style={{ margin: 'auto' }}>
                    <div className={classes.name}>
                        Name
                    </div>
                    <div className={classes.msg}>
                        Message Content
                    </div>
                </Grid>
                <Grid item xs={1} style={{ margin: 'auto' }}>
                    <MoreHorizIcon className={classes.dots} />
                    <div className={classes.time}>
                        5.20
                    </div>
                </Grid>
            </Grid>
            <Divider />
            <Grid container style={{ padding: '10px 16px 10px 5px' }}>
                <Grid item xs={3} style={{ position: 'relative' }}>
                    <AccountCircleIcon className={classes.userIcon} />
                </Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={7} style={{ margin: 'auto' }}>
                    <div className={classes.name}>
                        Name
                    </div>
                    <div className={classes.msg}>
                        Message Content
                    </div>
                </Grid>
                <Grid item xs={1} style={{ margin: 'auto' }}>
                    <MoreHorizIcon className={classes.dots} />
                    <div className={classes.time}>
                        5.20
                    </div>
                </Grid>
            </Grid>
            <Divider />
        </>
    )
}
