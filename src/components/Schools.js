import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const School = props => {
  console.log(props);
  var img = props.school.fields.schoollogo && props.school.fields.schoollogo.fields ? props.school.fields.schoollogo.fields.file.url: 'https://placehold.it/400';
  return (
    <div>
      {props.school ? (
        <Card>
          <CardMedia style={{ height: 0, paddingTop: '56.25%' }} image={img} name={props.school.fields.schoollogo} />
          <CardContent>
            <Typography gutterBottom variant="headline" component="p">
              {props.school.fields.url}
            </Typography>
            <Typography component="p">{props.school.fields.url}</Typography>
          </CardContent>
          <CardActions>
            <Link to="/edit" className="menuLink">
              <Button size="small" color="primary">
                Edit School
              </Button>
            </Link>
            <Link to="/view" className="menuLink">
              <Button size="small" color="primary">
                View School
              </Button>
            </Link>
          </CardActions>
        </Card>
      ) : null}
    </div>
  );
};


export default School;
