import React from 'react'
// import styles from './Items.module.scss'
import Item from './Item'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from './redux/store';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginTop: '45px',
    },
  }),
);

  

function Items() {

    const items = useSelector((state:RootState) => state.main.items);
    const classes = useStyles();
    
    return (
    <div className={classes.root}>
      <Grid container spacing={3}> 
      {items.map((item) => (
        <Grid key={item.id} item xs={4}>
          <Item item={item}/>
        </Grid>
      ))}
      </Grid>
    </div>
        // <>
        //     <Item />
        // </>
    )
}



export default Items