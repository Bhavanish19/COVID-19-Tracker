import React from 'react';
import {Card, CardContent, Typography, Grid} from  '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';
const Cards=({cardData:{confirmed, recovered, deaths, lastUpdate}})=>{
    if(!confirmed){
        return(<h1>Loading...</h1>)
    }
    return(
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>confirmed</Typography>
                    <Typography variant="h5"><CountUp start={0} end={confirmed.value} duration={2.5} separator="," /></Typography>
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2">Number of confirmed case of COVID-19</Typography>
                </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>recovered</Typography>
                    <Typography variant="h5"><CountUp start={0} end={recovered.value} duration={3} separator="," /></Typography>
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2">Number of recovered case of COVID-19</Typography>
                </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>deaths</Typography>
                    <Typography variant="h5"><CountUp start={0} end={deaths.value} duration={3.5} separator="," /></Typography>
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2">Number of deaths case of COVID-19</Typography>
                </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}
export default Cards;