import React from 'react'
// import styles from './Items.module.scss'
import Item from './Item'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginTop: '45px',
    },
  }),
);



function Items() {
    const classes = useStyles();
    return (
    <div className={classes.root}>
      <Grid container spacing={3}> 
        <Grid item xs={4}>
            <Item/>
        </Grid>
        <Grid item xs={4}>
            <Item/>
        </Grid>
        <Grid item xs={4}>
            <Item/>
        </Grid>
        <Grid item xs={4}>
            <Item/>
        </Grid>
      </Grid>
    </div>
        // <>
        //     <Item />
        // </>
    )
}



export default Items