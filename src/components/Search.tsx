import React from 'react'
import {Typography, TextField, Box, InputAdornment, Divider, makeStyles } from '@material-ui/core'
import SearchIcon from '@mui/icons-material/Search';
import styles from './Search.module.scss'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './redux/store';
import { setSearchValue } from './redux/slices/mainSlice';

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
  const filtered = items.filter((item) => {
    if(item) {
      return item.title.toUpperCase().includes(searchValue.toUpperCase())
      || item.summary.toUpperCase().includes(searchValue.toUpperCase())
    }})
    const searchResult = filtered.length
    const classes = useStyles()

  return (
    <div className={styles.wrapper}>
        <Typography className={classes.text} component="h4">Filter by keywords</Typography>
        <TextField
        value={searchValue}
        onChange={(e => dispatch(setSearchValue(e.target.value)))}
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
      <Box className={styles.results}>{`Results: ${filtered.length}` }</Box>
      <Divider className={styles.divider} />
    </div>
    
  )
}



export default Search