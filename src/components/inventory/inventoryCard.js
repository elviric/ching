import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Badge from './inventoryBadge'
import image from './contemplativeLizard.jpg'
import plus from './plus.svg'

const styles = {
  root:{

  },
  card: {
    width: "50%",
    height: 250,
    maxWidth: 250
  },
  media: {
    position: "fixed",
    zIndex: -1,
    height: 250,
    width: 250,
    maxWidth: 250
  },
  content: {
    zIndex: 0,
    position: "relative",
    top: 123,
    color: "white",
    fontWeight: "bold"
  },
  button: {
    zIndex: 1
  },

};

function MediaCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <Badge />
      <CardActionArea className={classes.button}>
        <CardMedia
          className={classes.media}
          image={props.photo || image}
        />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2" color="inherit">
            {props.name}
          </Typography>
          <Typography component="p" color="inherit">
            {props.name} cost {props.price} DAI
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);