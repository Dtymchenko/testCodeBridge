import React from 'react';
import styles from './Item.module.scss'
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography, Box} from '@material-ui/core/';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { IItem } from './interface';
import reactStringReplace from 'react-string-replace';
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
    marginTop: '-21px',
  },
  text_content: {
    height: '54%',
  },
  media: {
    width: '100%',
    height: '217px',
  },
  headline: {
    height: '44%',
    minHeight: '100px',
    marginBottom: '15px',
    color: '#363636',
    overflowY: 'hidden',
    //can be also scroll, for example, depending on task
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

  const light = React.useCallback((filter: string, str:string): string | React.ReactNodeArray => {
    if (filter.trim()) {
      const arr = filter?.split(' ');

      return arr?.reduce((acc: any, el) => {
        acc = reactStringReplace(acc, new RegExp(`(${el})`, 'gi'), (match: string, index: number, offset: number) => {
            if (match) {
              return <span key={`${match}-${index}-${offset}`} style={{ backgroundColor: "yellow" }}>{match}</span>
            }
        });
        return acc;
      }, str);
    }
    return str;
  },[]);

  return (
    <Link to={`/articles/${item.id}`}>
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
            <Typography gutterBottom variant="h5" component="h2" className={`${classes.headline} ${styles.headline}`}>
                <p>{light(searchValue, item.title)}</p>
            </Typography>
            <Typography variant="body2" className={`${classes.description} ${styles.description}`}>
                {light(searchValue, summarySliced)}...
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