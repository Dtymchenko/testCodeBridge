import React from 'react'
import {Box, Typography, makeStyles} from '@material-ui/core'
import { Link } from 'react-router-dom';


const useStyles = makeStyles(theme => ({
  text: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '16px',
    lineHeight: '20px',
    color: '#363636',
    fontWeight: 600,
    marginBottom: '10px',
}
}));

function NotFound() {
  const classes = useStyles()
  return (
    <Box>
      <Link to={'/'}>
        <Typography className={classes.text}>NotFound</Typography>
        <Typography className={classes.text}>Click to return to main page</Typography>
      </Link>
    </Box>
    
  )
}

export default NotFound
