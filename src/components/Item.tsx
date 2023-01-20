import React from 'react';
import styles from './Item.module.scss'
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography, Box} from '@material-ui/core/';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
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

function Item() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/assets/bg.png"
          title="Contemplative Reptile"
        />
        <CardContent>
            <Typography className={styles.header}>
                {<CalendarTodayOutlinedIcon/>}
                June 29th, 2021
              </Typography>
            <Typography gutterBottom variant="h5" component="h2" className={classes.headline}>
                The 2020 World's Most Valuable Brands
            </Typography>
            <Typography variant="body2" className={classes.decription} component="p">
                Non sed molestie tortor massa vitae in mattis. Eget vel consequat hendrerit commodo libero aliquam. Urna arcu nunc tortor vitae pharetra...
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