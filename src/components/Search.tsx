import React from 'react'
import {Typography, TextField, Box, InputAdornment, Divider, makeStyles } from '@material-ui/core'
import SearchIcon from '@mui/icons-material/Search';
import styles from './Search.module.scss'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './redux/store';
import {setFilteredItems, setSearchValue} from './redux/slices/mainSlice';
import {IItem} from "./interface";

const useStyles = makeStyles(theme => ({
  text: {
    fontSize: '16px',
    lineHeight: '20px',
    color: '#363636',
    fontWeight: 600,
    marginBottom: '10px',
}
}));

function Search() {
  const dispatch = useDispatch()
  const items = useSelector((state:RootState) => state.main.items)
  const searchValue = useSelector((state:RootState) => state.main.searchValue)
  const filteredItems = useSelector((state:RootState) => state.main.filteredItems);

  const classes = useStyles()

    // const filterItems = React.useCallback((arr:IItem[], fltr:string) => {
    //     dispatch(setSearchValue(fltr))
    //     const result:IItem[] = [];
    //     const fltrArr = fltr.split(' ')
    //     if (fltrArr) {
    //         for (let i = 0; i < fltrArr.length; i++) {
    //             const element = fltrArr[i];
    //             for (let j = 0; j < arr.length; j++) {
    //                 const element2 = arr[j];
    //                 if(element2.title.toUpperCase().includes(element.toUpperCase()) && !result.includes(element2) && element.trim()) {
    //                     result.push(element2)
    //                 } else if(element2.summary.toUpperCase().includes(element.toUpperCase()) && !result.includes(element2) && element.trim()) {
    //                     result.push(element2)
    //                 }
    //             }
    //         }
    //         dispatch(setFilteredItems(result))
    //     } else {
    //         dispatch(setFilteredItems(arr))
    //     }
    // },[]);

    const filterItems = React.useCallback((arr:IItem[], fltr:string) => {
      dispatch(setSearchValue(fltr))
      const result:IItem[] = [];
      const fltrArr = fltr.split(' ')
      if (fltrArr.length && !!fltrArr[0]) {
          for (let i = 0; i < fltrArr.length; i++) {
              const element = fltrArr[i];
              if (!!element) {
                for (let j = 0; j < arr.length; j++) {
                  const element2 = arr[j];
                  if(element2.title.toUpperCase().includes(element.toUpperCase()) && !result.includes(element2)) {
                      result.push(element2)
                  } else if(element2.summary.toUpperCase().includes(element.toUpperCase()) && !result.includes(element2)) {
                      result.push(element2)
                  }
              }
              }
              
          }
          dispatch(setFilteredItems(result))
      } else {
          dispatch(setFilteredItems(arr))
      }
  },[dispatch]);

  const onFilterChange = React.useCallback((e:any) => {
      filterItems(items, e.target.value);
  }, [filterItems, items]);

  return (
    <div className={styles.wrapper}>
        <Typography className={classes.text} component="h4">Filter by keywords</Typography>
        <TextField
        value={searchValue}
        onChange={onFilterChange}
        className={styles.input}
        label="Search..."
        variant="outlined"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon className={styles.search_icon} />
            </InputAdornment>
          ),
        }}
      />
      <Box className={styles.results}>{`Results: ${filteredItems.length}` }</Box>
      <Divider className={styles.divider} />
    </div>
  );
}



export default Search
