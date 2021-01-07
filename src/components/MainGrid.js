import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GlobalData from './GlobalData';
import CountryData from './CountryData';
import Charts from './Charts';
import { NativeSelect, FormControl, Typography, Paper, Box, Grid} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: 20,
        width: '100%',
        flexWrap: 'wrap',
    },
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
    },
    pad: {
        padding: theme.spacing(2),
        paddingLeft: '0',
        paddingRight: '0'
    },
    padChart: {
        padding: theme.spacing(2),
    },
    mb: {
        marginBottom: 20,
    },
    typo: {
        textAlign: 'center',
        color: 'black',
    },
    form: {
        width: theme.spacing(80),
    }
}));

export default function MainGrid() {
    const classes = useStyles();
    const [countries, setCountries] = useState([])
    const [country, setCountry] = useState('Pakistan')
    const [countryData, setCountryData] = useState();

    useEffect(() => {
        (async () => {
            const response = await fetch('https://covid19.mathdro.id/api/countries')
            const data = await response.json()
            setCountries(data.countries)
        })();
    }, [])

    useEffect(() => {
        (async () => {
            const reponse = await fetch(`https://covid19.mathdro.id/api/countries/${country}`)
            const data = await reponse.json()
            setCountryData(data)
        })();
    }, [country])

    return (
        <div className={classes.root}>
            <Grid container className={classes.mb}>
                <Grid xs={12} item className={classes.pad}>
                    <Typography variant="h4" gutterBottom className={classes.typo}>
                        Global Data
                    </Typography>
                    <GlobalData />
                </Grid>
            </Grid>
            <Typography variant="h4" gutterBottom className={classes.typo}>
                Country Data
                </Typography>
            <Grid container justify='center' className={classes.mb}>
                <Grid xs={10} item className={classes.pad}>
                    <Box display="flex" justifyContent="center">
                        <FormControl className={classes.form} >
                            <NativeSelect defaultValue="" onChange={(e) => setCountry(e.target.value)}>
                                <option value="">{country}</option>
                                {countries.map((country, i) => <option key={i} value={country.name}>{country.name}</option>)}
                            </NativeSelect>
                        </FormControl>
                    </Box>
                </Grid>
            </Grid >
            <Grid container justify='center'>
                <Grid item xs={9} sm={7} md={4} lg={3} className={classes.pad}>
                    <Box ml={2}>
                        <CountryData countryData={countryData} />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={10} md={8} lg={9} className={classes.padChart}>
                    <Paper className={classes.paper}>
                        <Charts country={country} countryData={countryData} />
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}
