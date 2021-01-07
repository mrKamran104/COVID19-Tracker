import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CountUp from 'react-countup';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexGrow: 1,
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(40),
            height: theme.spacing(18),
        },

    },
}));

export default function Data() {
    const classes = useStyles();
    const [globalCases, setGlobalCases] = useState()
    const [date, setDate] = useState(null)

    useEffect(() => {
        (async () => {
            const reponse = await fetch('https://covid19.mathdro.id/api/')
            const data = await reponse.json()
            setDate(new Date(data.lastUpdate))
            setGlobalCases(data)
        })();
    }, [])

    return (
        <Box className={classes.root} display="flex" justifyContent="center">
            <Paper elevation={3} className="greenBottom">
                <Box mt={2} ml={2}>
                    <Typography color="textSecondary">
                        Infected
                    </Typography>
                    {globalCases ? <>
                        <Typography variant="h4" gutterBottom >
                            <CountUp start={0} end={globalCases.confirmed.value} duration={2.75} separator="," />
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
                    {globalCases ? <>
                        <Typography variant="h4" gutterBottom >
                            <CountUp start={0} end={globalCases.recovered.value} duration={2.75} separator="," />
                        </Typography>
                        <Typography color="textSecondary">
                            {date.toDateString()}, {date.toLocaleTimeString()}
                        </Typography> </> : 'Loading...'}
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
                    {globalCases ? <>
                        <Typography variant="h4" gutterBottom >
                            <CountUp start={0} end={globalCases.deaths.value} duration={2.75} separator="," />
                        </Typography>
                        <Typography color="textSecondary">
                            {date.toDateString()}, {date.toLocaleTimeString()}
                        </Typography></> : 'Loading...'}
                    <Typography variant="subtitle2" className={classes.desc} gutterBottom >
                        Number of deaths caused by COVID-19.
                    </Typography>
                </Box>
            </Paper>
        </Box>
    );
}
