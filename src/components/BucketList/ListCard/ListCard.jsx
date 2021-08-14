import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      minWidth: 250,
      maxWidth: 250,
      margin: '1em',
    },
    media: {
      height: 140,
    },
  });
  

const ListCard = (props) => {

    const { place, location, url, cardClick } = props;

    const classes = useStyles();

    return (<Card onClick={() => cardClick(true)} className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={url}
            title="Picture of Location"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              { place }
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              { location }
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>);
}

export default ListCard;