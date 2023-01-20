import React from 'react';
import styles from './Item.module.scss'
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography, Box} from '@material-ui/core/';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { IItem } from './interface';

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
    height: '100%',
  },
  media: {
    height: 217,
  },
  headline: {
    color: '#363636',
  },
  decription: {
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
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={item.imageUrl}
          title="Contemplative Reptile"
        />
        <CardContent>
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
                {item.title}
            </Typography>
            <Typography variant="body2" className={classes.decription} component="p">
                {item.summary.slice(0, 100) + '...'}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions disableSpacing={true}>
        <Button className={classes.footer}>Read more</Button>
        <Button className={styles.btn}><ArrowForwardIcon/></Button>
      </CardActions>
    </Card>
  );
}

export default Item