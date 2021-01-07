import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        color: '#000000',
        fontWeight: "bold",
        fontSize: 28
    },
}));

export default function Header() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" style={{backgroundPosition: 'center',backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat', backgroundImage: `url(https://hive.rochesterregional.org/-/media/coronavirusresourcebg/coronavirusbgv2.png?h=290&w=1290&la=en&hash=531F287049CCB788D904681C5993AE952672CDC6)` }}>
                <Toolbar>
                    <Typography variant="h5" className={classes.title}>
                        Covid 19 - Tracker
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}
