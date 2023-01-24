import React from 'react'
// import styles from './Items.module.scss'
import Item from './Item'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { useSelector, useDispatch } from "react-redux";
import { RootState } from './redux/store';
import { IItem } from './interface';
import {setFilteredItems} from './redux/slices/mainSlice'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginTop: '45px',
      padding: '0px 75px',
    },
  }),
);

  

function Items() {
    const dispatch = useDispatch()
    const items = useSelector((state:RootState) => state.main.items);
    const searchValue = useSelector((state:RootState) => state.main.searchValue);
    const filteredItems = useSelector((state:RootState) => state.main.filteredItems);
    console.log('filteredItems', filteredItems)
    const classes = useStyles();

    const filterItems = React.useCallback((arr:IItem[], fltr:string) => {
      const result:{title: IItem[], text: IItem[]} = {title:[], text:[]}
      const fltrArr = fltr.split(' ')
      if(fltrArr.length) {
        for (let i = 0; i < fltrArr.length; i++) {
          const element = fltrArr[i];
          for (let j = 0; j < arr.length; j++) {
            const element2 = arr[j];
            if(element2.title.toUpperCase().includes(element.toUpperCase()) && !result.title.includes(element2)) {
              result.title.push(element2)
            } else if(element2.summary.toUpperCase().includes(element.toUpperCase()) && !result.title.includes(element2) && !result.text.includes(element2)) {
              result.text.push(element2)
            }
          }
        }
        // console.log(result)
        dispatch(setFilteredItems(result))
        // return result 
      } 
      dispatch(setFilteredItems(arr))
      // return arr
    },[searchValue, items])

    React.useEffect(() => {
      filterItems(items, searchValue)
    },[items, searchValue])
  
    
    return (
    <div className={classes.root}>
      <Grid container spacing={3}> 
      {filteredItems.title.map((item:IItem) => (
        <Grid key={item.id} item xs={4}>
          <Item item={item}/>
        </Grid>
      ))
      }
      {/* {items
      .filter((item) => {
        if(item) {
          return item.title.toUpperCase().includes(searchValue.toUpperCase())
          || item.summary.toUpperCase().includes(searchValue.toUpperCase())
        }})
      .map((item) => (
        <Grid key={item.id} item xs={4}>
          <Item item={item}/>
        </Grid>
      ))} */}
      </Grid>
    </div>
    )
}



export default Items