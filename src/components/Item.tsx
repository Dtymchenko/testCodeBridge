import React from 'react';
import styles from './Item.module.scss'
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography, Box} from '@material-ui/core/';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { IItem } from './interface';
import { bottomNavigationActionClasses } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { setItemId } from './redux/slices/mainSlice';
import { RootState } from './redux/store';

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
    height: '100%',
  },
  content: {
    height: '90%',
  },
  text_content: {
    height: '54%',
  },
  media: {
    height: 217,
  },
  headline: {
    height: '44%',
    minHeight: '100px',
    color: '#363636',
    overflow: 'hidden',
  },
  description: {
    height: '32%',
    fontSize: '16px',
    lineHeight: '150%',
    color: '#363636',
},
  footer: {
    fontWeight: 700,
    fontSize: '16px',
    lineHeight: '150%',
    color: '#363636'
  },
});

interface ItemProps {
  item: IItem
}

function Item({item}: ItemProps) {
  const dispatch = useDispatch()
  const searchValue = useSelector((state:RootState) => state.main.searchValue);
  const summarySliced = item.summary.slice(0, 100)
  const classes = useStyles();

  // const light = React.useCallback((filter: string, str:string) => {
  //   const parts = str.split(new RegExp(`(${filter})`, "gi"));
  //   return parts.map((part, index) => (
  //     <React.Fragment key={index}>
  //     {part.toLowerCase() === filter.toLowerCase() ? (
  //       <span style={{ backgroundColor: "yellow" }}>{part}</span>
  //     ) : (
  //       part
  //     )}
  //   </React.Fragment>
  //   ))
  // },[searchValue])

  const light = React.useCallback((filter: string, str:string) => {
    const arr = filter?.split(' ')
    console.log('STARTED arr', arr)
    arr?.forEach(el => {
      console.log('el', el)
      console.log('str', str)
      console.log(str.toUpperCase().includes(el.toUpperCase()))
      if (str.toUpperCase().includes(el.toUpperCase())) {
        const parts = str.split(new RegExp(`(${el})`, "gi"));
        console.log('parts', parts)
      return parts.map((part, index) => (
      <React.Fragment key={index}>
      {part.toUpperCase() === el.toUpperCase() ? (
        <span style={{ backgroundColor: "yellow" }}>{part}</span>
      ) : (
        part
      )}
    </React.Fragment>
    ))
      } return str
    }) 
    // return str
  },[searchValue])

  // console.log(light('nasa said hello', 'nasa llorem ipsum maybe said'))

  const onClickLink = () => {
    dispatch(setItemId(item.id))
  }

  return (
    <Link to={'/detail'} onClick={onClickLink}>
      <Card className={classes.root}>
      <CardActionArea className={classes.content}>
        <CardMedia
          className={classes.media}
          image={item.imageUrl}
          title="Contemplative Reptile"
        />
        <CardContent className={classes.text_content} >
            <Typography className={styles.date}>
                <>
                {<CalendarTodayOutlinedIcon/>}
                {new Date(item.publishedAt).toLocaleDateString('en-us', { year:"numeric", month:"long", day:"numeric"})}
                {/* I hope, that date could be shown like this, the only difference with figma is that there is no ordinal suffix for the day of the month, 2 characters. Anyway if it is crucial, we can make it with function below:
                function ordinal(n) {
                let s = ["th", "st", "nd", "rd"];
                let v = n % 100;
                return n + (s[(v - 20) % 10] || s[v] || s[0]);
} */}
                </>
              </Typography>
            <Typography gutterBottom variant="h5" component="h2" className={classes.headline}>
                <p>{light(searchValue, item.title)}</p>
            </Typography>
            <Typography variant="body2" className={classes.description}>
                {light(searchValue, summarySliced)}...
                {/* <p>{summarySliced + '...'}</p> */}
                {/* {summarySliced + '...'} */}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions disableSpacing={true}>
        <Button className={classes.footer}>Read more</Button>
        <Button className={styles.btn}><ArrowForwardIcon/></Button>
      </CardActions>
    </Card>
    </Link>
    
  );
}

export default Item