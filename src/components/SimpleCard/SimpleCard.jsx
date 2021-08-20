import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


/*IMAGE IMPORTS*/
import Paris from '../../media/paris.jpg'
import Cinque from '../../media/cinqueterre.jpg'
import Galapagos from '../../media/galapagos.jpg'
import Niagara from '../../media/niagara.jpg'
import Huacachina from '../../media/huacachina.jpg'
import Easter from '../../media/easter.jpg'
import Thailand from '../../media/thailand.jpg'
import Pisa from '../../media/pisa.jpg'
import TajMahal from '../../media/tajmahal.jpg'
import Uyuni from '../../media/uyuni.jpg'
import SimpleButtonGroup from '../SimpleButtonGroup/SimpleButtonGroup';

const imageMapping = {
    'Paris': Paris,
    'Cinque': Cinque,
    'Galapagos': Galapagos,
    'Niagara': Niagara,
    'Huacachina': Huacachina,
    'Easter': Easter,
    'Thailand': Thailand,
    'Pisa': Pisa,
    'TajMahal': TajMahal,
    'Uyuni': Uyuni,
}



const useStyles = makeStyles({
    root: {
        minWidth: 325,
        minHeight: 325,
        margin: 0,
    },
});

const SimpleCard = (props) => {
    const { currentDisplay, getAnother } = props;

    const classes = useStyles();

    const image = require

    console.log(`curr`, currentDisplay);

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    style={{ height: 90, paddingTop: '56%' }}
                    image={imageMapping[currentDisplay.media]}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {currentDisplay.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {currentDisplay.location}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button onClick={() => getAnother()}  color="rebeccapurple">
                    Get Another
                </Button>
            </CardActions>
        </Card>
    );


}

export default SimpleCard;