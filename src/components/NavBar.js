import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import {Link} from 'react-router-dom';


const NavBar = () => {
    return(
        <div>
            <AppBar
            position="static">
            <Toolbar>
                <Typography
                variant="title"
                color="inherit">
                React & Material-UI Sample Application
            
          
                
                <div className="menu">
            
            <Link to='/schools' className='menuLink' variant="title"
                color="inherit">SCHOOLS</Link><br/>
            <Link to='/add_new' className='menuLink'>ADD NEW SCHOOL</Link><br/>
            <Link to='/Edit' className='menuLink'>Edit School</Link>
</div>
        

        </Typography>
        </Toolbar>
                
        </AppBar>
        </div>
    )
}

export default NavBar;