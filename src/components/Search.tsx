import React from 'react'
import {Typography, TextField, Box, InputAdornment, Divider, makeStyles } from '@material-ui/core'
import SearchIcon from '@mui/icons-material/Search';
import styles from './Search.module.scss'

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
  const classes = useStyles()
  return (
    <>
        <Typography className={classes.text} component="h4">Filter by keywords</Typography>
        <TextField
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
      <Box className={styles.results}>Results: 6</Box>
      <Divider className={styles.divider} />
    </>
    
  )
}



export default Search