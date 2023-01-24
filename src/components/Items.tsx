import React from 'react'
import styles from './Items.module.scss'
import Item from './Item'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { useSelector } from "react-redux";
import { RootState } from './redux/store';
import { IItem } from './interface';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
  }),
);

function Items() {
    const classes = useStyles();
    const filteredItems = useSelector((state:RootState) => state.main.filteredItems);

    return (
    <div className={`${classes.root} ${styles.root}`}>
      <Grid className={styles.container} container spacing={3}>
      {filteredItems?.map((item:IItem) => (
        <Grid className={styles.grid} key={item.id} item xs={4}>
          <Item item={item}/>
        </Grid>
      ))
      }
      </Grid>
    </div>
    )
}



export default Items
