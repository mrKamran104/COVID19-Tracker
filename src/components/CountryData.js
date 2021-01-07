import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Paper, Box } from '@material-ui/core';
import CountUp from 'react-countup';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            marginBottom: 23,
            width: '100%',
            height: theme.spacing(18),
        },
    },
}));

export default function GlobalData({ countryData }) {
    const classes = useStyles();

    let date = new Date()

    if (countryData) {
        date = new Date(countryData.lastUpdate);
    }

    return (
        <div className={classes.root}>
            <Paper elevation={3} className="greenBottom">
                <Box mt={2} ml={2}>
                    <Typography color="textSecondary">
                        Infected
                    </Typography>
                    {countryData ? <>
                        <Typography variant="h4" gutterBottom >
                            <CountUp start={0} end={countryData.confirmed.value} duration={2.75} separator="," />
                        </Typography>
                        <Typography color="textSecondary">
                            {date.toDateString()}, {date.toLocaleTimeString()}
                        </Typography></> : 'Loading...'}
                    <Typography variant="subtitle2" style={{ color: 'black' }} gutterBottom >
                        Number of active cases from COVID-19.
                    </Typography>
                </Box>
            </Paper>
            <Paper elevation={3} className="blueBottom">
                <Box mt={2} ml={2}>
                    <Typography color="textSecondary">
                        Recovered
                    </Typography>
                    {countryData ? <>
                        <Typography variant="h4" gutterBottom >
                            <CountUp start={0} end={countryData.recovered.value} duration={2.75} separator="," />
                        </Typography>
                        <Typography color="textSecondary">
                            {date.toDateString()}, {date.toLocaleTimeString()}
                        </Typography></> : 'Loading...'}
                    <Typography variant="subtitle2" className={classes.desc} gutterBottom >
                        Number of recoveries from COVID-19.
                    </Typography>
                </Box>
            </Paper>
            <Paper elevation={3} className="redBottom">
                <Box mt={2} ml={2}>
                    <Typography color="textSecondary">
                        Deaths
                    </Typography>
                    {countryData ? <>
                        <Typography variant="h4" gutterBottom >
                            <CountUp start={0} end={countryData.deaths.value} duration={2.75} separator="," />
                        </Typography>
                        <Typography color="textSecondary">
                            {date.toDateString()}, {date.toLocaleTimeString()}
                        </Typography></> : 'Loading...'}
                    <Typography variant="subtitle2" className={classes.desc} gutterBottom >
                        Number of deaths caused by COVID-19.
                    </Typography>
                </Box>
            </Paper>
        </div>
    );
}
