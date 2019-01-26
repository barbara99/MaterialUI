import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import {Link} from 'react-router-dom';


const School = (props) => {
    console.log(props)
    return(
   <div>
            { props.school ? (
        <Card >
                    <CardMedia style={{height: 0, paddingTop: '56.25%'}}
                    image={props.school.fields.schoollogo}
                    name={props.school.fields.schoollogo}
                    />
                    <CardContent>
                
                    <Typography gutterBottom variant="headline" component="p">
                        {props.school.fields.url}
                    </Typography>
                    <Typography component="p">
                        {props.school.fields.url}
                    </Typography>
                    </CardContent>
                    <CardActions>
                
                    <Button size="small" color="primary">
                    <Link to='/Edit' className='menuLink'>Edit School</Link>
                    </Button> 
                    
                    
                    <Button size="small" color="primary">
                    <Link to='/view' className='menuLink'>View School</Link>
                    </Button>
                    
                    </CardActions>
        </Card> 
        
                
                 ) : null}
   </div> 
    )
         }
         
         export default School